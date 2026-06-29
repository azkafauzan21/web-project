import React, { useState, useRef, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { IconActivity, IconBook, IconHome, IconLayoutDashboard, IconLogout, IconDotsVertical, IconPlanet, IconShieldExclamation, IconSun, IconTelescope, IconTrophy, IconUser } from '@tabler/icons-react';
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
  
  const userName = user ? `${user.first_name} ${user.last_name || ''}`.trim() : 'Penjelajah';
  const initials = userName !== 'Penjelajah' ? userName.substring(0, 2).toUpperCase() : 'RZ';

  const navItemClass = "flex items-center gap-2 px-2.5 py-1.5 rounded-md text-xs font-medium text-brand-slate cursor-pointer transition-colors w-full text-left outline-none mb-0.5 hover:bg-brand-bg hover:text-brand-navy";
  const activeNavItemClass = "flex items-center gap-2 px-2.5 py-1.5 rounded-md text-xs font-semibold text-brand-navy bg-brand-bg w-full text-left outline-none mb-0.5";

  return (
    <aside className="w-[220px] bg-white border-r border-slate-200 flex flex-col shrink-0 overflow-y-auto z-20" aria-label="Navigasi utama">
      <div className="px-3.5 py-3.5 pb-3 border-b border-slate-200 flex items-center gap-2 shrink-0">
        <div className="w-[30px] h-[30px] rounded-lg bg-gradient-to-br from-brand-blue to-brand-purple flex items-center justify-center shrink-0">
          <IconBook className="w-[15px] h-[15px] text-white" />
        </div>
        <div>
          <div className="text-xs font-bold text-brand-navy"><span className="text-brand-blue">DLLS</span> · GEMA</div>
          <div className="text-[10px] text-brand-slate2">Disaster Literacy</div>
        </div>
      </div>

      <nav className="p-2.5 flex-1" role="navigation">
        <div className="text-[10px] font-bold text-brand-slate2 uppercase tracking-wide mb-2 px-1">Main Menu</div>
        
        <NavLink to="/dashboard" className={({ isActive }) => isActive ? activeNavItemClass : navItemClass}>
          <IconLayoutDashboard className="w-[16px] h-[16px] shrink-0" /> Dashboard
        </NavLink>
        
        <NavLink to="/modul-lms" className={({ isActive }) => isActive ? activeNavItemClass : navItemClass}>
          <IconBook className="w-[16px] h-[16px] shrink-0" /> Semua Modul
        </NavLink>

        <NavLink to="/impact-calculator" className={({ isActive }) => isActive ? activeNavItemClass : navItemClass}>
          <IconActivity className="w-[16px] h-[16px] shrink-0" /> Simulasi Asteroid
        </NavLink>
        
        <NavLink to="/tsunami-simulator" className={({ isActive }) => isActive ? activeNavItemClass : navItemClass}>
          <IconShieldExclamation className="w-[16px] h-[16px] shrink-0" /> Simulasi Tsunami
        </NavLink>

        <div className="text-[10px] font-bold text-brand-slate2 uppercase tracking-wide mt-4 mb-2 px-1">Personal</div>
        
        <NavLink to="/pencapaian" className={({ isActive }) => isActive ? activeNavItemClass : navItemClass}>
          <IconTrophy className="w-[16px] h-[16px] shrink-0" /> Pencapaian
        </NavLink>
        
        <NavLink to="/profil" className={({ isActive }) => isActive ? activeNavItemClass : navItemClass}>
          <IconUser className="w-[16px] h-[16px] shrink-0" /> Profil Saya
        </NavLink>
        
        <NavLink to="/" className={navItemClass}>
          <IconHome className="w-[16px] h-[16px] shrink-0" /> Laman Utama
        </NavLink>

        <button onClick={logout} className={navItemClass + " mt-2 text-red-600 hover:bg-red-50 hover:text-red-700"}>
          <IconLogout className="w-[16px] h-[16px] shrink-0" /> Keluar
        </button>
      </nav>

      <div className="relative border-t border-slate-200" ref={dropdownRef}>
        <button 
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="w-full px-3 py-2.5 flex items-center gap-2 shrink-0 hover:bg-slate-50 transition-colors text-left outline-none"
        >
          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-brand-blue to-brand-purple flex items-center justify-center text-[11px] font-bold text-white shrink-0">
            {initials}
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-[11px] font-semibold text-brand-navy truncate">{userName}</div>
            <div className="text-[10px] text-brand-slate2 truncate">Siswa Astronomi</div>
          </div>
          <IconDotsVertical className="w-4 h-4 text-brand-slate2 shrink-0" />
        </button>

        {isDropdownOpen && (
          <div className="absolute bottom-full left-0 mb-1 w-[200px] mx-2 bg-white border border-slate-200 rounded-lg shadow-lg py-1 z-50">
            <div className="px-3 py-2 border-b border-slate-100 mb-1">
              <div className="text-[11px] font-bold text-brand-navy truncate">{userName}</div>
              <div className="text-[10px] text-brand-slate2 truncate">{user?.email || 'user@example.com'}</div>
            </div>
            <NavLink 
              to="/profil" 
              onClick={() => setIsDropdownOpen(false)}
              className="flex items-center gap-2 px-3 py-1.5 text-xs text-brand-slate hover:bg-slate-50 hover:text-brand-navy transition-colors w-full"
            >
              <IconUser className="w-3.5 h-3.5" /> Pengaturan Profil
            </NavLink>
            <button 
              onClick={() => {
                setIsDropdownOpen(false);
                logout();
              }} 
              className="flex items-center gap-2 px-3 py-1.5 text-xs text-red-600 hover:bg-red-50 hover:text-red-700 transition-colors w-full text-left"
            >
              <IconLogout className="w-3.5 h-3.5" /> Keluar
            </button>
          </div>
        )}
      </div>
    </aside>
  );
}
