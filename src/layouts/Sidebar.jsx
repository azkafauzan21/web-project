import React, { useState } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { Home, Radar, BookOpen, Sun, Satellite, ShieldAlert, Lock, LogOut } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useAuth } from '@/contexts/AuthContext';

export function Sidebar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const publicNavItems = [
    { name: 'Beranda Pendaratan', path: '/', icon: Home, isLocked: false },
    { name: 'Tentang Kami', path: '/tentang', icon: null, isLocked: false },
    { name: 'Modul Publik', path: '/modul', icon: BookOpen, isLocked: false },
    { name: 'Galeri Proyek', path: '/galeri', icon: null, isLocked: false },
    { name: 'Kontak', path: '/kontak', icon: null, isLocked: false },
  ];

  const privateNavItems = [
    { name: 'Dashboard', path: '/dashboard', icon: Radar, isLocked: false },
    { name: 'Modul Belajar', path: '/modul-lms', icon: BookOpen, isLocked: false },
    { name: 'Cuaca Antariksa', path: '/space-weather', icon: Sun, isLocked: false },
    { name: 'Pantau Asteroid', path: '/tracker', icon: Satellite, isLocked: false },
    { name: 'Sampah Antariksa', path: '/space-debris', icon: ShieldAlert, isLocked: false },
  ];

  const navItems = user ? privateNavItems : publicNavItems;

  const onePagePaths = ['/', '/tentang', '/modul', '/galeri', '/kontak'];
  const isOnePage = onePagePaths.includes(location.pathname);

  const handleNavClick = (e, path) => {
    if (onePagePaths.includes(path) && isOnePage) {
      e.preventDefault();
      const idMap = {
        '/': 'beranda',
        '/tentang': 'tentang',
        '/modul': 'modul',
        '/galeri': 'galeri',
        '/kontak': 'kontak'
      };
      
      const targetId = idMap[path];
      const el = document.getElementById(targetId);
      
      if (el) {
        // Prevent intersection observer from fighting URL updates by scrolling smoothly
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        navigate(path);
      }
    }
  };

  return (
    <aside className="w-[260px] bg-white dark:bg-slate-950 border-r border-slate-200 dark:border-slate-800 flex flex-col z-[100] shrink-0 transition-all duration-300">
      <div className="px-4 py-3 pb-3 border-b border-slate-200 dark:border-slate-800 flex items-center gap-2.5 shrink-0">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shrink-0">
          <ShieldAlert className="w-5 h-5 text-white" />
        </div>
        <div className="leading-tight">
          <div className="text-xs font-bold text-slate-900 dark:text-white">DLLS <span className="text-blue-600">ASTRO</span></div>
          <div className="text-[10px] text-slate-500 font-normal">Disaster Literacy</div>
        </div>
      </div>
      
      <nav className="flex-1 py-2.5">
        <div className="px-4 py-2 pb-1 text-[10px] font-bold text-slate-500 uppercase tracking-wider">Main Menu</div>
        {navItems.map((item) => (
          item.isLocked ? (
            <button key={item.name} className="flex items-center gap-2.5 px-3.5 py-2 mx-1.5 w-[calc(100%-12px)] text-[13px] font-medium text-slate-400 bg-transparent rounded-md cursor-not-allowed opacity-60">
              {item.icon ? <item.icon className="w-[18px] h-[18px] shrink-0" /> : <div className="w-[18px] h-[18px] shrink-0" />}
              <span>{item.name}</span>
              <Lock className="w-[14px] h-[14px] ml-auto" />
            </button>
          ) : (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={(e) => handleNavClick(e, item.path)}
              className={({ isActive }) => cn(
                "flex items-center gap-2.5 px-3.5 py-2 mx-1.5 w-[calc(100%-12px)] text-[13px] font-medium rounded-md transition-colors",
                isActive 
                  ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 font-semibold" 
                  : "text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:text-slate-900 dark:hover:text-white"
              )}
            >
              {item.icon ? <item.icon className="w-[18px] h-[18px] shrink-0" /> : <div className="w-[18px] h-[18px] shrink-0" />}
              <span>{item.name}</span>
              {item.badge && <span className="ml-auto text-[10px] font-bold px-1.5 py-px rounded-full bg-red-600 text-white">{item.badge}</span>}
            </NavLink>
          )
        ))}
      </nav>

      <div className="px-3.5 py-3 border-t border-slate-200 dark:border-slate-800 flex items-center gap-2.5 shrink-0">
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-xs font-bold text-white shrink-0">
          {user ? user.first_name?.charAt(0).toUpperCase() : 'A'}
        </div>
        <div className="min-w-0 flex-1">
          <div className="text-xs font-semibold text-slate-900 dark:text-white truncate">
            {user ? `${user.first_name} ${user.last_name || ''}` : 'Administrator'}
          </div>
          <div className="text-[10px] text-slate-500 truncate">
            {user ? user.role : 'Sistem Mitigasi'}
          </div>
        </div>
        <button 
          onClick={() => {
            if (user) {
              logout();
              navigate('/');
            }
          }}
          className="ml-auto bg-transparent border-none cursor-pointer text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 p-1 flex items-center"
          title="Keluar"
        >
          <LogOut className="w-4 h-4" />
        </button>
      </div>
    </aside>
  );
}
