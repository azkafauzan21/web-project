import React, { useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import useStore from '../store/useStore';
import { IconAlertTriangle, IconShieldCheck, IconRocket, IconPlayerPlay, IconSun, IconComet, IconSatellite, IconRobot, IconRadar, IconPlanet } from '@tabler/icons-react';
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
      {/* Full-width Ticker Bar */}
      <div className="w-full bg-slate-900 py-1.5 overflow-hidden relative flex z-40">
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-slate-900 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-slate-900 to-transparent z-10 pointer-events-none"></div>
        
        <div className="bg-red-600 text-white font-bold text-[11px] tracking-wide px-3 py-1 ml-4 rounded-sm shrink-0 z-20 flex items-center gap-1.5 h-6">
          <IconAlertTriangle className="w-3.5 h-3.5" /> DATA ANTARIKSA
        </div>
        
        <div className="flex items-center gap-6 px-4 whitespace-nowrap overflow-hidden text-slate-300 text-[13px] font-medium animate-marquee">
          <div className="flex items-center gap-1.5"><IconComet className="w-4 h-4 text-red-400" /> Asteroid Chelyabinsk (1500+ Korban) · 2013</div>
          <div className="w-1 h-1 bg-slate-700 rounded-full shrink-0"></div>
          <div className="flex items-center gap-1.5"><IconSun className="w-4 h-4 text-amber-300" /> Badai Matahari G4 Geomagnetic · 2024</div>
          <div className="w-1 h-1 bg-slate-700 rounded-full shrink-0"></div>
          <div className="flex items-center gap-1.5"><IconSatellite className="w-4 h-4 text-blue-300" /> Sampah Antariksa (Kessler Syndrome)</div>
          <div className="w-1 h-1 bg-slate-700 rounded-full shrink-0"></div>
          <div className="flex items-center gap-1.5"><IconComet className="w-4 h-4 text-red-400" /> Potensi Tumbukan Asteroid NEO (Apophis)</div>
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
              <IconRobot className="w-4 h-4 text-blue-600 dark:text-blue-500" /> AI-Assisted Learning · IPBA UPI · RKI 2026
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
                <IconRocket className="w-5 h-5" /> Mulai Belajar Sekarang
              </Link>
              <button 
                onClick={() => document.getElementById('modul')?.scrollIntoView({ behavior: 'smooth' })} 
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-900 dark:text-white text-[14px] font-semibold rounded-xl transition-all shadow-sm"
              >
                <IconPlayerPlay className="w-5 h-5 text-slate-500" /> Lihat Demo Modul
              </button>
            </div>
            
            {/* Hero Stats (Matches DLLS-GEMA `.hero-stats`) */}
            <div className="flex w-full border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden bg-slate-50 dark:bg-slate-900/50">
              <div className="flex-1 px-2.5 py-3.5 text-center border-r border-slate-200 dark:border-slate-800">
                <div className="text-[22px] font-extrabold text-slate-900 dark:text-white leading-none mb-1 tracking-tight">5</div>
                <div className="text-[10px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide leading-tight">Modul<br/>Bencana</div>
              </div>
              <div className="flex-1 px-2.5 py-3.5 text-center border-r border-slate-200 dark:border-slate-800">
                <div className="text-[22px] font-extrabold text-slate-900 dark:text-white leading-none mb-1 tracking-tight">87+</div>
                <div className="text-[10px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide leading-tight">Mahasiswa<br/>Aktif</div>
              </div>
              <div className="flex-1 px-2.5 py-3.5 text-center border-r border-slate-200 dark:border-slate-800">
                <div className="text-[22px] font-extrabold text-slate-900 dark:text-white leading-none mb-1 tracking-tight">0.47</div>
                <div className="text-[10px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide leading-tight">Rata-rata<br/>N-Gain</div>
              </div>
              <div className="flex-1 px-2.5 py-3.5 text-center">
                <div className="text-[22px] font-extrabold text-slate-900 dark:text-white leading-none mb-1 tracking-tight">3</div>
                <div className="text-[10px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide leading-tight">Institusi<br/>Kolaborasi</div>
              </div>
            </div>
          </div>
          
          {/* Hero Right (Visual Cards layout matching DLLS-GEMA) */}
          <div className="flex flex-col gap-[10px] w-full max-w-[500px]">
            {/* Main Center Card (hero-vis-main) */}
            <div className="rounded-[16px] p-5 flex items-center gap-4 border border-red-600/15 bg-gradient-to-br from-red-50 to-red-50/50 dark:from-red-900/20 dark:to-red-900/10 relative overflow-hidden shadow-sm">
              <div className="absolute -right-5 -top-5 w-[100px] h-[100px] rounded-full bg-red-600/5 dark:bg-red-400/10"></div>
              
              <div className="text-[36px] shrink-0">
                <IconPlanet className="w-[36px] h-[36px] text-red-500" />
              </div>
              <div className="flex-1">
                <div className="text-[15px] font-bold text-slate-900 dark:text-white mb-0.5">Bumi · Pantauan Antariksa</div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400">Ancaman cuaca antariksa · 30rb+ asteroid dekat bumi · Sampah orbit</div>
              </div>
              
              <div className="ml-auto text-[10px] font-bold px-2.5 py-1 rounded-full bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400 border border-red-600/20 whitespace-nowrap shrink-0 flex items-center gap-1.5">
                <IconAlertTriangle className="w-3 h-3" /> Waspada Tinggi
              </div>
            </div>

            {/* Grid 2x2 (hero-vis-row) */}
            <div className="grid grid-cols-2 gap-[10px]">
              
              <div className="rounded-xl p-[14px] border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center gap-2.5 shadow-sm">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 bg-red-50 dark:bg-red-900/20 text-red-500">
                  <IconComet className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[12px] font-semibold text-slate-900 dark:text-white">Asteroid Chelyabinsk</div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400 mt-px">1500+ korban · 2013</div>
                </div>
              </div>

              <div className="rounded-xl p-[14px] border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center gap-2.5 shadow-sm">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 bg-amber-50 dark:bg-amber-900/20 text-amber-500">
                  <IconSun className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[12px] font-semibold text-slate-900 dark:text-white">Badai Matahari</div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400 mt-px">G4 Geomagnetic · 2024</div>
                </div>
              </div>

              <div className="rounded-xl p-[14px] border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center gap-2.5 shadow-sm">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 bg-blue-50 dark:bg-blue-900/20 text-blue-500">
                  <IconSatellite className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[12px] font-semibold text-slate-900 dark:text-white">Sampah Antariksa</div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400 mt-px">Jatuhan Roket · 2022</div>
                </div>
              </div>

              <div className="rounded-xl p-[14px] border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center gap-2.5 shadow-sm">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-500">
                  <IconRadar className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[12px] font-semibold text-slate-900 dark:text-white">Radiasi Flare</div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400 mt-px">Blackout Radio Kelas X</div>
                </div>
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
