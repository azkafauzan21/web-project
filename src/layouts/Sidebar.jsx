import React, { useState, useRef, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { 
  IconHome, IconBooks, IconChartDots, 
  IconMap2, IconFolderOpen, IconMessages, IconApps,
  IconTrophy, IconUser, IconLogout, 
  IconDotsVertical, IconPlanet 
} from '@tabler/icons-react';
import { useAuth } from '../contexts/AuthContext';

export function Sidebar() {
  const { user, logout } = useAuth();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  
  const userName = user ? `${user.first_name} ${user.last_name || ''}`.trim() : 'Reza Mahasiswa';
  const initials = userName !== 'Reza Mahasiswa' ? userName.substring(0, 2).toUpperCase() : 'RZ';

  const navItemClass = "flex items-center gap-3 px-3 py-2.5 rounded-lg text-[13px] font-semibold text-slate-600 cursor-pointer transition-colors w-full text-left outline-none mb-1 hover:bg-slate-50 hover:text-slate-900";
  const activeNavItemClass = "flex items-center gap-3 px-3 py-2.5 rounded-lg text-[13px] font-semibold text-blue-700 bg-blue-50 w-full text-left outline-none mb-1";
  const sectionLabelClass = "text-[10px] font-extrabold text-slate-400 uppercase tracking-wider mt-5 mb-2 px-3";

  return (
    <aside className="w-[240px] bg-white border-r border-slate-200 flex flex-col shrink-0 overflow-y-auto z-20" aria-label="Navigasi utama">
      
      {/* Sidebar Logo */}
      <div className="px-4 py-4 border-b border-slate-100 flex items-center gap-3 shrink-0">
        <div className="w-[34px] h-[34px] rounded-lg bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center shrink-0 shadow-sm">
          <IconPlanet className="w-5 h-5 text-white" />
        </div>
        <div className="flex flex-col">
          <div className="text-[13px] font-bold text-slate-800 leading-tight"><span className="text-blue-600">DLLS</span> · GEMA</div>
          <div className="text-[11px] text-slate-500 font-normal mt-0.5">Disaster Literacy Platform</div>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="p-3 flex-1 overflow-y-auto" role="navigation">
        
        <div className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider mb-2 px-3">Utama</div>
        
        <NavLink to="/dashboard" className={({ isActive }) => isActive ? activeNavItemClass : navItemClass}>
          <IconHome className="w-[18px] h-[18px] shrink-0" stroke={2.5} /> Dashboard
        </NavLink>
        
        <NavLink to="/modul-lms" className={({ isActive }) => isActive ? activeNavItemClass : navItemClass}>
          <IconBooks className="w-[18px] h-[18px] shrink-0" stroke={2.5} /> Modul Bencana
        </NavLink>

        <NavLink to="/pencapaian" className={({ isActive }) => isActive ? activeNavItemClass : navItemClass}>
          <IconChartDots className="w-[18px] h-[18px] shrink-0" stroke={2.5} /> Progress Saya
        </NavLink>

        <div className={sectionLabelClass}>Eksplorasi</div>
        
        <NavLink to="/data-center" className={({ isActive }) => isActive ? activeNavItemClass : navItemClass}>
          <IconMap2 className="w-[18px] h-[18px] shrink-0" stroke={2.5} /> Disaster Data Center
        </NavLink>
        
        <NavLink to="/gallery" className={({ isActive }) => isActive ? activeNavItemClass : navItemClass}>
          <IconFolderOpen className="w-[18px] h-[18px] shrink-0" stroke={2.5} /> Project Gallery
        </NavLink>

        <NavLink to="/simulasi" className={({ isActive }) => isActive ? activeNavItemClass : navItemClass}>
          <IconApps className="w-[18px] h-[18px] shrink-0" stroke={2.5} /> Simulasi Interaktif
        </NavLink>

        <NavLink to="/forum" className={({ isActive }) => isActive ? activeNavItemClass : navItemClass}>
          <IconMessages className="w-[18px] h-[18px] shrink-0" stroke={2.5} /> Forum Diskusi
          <span className="ml-auto bg-red-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full leading-none">3</span>
        </NavLink>

        <div className={sectionLabelClass}>Personal</div>
        
        <NavLink to="/pencapaian" className={({ isActive }) => isActive ? activeNavItemClass : navItemClass}>
          <IconTrophy className="w-[18px] h-[18px] shrink-0" stroke={2.5} /> Pencapaian
        </NavLink>
        
        <NavLink to="/profil" className={({ isActive }) => isActive ? activeNavItemClass : navItemClass}>
          <IconUser className="w-[18px] h-[18px] shrink-0" stroke={2.5} /> Profil Saya
        </NavLink>
        
        <button onClick={logout} className={navItemClass}>
          <IconLogout className="w-[18px] h-[18px] shrink-0" stroke={2.5} /> Keluar
        </button>
      </nav>

      {/* User Section (Bottom) */}
      <div className="relative border-t border-slate-100" ref={dropdownRef}>
        <button 
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="w-full p-4 flex items-center gap-3 shrink-0 hover:bg-slate-50 transition-colors text-left outline-none group"
        >
          <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-[12px] font-bold text-white shrink-0">
            {initials}
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-[13px] font-bold text-slate-800 truncate">{userName}</div>
            <div className="text-[11px] text-slate-500 truncate mt-0.5">Pend. Fisika · UPI · 2024</div>
          </div>
          <IconDotsVertical className="w-[18px] h-[18px] text-slate-400 shrink-0 group-hover:text-slate-600 transition-colors" />
        </button>

        {isDropdownOpen && (
          <div className="absolute bottom-[100%] left-0 mb-2 w-[calc(100%-16px)] mx-2 bg-white border border-slate-200 rounded-xl shadow-lg py-1 z-50">
            <div className="px-4 py-3 border-b border-slate-100 mb-1">
              <div className="text-[13px] font-bold text-slate-800 truncate">{userName}</div>
              <div className="text-[11px] text-slate-500 truncate mt-0.5">{user?.email || 'user@example.com'}</div>
            </div>
            <NavLink 
              to="/profil" 
              onClick={() => setIsDropdownOpen(false)}
              className="flex items-center gap-2 px-4 py-2 text-[13px] font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors w-full"
            >
              <IconUser className="w-[16px] h-[16px]" /> Pengaturan Profil
            </NavLink>
            <button 
              onClick={() => {
                setIsDropdownOpen(false);
                logout();
              }} 
              className="flex items-center gap-2 px-4 py-2 text-[13px] font-medium text-red-600 hover:bg-red-50 hover:text-red-700 transition-colors w-full text-left"
            >
              <IconLogout className="w-[16px] h-[16px]" /> Keluar
            </button>
          </div>
        )}
      </div>
    </aside>
  );
}
