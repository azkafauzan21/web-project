import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IconActivity, IconRadar, IconRocket, IconSatellite, IconShieldExclamation, IconTelescope } from '@tabler/icons-react';

export function SimulasiHub() {
  const navigate = useNavigate();

  return (
    <div className="p-4 md:p-6 max-w-5xl mx-auto space-y-4 fade-in font-sans bg-brand-bg min-h-[calc(100vh-4rem)]">
      
      {/* Welcome Banner */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-800 via-slate-900 to-black rounded-2xl p-5 md:p-6 flex items-center gap-4 shadow-sm">
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full pointer-events-none"></div>
        <div className="flex-1 relative z-10">
          <h1 className="text-lg md:text-xl font-extrabold text-white mb-1">Simulasi Interaktif 🚀</h1>
          <p className="text-xs md:text-sm text-white/70 leading-relaxed">Pusat simulasi mitigasi bencana dan astronomi. Eksplorasi berbagai skenario pergerakan benda langit hingga perhitungan dampaknya secara interaktif.</p>
        </div>
      </div>

      {/* Grid Simulations */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
        
        {/* Simulasi 1 */}
        <div onClick={() => navigate('/tracker')} className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm flex flex-col gap-3 cursor-pointer hover:shadow-md hover:border-blue-500 transition-all group">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <IconTelescope className="w-6 h-6" />
            </div>
            <div>
              <div className="text-[11px] font-bold text-blue-600 uppercase tracking-wide mb-0.5">Astronomi</div>
              <div className="text-lg font-extrabold text-slate-800 leading-none">Tracker Asteroid</div>
            </div>
          </div>
          <p className="text-[13px] text-slate-500 mt-2">Pantau pergerakan Near-Earth Objects (NEO) secara real-time berdasarkan data orbit NASA.</p>
        </div>

        {/* Simulasi 2 */}
        <div onClick={() => navigate('/space-debris')} className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm flex flex-col gap-3 cursor-pointer hover:shadow-md hover:border-red-500 transition-all group">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center text-red-600 shrink-0 group-hover:bg-red-600 group-hover:text-white transition-colors">
              <IconSatellite className="w-6 h-6" />
            </div>
            <div>
              <div className="text-[11px] font-bold text-red-600 uppercase tracking-wide mb-0.5">Luar Angkasa</div>
              <div className="text-lg font-extrabold text-slate-800 leading-none">Sampah Antariksa</div>
            </div>
          </div>
          <p className="text-[13px] text-slate-500 mt-2">Visualisasikan kepadatan sampah antariksa di orbit Bumi dan analisis potensi tabrakan satelit.</p>
        </div>

        {/* Simulasi 3 */}
        <div onClick={() => navigate('/impact-calculator')} className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm flex flex-col gap-3 cursor-pointer hover:shadow-md hover:border-orange-500 transition-all group">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center text-orange-600 shrink-0 group-hover:bg-orange-600 group-hover:text-white transition-colors">
              <IconActivity className="w-6 h-6" />
            </div>
            <div>
              <div className="text-[11px] font-bold text-orange-600 uppercase tracking-wide mb-0.5">Kalkulator Fisika</div>
              <div className="text-lg font-extrabold text-slate-800 leading-none">Kalkulator Dampak</div>
            </div>
          </div>
          <p className="text-[13px] text-slate-500 mt-2">Hitung radius kerusakan, energi kinetik, dan ukuran kawah dari skenario tumbukan benda langit.</p>
        </div>

        {/* Simulasi 4 */}
        <div onClick={() => navigate('/tsunami-simulator')} className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm flex flex-col gap-3 cursor-pointer hover:shadow-md hover:border-teal-500 transition-all group">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center text-teal-600 shrink-0 group-hover:bg-teal-600 group-hover:text-white transition-colors">
              <IconShieldExclamation className="w-6 h-6" />
            </div>
            <div>
              <div className="text-[11px] font-bold text-teal-600 uppercase tracking-wide mb-0.5">Mitigasi Bencana</div>
              <div className="text-lg font-extrabold text-slate-800 leading-none">Simulasi Tsunami</div>
            </div>
          </div>
          <p className="text-[13px] text-slate-500 mt-2">Pelajari proses rambatan gelombang tsunami akibat gempa atau tumbukan meteorit di laut lepas.</p>
        </div>

      </div>
    </div>
  );
}
