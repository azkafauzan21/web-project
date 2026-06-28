import React, { useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import useStore from '../store/useStore';
import { AlertTriangle, ShieldCheck } from 'lucide-react';
import { Skeleton } from '../components/ui/skeleton';

export function Home() {
  const { neoData, isLoading, error, hasFetched, fetchData } = useStore();

  useEffect(() => {
    if (!hasFetched && !isLoading) {
      fetchData();
    }
  }, [hasFetched, isLoading, fetchData]);

  const threatLevel = useMemo(() => {
    if (neoData.length === 0) return 'UNKNOWN';
    const hasHazardous = neoData.some(neo => neo.isPotentiallyHazardous);
    return hasHazardous ? 'WASPADA' : 'AMAN';
  }, [neoData]);

  return (
    <div className="flex flex-col w-full min-h-screen">
      {/* Full-width Ticker Bar (matches DLLS-GEMA) */}
      <div className="w-full bg-slate-900 py-1.5 overflow-hidden relative flex z-40">
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-slate-900 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-slate-900 to-transparent z-10 pointer-events-none"></div>
        
        <div className="bg-red-600 text-white font-bold text-[11px] tracking-wide px-3 py-1 ml-4 rounded-sm shrink-0 z-20 flex items-center gap-1.5 h-6">
          <AlertTriangle className="w-3.5 h-3.5" /> DATA BENCANA
        </div>
        
        <div className="flex items-center gap-6 px-4 whitespace-nowrap overflow-hidden text-slate-300 text-[13px] font-medium animate-marquee">
          <div className="flex items-center gap-1.5"><span className="text-red-400">☄️</span> Asteroid Chelyabinsk (1500+ Korban) · 2013</div>
          <div className="w-1 h-1 bg-slate-700 rounded-full shrink-0"></div>
          <div className="flex items-center gap-1.5"><span className="text-amber-300">☀️</span> Badai Matahari G4 Geomagnetic · 2024</div>
          <div className="w-1 h-1 bg-slate-700 rounded-full shrink-0"></div>
          <div className="flex items-center gap-1.5"><span className="text-blue-300">🛰️</span> Sampah Antariksa (Kessler Syndrome)</div>
          <div className="w-1 h-1 bg-slate-700 rounded-full shrink-0"></div>
          <div className="flex items-center gap-1.5"><span className="text-red-400">☄️</span> Potensi Tumbukan Asteroid NEO (Apophis)</div>
          <div className="w-1 h-1 bg-slate-700 rounded-full shrink-0"></div>
          <div className="flex items-center gap-1.5"><span className="text-emerald-300">⛰️</span> Longsor · Cianjur Selatan · 1 hari lalu</div>
        </div>
      </div>

      {/* Hero Section (matches DLLS-GEMA) */}
      <section className="relative w-full pt-16 pb-24 overflow-hidden bg-slate-50 dark:bg-slate-950 flex-1 border-b border-slate-200 dark:border-slate-800">
        <div className="absolute inset-0 opacity-[0.15] dark:opacity-10 hero-bg-grid pointer-events-none"></div>
        <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] rounded-full bg-blue-600/10 dark:bg-blue-600/20 blur-[80px] pointer-events-none"></div>
        
        <div className="max-w-[1080px] mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          
          {/* Hero Left (Text content) */}
          <div className="flex-1 flex flex-col items-start text-left max-w-[560px]">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-md bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 font-semibold text-[11px] uppercase tracking-wider shadow-sm">
              <span className="text-blue-600 dark:text-blue-500 text-base leading-none">🤖</span> AI-Assisted Learning · IPBA UPI · RKI 2026
            </div>
            
            <h1 className="text-[44px] md:text-[56px] font-extrabold text-slate-900 dark:text-white leading-[1.1] tracking-[-1.5px] mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-700 to-purple-600">Astromitigasi</span><br />
              Learning System<br />
              <span className="text-[24px] md:text-[28px] text-slate-500 dark:text-slate-400 font-bold tracking-normal">(DLLS ASTRO)</span>
            </h1>
            
            <p className="text-[17px] md:text-[18px] text-slate-900 dark:text-white font-bold mb-3">
              Mempelajari Ancaman dari Luar Angkasa
            </p>
            
            <p className="text-[14px] md:text-[15px] text-slate-600 dark:text-slate-400 max-w-[480px] leading-[1.6] mb-8">
              Platform pembelajaran berbasis AI untuk meningkatkan literasi bencana astronomi. Dipersenjatai modul interaktif mengenai Cuaca Antariksa, Asteroid, dan Sampah Antariksa dengan data real-time.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 mb-12">
              <Link to="/login" className="inline-flex items-center gap-2 px-7 py-3.5 bg-blue-700 hover:bg-blue-800 text-white text-[14px] font-semibold rounded-xl transition-all shadow-[0_4px_12px_rgba(29,78,216,0.3)] hover:-translate-y-0.5">
                <span className="text-lg leading-none">🚀</span> Mulai Belajar Sekarang
              </Link>
              <button 
                onClick={() => document.getElementById('modul')?.scrollIntoView({ behavior: 'smooth' })} 
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-900 dark:text-white text-[14px] font-semibold rounded-xl transition-all shadow-sm"
              >
                <span className="text-lg leading-none text-slate-500">▶️</span> Lihat Demo Modul
              </button>
            </div>
            
            {/* Hero Stats (Matches DLLS-GEMA `.hero-stats`) */}
            <div className="flex flex-wrap items-center gap-6 md:gap-10 pt-6 border-t border-slate-200 dark:border-slate-800 w-full">
              <div className="flex flex-col gap-1">
                <div className="text-[28px] md:text-[32px] font-extrabold text-slate-900 dark:text-white leading-none tracking-tight">5</div>
                <div className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest leading-tight">Modul<br/>Bencana</div>
              </div>
              <div className="w-px h-10 bg-slate-200 dark:bg-slate-800 hidden md:block"></div>
              <div className="flex flex-col gap-1">
                <div className="text-[28px] md:text-[32px] font-extrabold text-slate-900 dark:text-white leading-none tracking-tight">87+</div>
                <div className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest leading-tight">Mahasiswa<br/>Aktif</div>
              </div>
              <div className="w-px h-10 bg-slate-200 dark:bg-slate-800 hidden md:block"></div>
              <div className="flex flex-col gap-1">
                <div className="text-[28px] md:text-[32px] font-extrabold text-slate-900 dark:text-white leading-none tracking-tight">0.47</div>
                <div className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest leading-tight">Rata-rata<br/>N-Gain</div>
              </div>
              <div className="w-px h-10 bg-slate-200 dark:bg-slate-800 hidden md:block"></div>
              <div className="flex flex-col gap-1">
                <div className="text-[28px] md:text-[32px] font-extrabold text-slate-900 dark:text-white leading-none tracking-tight">3</div>
                <div className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest leading-tight">Institusi<br/>Kolaborasi</div>
              </div>
            </div>
          </div>
          
          {/* Hero Right (Visual Cards layout matching DLLS-GEMA) */}
          <div className="flex-1 relative w-full max-w-[500px] h-[400px] flex items-center justify-center">
            
            {/* Main Center Card */}
            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-[0_8px_24px_rgba(15,23,42,0.12)] border border-slate-100 dark:border-slate-800 w-[300px] relative z-20 flex flex-col items-center text-center">
              <div className="w-[60px] h-[60px] rounded-[14px] bg-slate-900 dark:bg-slate-950 flex items-center justify-center text-[28px] mb-4 shadow-md">
                🌌
              </div>
              <div className="font-bold text-[17px] text-slate-900 dark:text-white mb-2 leading-tight">Bumi · Pantauan Antariksa</div>
              <div className="text-[13px] text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
                Ancaman cuaca antariksa · 30rb+ asteroid dekat bumi · Sampah orbit
              </div>
              <div className="bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-[11px] font-bold px-3 py-1.5 rounded-full border border-red-100 dark:border-red-900/30 flex items-center gap-1.5">
                <AlertTriangle className="w-3.5 h-3.5" /> Waspada Tinggi
              </div>
            </div>

            {/* Floating Card 1 (Top Left) */}
            <div className="absolute top-[20px] left-0 bg-white dark:bg-slate-900 p-3 rounded-xl shadow-[0_4px_12px_rgba(15,23,42,0.1)] border border-slate-100 dark:border-slate-800 flex items-center gap-3 z-30 animate-[float_4s_ease-in-out_infinite]">
              <div className="w-10 h-10 rounded-lg bg-red-50 dark:bg-red-900/20 flex items-center justify-center text-[20px]">
                ☄️
              </div>
              <div>
                <div className="text-[13px] font-bold text-slate-900 dark:text-white leading-tight">Asteroid Chelyabinsk</div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">1500+ korban · 2013</div>
              </div>
            </div>

            {/* Floating Card 2 (Bottom Right) */}
            <div className="absolute bottom-[40px] right-[-20px] bg-white dark:bg-slate-900 p-3 rounded-xl shadow-[0_4px_12px_rgba(15,23,42,0.1)] border border-slate-100 dark:border-slate-800 flex items-center gap-3 z-30 animate-[float_5s_ease-in-out_infinite_0.5s]">
              <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-[20px]">
                ☀️
              </div>
              <div>
                <div className="text-[13px] font-bold text-slate-900 dark:text-white leading-tight">Badai Matahari</div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">G4 Geomagnetic · 2024</div>
              </div>
            </div>

            {/* Floating Card 3 (Bottom Left) */}
            <div className="absolute bottom-[0px] left-[20px] bg-white dark:bg-slate-900 p-3 rounded-xl shadow-[0_4px_12px_rgba(15,23,42,0.1)] border border-slate-100 dark:border-slate-800 flex items-center gap-3 z-10 animate-[float_4.5s_ease-in-out_infinite_1s]">
              <div className="w-10 h-10 rounded-lg bg-amber-50 dark:bg-amber-900/20 flex items-center justify-center text-[20px]">
                🛰️
              </div>
              <div>
                <div className="text-[13px] font-bold text-slate-900 dark:text-white leading-tight">Sampah Antariksa</div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">Jatuhan Roket · 2022</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Urgency Strip (Matches DLLS-GEMA `.urgency-strip`) */}
      <div className="bg-[#1E293B] dark:bg-slate-900 border-t border-b border-[#0F172A] dark:border-slate-950 py-10 w-full">
        <div className="max-w-[1080px] mx-auto px-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-slate-700/50">
          <div className="flex flex-col items-center text-center px-4 py-4 md:py-0">
            <div className="text-3xl md:text-[34px] font-extrabold text-red-400 mb-2 leading-none tracking-tight">33.000+</div>
            <div className="text-[12px] text-slate-400 font-medium leading-[1.4]">Asteroid Dekat Bumi<br/>(NEO) dipantau NASA</div>
          </div>
          <div className="flex flex-col items-center text-center px-4 py-4 md:py-0">
            <div className="text-3xl md:text-[34px] font-extrabold text-amber-400 mb-2 leading-none tracking-tight">11 Tahun</div>
            <div className="text-[12px] text-slate-400 font-medium leading-[1.4]">Siklus Aktivitas<br/>Matahari Maksimum</div>
          </div>
          <div className="flex flex-col items-center text-center px-4 py-4 md:py-0">
            <div className="text-3xl md:text-[34px] font-extrabold text-blue-400 mb-2 leading-none tracking-tight">1 Juta+</div>
            <div className="text-[12px] text-slate-400 font-medium leading-[1.4]">Puing Sampah Antariksa<br/>&gt; 1 cm di Orbit</div>
          </div>
          <div className="flex flex-col items-center text-center px-4 py-4 md:py-0">
            <div className="text-3xl md:text-[34px] font-extrabold text-amber-400 mb-2 leading-none tracking-tight">G5</div>
            <div className="text-[12px] text-slate-400 font-medium leading-[1.4]">Ancaman Badai Magnetik<br/>Skala Ekstrem</div>
          </div>
          <div className="flex flex-col items-center text-center px-4 py-4 md:py-0">
            <div className="text-3xl md:text-[34px] font-extrabold text-emerald-400 mb-2 leading-none tracking-tight">↑0.47</div>
            <div className="text-[12px] text-slate-400 font-medium leading-[1.4]">Rata-rata N-Gain<br/>literasi mahasiswa DLLS</div>
          </div>
        </div>
      </div>

      {/* Required for the floating animation */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
          100% { transform: translateY(0px); }
        }
      `}} />
    </div>
  );
}
