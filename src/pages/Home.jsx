import React, { useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import useStore from '../store/useStore';
import { ShieldAlert, ShieldCheck, Sun, Zap, AlertTriangle, Satellite, Rocket } from 'lucide-react';
import { Skeleton } from '../components/ui/skeleton';

export function Home() {
  const { neoData, isLoading, error, fetchData } = useStore();

  useEffect(() => {
    if (neoData.length === 0 && !isLoading) {
      fetchData();
    }
  }, [neoData.length, isLoading, fetchData]);

  const threatLevel = useMemo(() => {
    if (neoData.length === 0) return 'UNKNOWN';
    const hasHazardous = neoData.some(neo => neo.isPotentiallyHazardous);
    return hasHazardous ? 'WASPADA' : 'AMAN';
  }, [neoData]);

  return (
    <div className="space-y-6 pb-12">
      {/* Ticker Bar */}
      <div className="flex items-center bg-slate-900 rounded-lg mb-6 overflow-hidden">
        <div className="bg-blue-600 text-white font-bold text-xs px-4 py-2 shrink-0 z-10">LIVE ALERT</div>
        <div className="flex items-center gap-6 px-4 whitespace-nowrap overflow-hidden text-slate-300 text-sm font-medium animate-marquee">
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4" /> FLARE KELAS M TERDETEKSI 08:30 UTC
          </div>
          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full shrink-0"></div>
          <div className="flex items-center gap-2">
            <Satellite className="w-4 h-4" /> 24 OBJEK SAMPAH ANTARIKSA MENGALAMI DECAY
          </div>
          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full shrink-0"></div>
          <div className="flex items-center gap-2">
            <ShieldAlert className="w-4 h-4" /> PERINGATAN: 2 ASTEROID NEO MENDEKATI BUMI DALAM 48 JAM
          </div>
          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full shrink-0"></div>
          <div className="flex items-center gap-2">
            <Sun className="w-4 h-4" /> AKTIVITAS MATAHARI MENINGKAT (Siklus 25)
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-white dark:bg-slate-950 py-16 lg:py-20 relative overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800">
        <div className="absolute inset-0 opacity-40 hero-bg-grid rounded-xl"></div>
        <div className="absolute -top-20 -right-20 w-[440px] h-[440px] rounded-full bg-blue-600/10 dark:bg-blue-600/20 blur-[80px] pointer-events-none"></div>
        
        <div className="max-w-[1080px] mx-auto px-6 relative z-10 grid xl:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 font-bold text-xs w-max">
              <ShieldCheck className="w-4 h-4" /> ASTROMITIGASI PUSAT
            </div>
            <h1 className="text-4xl xl:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight">
              Sistem Peringatan <br />
              <span className="text-red-600 dark:text-red-500">Bencana Astronomi</span> Terpadu
            </h1>
            <p className="text-xl text-slate-700 dark:text-slate-300 font-semibold">
              "Melindungi infrastruktur Bumi dari ancaman luar angkasa."
            </p>
            <p className="text-base text-slate-600 dark:text-slate-400 max-w-md leading-relaxed">
              Pantau ancaman asteroid (NEO), badai matahari ekstrem (CME/Flare), dan 
              risiko tumbukan sampah antariksa secara real-time berbasis data satelit NASA/NOAA.
            </p>
            
            <div className="flex flex-wrap gap-4 mt-2">
              <Link to="/dashboard" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors shadow-lg shadow-blue-600/20">
                <RadarIcon className="w-5 h-5" /> Mulai Pemantauan
              </Link>
              <Link to="/ensiklopedia" className="inline-flex items-center gap-2 px-6 py-3 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-bold rounded-lg transition-colors">
                <Rocket className="w-5 h-5" /> Pelajari Modul
              </Link>
            </div>
            
            <div className="flex flex-wrap border-t border-slate-200 dark:border-slate-800 pt-6 mt-4 gap-8">
              <div className="flex flex-col gap-1 pr-8 border-r border-slate-200 dark:border-slate-800">
                <div className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  {isLoading ? <Skeleton className="h-6 w-12 mx-auto" /> : neoData.length}
                </div>
                <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Objek Dekat Bumi<br/>(7 Hari)</div>
              </div>
              <div className="flex flex-col gap-1 pr-8 border-r border-slate-200 dark:border-slate-800">
                <div className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">X-Class</div>
                <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Solar Flare<br/>Tertinggi</div>
              </div>
              <div className="flex flex-col gap-1">
                <div className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">34k+</div>
                <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Puing Terlacak<br/>(LEO/GEO)</div>
              </div>
            </div>
          </div>
          
          <div className="w-full max-w-[600px] mx-auto flex flex-col gap-3">
            <div className="bg-red-600 text-white rounded-xl p-5 flex items-center gap-4 relative overflow-hidden shadow-xl shadow-red-600/20">
              <div className="text-3xl">☄️</div>
              <div>
                <div className="font-bold text-lg">Asteroid Tracker (NEO)</div>
                <div className="text-sm text-red-100">Sistem pelacakan lintasan 3D real-time</div>
              </div>
              <div className="absolute top-4 right-4 bg-white/20 px-2 py-0.5 rounded text-[10px] font-bold tracking-widest">LIVE</div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 flex items-center gap-3 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400">
                  <Sun />
                </div>
                <div>
                  <div className="font-bold text-sm text-slate-900 dark:text-white">Cuaca Antariksa</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">Badai Geomagnetik</div>
                </div>
              </div>
              
              <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 flex items-center gap-3 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                  <Satellite />
                </div>
                <div>
                  <div className="font-bold text-sm text-slate-900 dark:text-white">Kessler Syndrome</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">Sampah Orbital</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Urgency Strip */}
      <section className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-sm rounded-xl overflow-hidden mt-8">
        <div className="flex flex-col sm:flex-row divide-y sm:divide-y-0 sm:divide-x divide-slate-200 dark:divide-slate-800">
          <div className="flex-1 px-6 py-4 flex flex-col items-center justify-center text-center gap-1">
            <div className={`text-xl font-black tracking-tight ${threatLevel === 'WASPADA' ? 'text-red-600 dark:text-red-500' : 'text-green-600 dark:text-green-500'}`}>
              {threatLevel}
            </div>
            <div className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">STATUS BUMI</div>
          </div>
          <div className="flex-1 px-6 py-4 flex flex-col items-center justify-center text-center gap-1">
            <div className="text-xl font-black tracking-tight text-orange-500 dark:text-orange-400">M1.2</div>
            <div className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">SOLAR FLARE X-RAY</div>
          </div>
          <div className="flex-1 px-6 py-4 flex flex-col items-center justify-center text-center gap-1">
            <div className="text-xl font-black tracking-tight text-blue-600 dark:text-blue-500">Kp 3.0</div>
            <div className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">GEOMAGNETIC INDEX</div>
          </div>
          <div className="flex-1 px-6 py-4 flex flex-col items-center justify-center text-center gap-1">
            <div className="text-xl font-black tracking-tight text-slate-900 dark:text-white">0</div>
            <div className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">CME IMPACT WARNING</div>
          </div>
        </div>
      </section>

    </div>
  );
}

function RadarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19.07 4.93A10 10 0 0 0 6.99 3.34" />
      <path d="M4 6h.01" />
      <path d="M2.29 9.62A10 10 0 1 0 21.31 8.35" />
      <path d="M16.24 7.76A6 6 0 1 0 8.23 16.67" />
      <path d="M12 18h.01" />
      <path d="M17.99 11.66A6 6 0 0 0 13.74 5.9" />
      <circle cx="12" cy="12" r="2" />
      <path d="m13.41 10.59 5.66-5.66" />
    </svg>
  );
}
