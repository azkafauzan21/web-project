import React, { useState, useEffect, useRef } from 'react';
import { IconAward, IconBell, IconLogout, IconMenu2, IconPlanet, IconX } from '@tabler/icons-react';
import { useLocation, NavLink, useNavigate, Link } from 'react-router-dom';
import { ThemeToggle } from '../components/ThemeToggle';
import { useAuth } from '../contexts/AuthContext';
import { cn } from '@/lib/utils';

export function Topbar() {
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [showNotif, setShowNotif] = useState(false);
  const [hasUnread, setHasUnread] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowNotif(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const publicNavItems = [
    { name: 'Beranda', path: '/' },
    { name: 'Tentang Kami', path: '/tentang' },
    { name: 'Modul', path: '/modul' },
    { name: 'Galeri Proyek', path: '/galeri' },
    { name: 'Kontak', path: '/kontak' },
  ];

  const privateNavItems = [
    { name: 'Beranda', path: '/dashboard' },
    { name: 'Cuaca Antariksa', path: '/space-weather' },
    { name: 'Pantau Asteroid', path: '/tracker' },
    { name: 'Sampah Antariksa', path: '/space-debris' },
    { name: 'Modul Belajar', path: '/modul-lms' },
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
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        navigate(path);
      }
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="relative z-50 flex flex-col w-full bg-white/95 dark:bg-slate-950/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
      <div className="flex justify-between items-center h-[58px] max-w-[1080px] w-full mx-auto px-6">
        {/* Logo */}
        <Link to={user ? "/dashboard" : "/"} className="flex items-center gap-2.5 shrink-0">
          <div className="w-[34px] h-[34px] rounded-[9px] bg-gradient-to-br from-blue-700 to-purple-600 flex items-center justify-center shrink-0">
            <IconPlanet className="w-[18px] h-[18px] text-white" />
          </div>
          <div className="hidden sm:flex flex-col leading-[1.2]">
            <div className="text-[13px] font-bold text-slate-900 dark:text-white">DLLS <span className="text-blue-700 dark:text-blue-500">· ASTRO</span></div>
            <div className="text-[10px] font-medium text-slate-500 dark:text-slate-400 tracking-[0.2px]">Platform Literasi Bencana Antariksa</div>
          </div>
        </Link>
        
        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-0.5">
          {navItems.map((item) => (
            <NavLink 
              key={item.path}
              to={item.path}
              onClick={(e) => handleNavClick(e, item.path)}
              className={({ isActive }) => cn(
                "px-[13px] py-[6px] rounded-[7px] text-[13px] font-medium transition-colors whitespace-nowrap",
                isActive 
                  ? "bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400" 
                  : "text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/50 hover:text-slate-900 dark:hover:text-white"
              )}
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 shrink-0">
          <ThemeToggle />
          
          {user ? (
            <>
              {/* Notifications */}
              <div className="relative" ref={dropdownRef}>
                <button 
                  className="w-[34px] h-[34px] flex items-center justify-center text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800 rounded-[7px] transition-colors relative" 
                  onClick={() => setShowNotif(!showNotif)}
                  aria-label="Notifikasi"
                >
                  <IconBell className="w-4 h-4" />
                  {hasUnread && (
                    <div className="absolute top-1.5 right-1.5 w-[6px] h-[6px] bg-red-600 rounded-full"></div>
                  )}
                </button>
                
                {/* Notif Dropdown */}
                <div className={`absolute top-[calc(100%+8px)] right-0 w-80 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl rounded-[10px] overflow-hidden z-50 origin-top-right transition-all duration-200 ${showNotif ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'}`}>
                  <div className="flex justify-between items-center px-4 py-3 border-b border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 text-[13px] font-bold text-slate-900 dark:text-white">
                    Notifikasi
                    {hasUnread && (
                      <button 
                        onClick={() => setHasUnread(false)} 
                        className="text-[11px] font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 bg-transparent border-none cursor-pointer"
                      >
                        Tandai semua dibaca
                      </button>
                    )}
                  </div>
                  <div className={`flex gap-3 px-4 py-3 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer border-b border-slate-100 dark:border-slate-800/50 ${hasUnread ? 'bg-blue-50/50 dark:bg-blue-900/10' : ''}`}>
                    <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 text-sm">🤖</div>
                    <div>
                      <div className="text-[12px] text-slate-600 dark:text-slate-300 leading-relaxed">ASTRO AI siap menemanimu. Klik ikon robot di pojok.</div>
                      <div className="text-[10px] font-medium text-slate-400 dark:text-slate-500 mt-0.5">Baru saja</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="w-px h-5 bg-slate-200 dark:bg-slate-700 hidden sm:block mx-1"></div>
              
              {/* Logout Button */}
              <button 
                onClick={logout} 
                className="w-[34px] h-[34px] flex items-center justify-center text-slate-500 hover:text-red-600 dark:text-slate-400 dark:hover:text-red-400 bg-transparent hover:bg-red-50 dark:hover:bg-red-900/20 rounded-[7px] transition-colors"
                title="Keluar"
              >
                <IconLogout className="w-4 h-4" />
              </button>
            </>
          ) : (
            <div className="hidden sm:flex items-center gap-2">
              <Link to="/login" className="px-[16px] py-[7px] text-[13px] font-semibold text-slate-900 dark:text-slate-300 border-[1.5px] border-slate-300 dark:border-slate-700 hover:border-blue-700 hover:text-blue-700 dark:hover:border-blue-500 dark:hover:text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-[7px] transition-all">Daftar</Link>
              <Link to="/login" className="px-[18px] py-[7px] text-[13px] font-semibold bg-blue-700 hover:bg-blue-800 text-white border-[1.5px] border-blue-700 hover:border-blue-800 rounded-[7px] transition-all flex items-center gap-1.5">
                <IconLogout className="w-[15px] h-[15px]" style={{ transform: 'rotate(180deg)' }} /> Masuk
              </Link>
            </div>
          )}

          {/* Mobile IconMenu2 Toggle */}
          <button 
            className="lg:hidden w-[34px] h-[34px] flex items-center justify-center text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800 rounded-[7px] transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <IconX className="w-4 h-4" /> : <IconMenu2 className="w-4 h-4" />}
          </button>
        </div>
      </div>
      
      {/* Mobile IconMenu2 Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden flex flex-col bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 px-4 py-4 space-y-1 shadow-lg">
          {navItems.map((item) => (
            <NavLink 
              key={item.path}
              to={item.path}
              onClick={(e) => handleNavClick(e, item.path)}
              className={({ isActive }) => cn(
                "px-4 py-2.5 rounded-[7px] text-[13px] font-semibold transition-colors",
                isActive 
                  ? "bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400" 
                  : "text-slate-600 dark:text-slate-400"
              )}
            >
              {item.name}
            </NavLink>
          ))}
          {!user && (
            <div className="pt-3 mt-2 border-t border-slate-100 dark:border-slate-800/50 flex gap-2">
              <Link to="/login" className="flex-1 py-2 text-center text-[13px] font-semibold text-slate-700 dark:text-slate-300 border-[1.5px] border-slate-300 dark:border-slate-700 rounded-[7px]">Daftar</Link>
              <Link to="/login" className="flex-1 py-2 text-center text-[13px] font-semibold bg-blue-700 text-white border-[1.5px] border-blue-700 rounded-[7px]">Masuk</Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
