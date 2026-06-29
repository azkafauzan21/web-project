import React, { useState, useEffect, useRef } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Bot, Home, ChevronRight } from 'lucide-react';

export function DashboardTopbar() {
  const location = useLocation();

  const getPageTitle = (pathname) => {
    switch (pathname) {
      case '/dashboard': return 'Dashboard';
      case '/impact-calculator': return 'Simulasi Asteroid';
      case '/tsunami-simulator': return 'Simulasi Tsunami';
      case '/modul-lms': return 'Modul Belajar';
      default: return 'Astromitigasi';
    }
  };

  const pageTitle = getPageTitle(location.pathname);

  return (
    <header className="h-[56px] bg-white border-b border-slate-200 flex items-center px-5 gap-2.5 shrink-0 z-10">
      <div className="flex items-center gap-1.5 text-xs text-brand-slate2 flex-1">
        <Link to="/dashboard" className="cursor-pointer font-medium hover:underline text-brand-slate">Beranda</Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="font-semibold text-brand-navy text-[13px]">{pageTitle}</span>
      </div>
      
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1.5 px-3 py-1 bg-brand-bg border border-slate-200 rounded-full text-[11px] font-semibold text-brand-slate">
          <span>0%</span>
          <div className="w-[60px] h-[5px] rounded-full bg-brand-border overflow-hidden">
            <div className="h-full bg-brand-blue rounded-full transition-all duration-400" style={{width: '0%'}}></div>
          </div>
        </div>
        
        <button 
          className="w-8 h-8 rounded-md border border-slate-200 bg-white flex items-center justify-center cursor-pointer text-brand-slate transition-colors hover:bg-brand-bg hover:text-brand-navy"
          onClick={() => window.dispatchEvent(new Event('toggle-astro-ai'))}
          aria-label="Buka AI Assistant"
        >
          <Bot className="w-4 h-4" />
        </button>
        
        <Link to="/dashboard" className="w-8 h-8 rounded-md border border-slate-200 bg-white flex items-center justify-center cursor-pointer text-brand-slate transition-colors hover:bg-brand-bg hover:text-brand-navy">
          <Home className="w-4 h-4" />
        </Link>
      </div>
    </header>
  );
}
