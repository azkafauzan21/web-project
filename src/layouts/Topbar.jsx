import React, { useState, useEffect, useRef } from 'react';
import { Bell, Search, ShieldCheck } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { ThemeToggle } from '../components/ThemeToggle';
import { useAuth } from '../contexts/AuthContext';

export function Topbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [showNotif, setShowNotif] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [hasUnread, setHasUnread] = useState(true);
  const dropdownRef = useRef(null);
  const profileDropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowNotif(false);
      }
      if (profileDropdownRef.current && !profileDropdownRef.current.contains(event.target)) {
        setShowProfile(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative z-40 flex justify-between items-center px-6 py-4 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
      <div className="text-lg font-bold text-slate-900 dark:text-white">Global Threat Dashboard</div>
      
      <div className="flex items-center gap-3">
        {/* Progress Chip */}
        <div className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-full text-xs font-semibold">
          Progres Modul
          <div className="w-16 h-1.5 bg-blue-200 dark:bg-blue-900/50 rounded-full overflow-hidden">
            <div className="h-full bg-blue-600 dark:bg-blue-500 rounded-full" style={{ width: '45%' }}></div>
          </div>
        </div>

        <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 rounded-full text-xs font-bold">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Status: AMAN</span>
        </div>
        
        <div className="relative hidden sm:block">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input 
            type="text" 
            placeholder="Cari..." 
            className="pl-9 pr-4 py-1.5 bg-slate-100 dark:bg-slate-800 border-transparent focus:bg-white dark:focus:bg-slate-900 border focus:border-blue-500 dark:focus:border-blue-500 rounded-full text-sm outline-none transition-all w-48 focus:w-64 text-slate-900 dark:text-white"
          />
        </div>
        
        <div className="relative" ref={dropdownRef}>
          <button className="p-2 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors relative" onClick={() => setShowNotif(!showNotif)}>
            <Bell className="w-4 h-4" />
            {hasUnread && (
              <div className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-white dark:border-slate-950"></div>
            )}
          </button>
          
          {/* Notif Dropdown */}
          <div className={`absolute top-full right-0 mt-2 w-80 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-lg rounded-xl overflow-hidden z-50 origin-top-right transition-all duration-200 ${showNotif ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'}`}>
            <div className="flex justify-between items-center px-4 py-3 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/50 text-sm font-semibold text-slate-900 dark:text-white">
              Notifikasi
              {hasUnread && (
                <span 
                  onClick={() => setHasUnread(false)} 
                  className="text-xs font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 cursor-pointer"
                >
                  Tandai semua dibaca
                </span>
              )}
            </div>
            <div className={`flex gap-3 px-4 py-3 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer border-b border-slate-100 dark:border-slate-800/50 ${hasUnread ? 'bg-blue-50/30 dark:bg-blue-900/10' : ''}`}>
              <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0 text-sm">🎯</div>
              <div>
                <div className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">Pre-test kamu tersimpan. Skor awal: <strong className="text-slate-900 dark:text-white">42%</strong>. Mulai Modul 1!</div>
                <div className="text-[10px] text-slate-400 dark:text-slate-500 mt-1">Baru saja</div>
              </div>
            </div>
            <div className={`flex gap-3 px-4 py-3 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer border-b border-slate-100 dark:border-slate-800/50 ${hasUnread ? 'bg-blue-50/30 dark:bg-blue-900/10' : ''}`}>
              <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0 text-sm">🤖</div>
              <div>
                <div className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">ASTRO AI siap menemanimu. Klik ikon robot di pojok.</div>
                <div className="text-[10px] text-slate-400 dark:text-slate-500 mt-1">5 menit lalu</div>
              </div>
            </div>
            <div className="flex gap-3 px-4 py-3 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer border-b border-slate-100 dark:border-slate-800/50">
              <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0 text-sm">📊</div>
              <div>
                <div className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">Data X-Flare terbaru kelas X1.2 terdeteksi NOAA.</div>
                <div className="text-[10px] text-slate-400 dark:text-slate-500 mt-1">3 jam lalu</div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-px h-6 bg-slate-200 dark:bg-slate-800 mx-1"></div>
        
        <ThemeToggle />
        
        <div className="hidden sm:flex items-center gap-2">
          {!user ? (
            <>
              <Link to="/login" className="px-4 py-2 text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Masuk
              </Link>
              <Link to="/register" className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors shadow-sm shadow-blue-600/20">
                Daftar
              </Link>
            </>
          ) : (
            <div className="relative" ref={profileDropdownRef}>
              <button 
                onClick={() => setShowProfile(!showProfile)}
                className="flex items-center gap-2 hover:bg-slate-100 dark:hover:bg-slate-800 p-1.5 pr-3 rounded-full transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-xs font-bold text-white shrink-0">
                  {user?.first_name?.charAt(0).toUpperCase() || 'U'}
                </div>
                <div className="text-sm font-medium text-slate-700 dark:text-slate-300 hidden md:block">
                  {user.first_name}
                </div>
              </button>

              {/* Profile Dropdown */}
              <div className={`absolute top-full right-0 mt-2 w-48 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-lg rounded-xl overflow-hidden z-50 origin-top-right transition-all duration-200 ${showProfile ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'}`}>
                <div className="px-4 py-3 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/50">
                  <div className="text-sm font-semibold text-slate-900 dark:text-white truncate">{user.first_name} {user.last_name}</div>
                  <div className="text-xs text-slate-500 truncate">{user.email}</div>
                </div>
                <div className="py-1">
                  <button className="w-full text-left px-4 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                    Pengaturan Akun
                  </button>
                  <button 
                    onClick={() => {
                      logout();
                      navigate('/');
                    }}
                    className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-900/10 transition-colors"
                  >
                    Keluar
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
