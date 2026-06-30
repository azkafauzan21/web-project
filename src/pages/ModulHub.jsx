import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IconActivity, IconClock, IconLock, IconRadar, IconRobot, IconRocket, IconSatellite, IconSun, IconTarget } from '@tabler/icons-react';

export function ModulHub() {
  const navigate = useNavigate();

  return (
    <div className="p-4 md:p-6 max-w-5xl mx-auto space-y-4 fade-in font-sans bg-brand-bg min-h-[calc(100vh-4rem)]">
      
      {/* Welcome Banner */}
      <div className="relative overflow-hidden bg-gradient-to-br from-brand-navy via-[#1E3A8A] to-[#312E81] rounded-2xl p-5 md:p-6 flex items-center gap-4 shadow-sm">
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full pointer-events-none"></div>
        <div className="flex-1 relative z-10">
          <h1 className="text-lg md:text-xl font-extrabold text-white mb-1">Halo, Penjelajah! 👋</h1>
          <p className="text-xs md:text-sm text-white/70 leading-relaxed">Selamat datang kembali di Pusat Komando Astromitigasi. Lanjutkan misi edukasimu dan pantau kondisi antariksa terkini.</p>
        </div>
        <button 
          onClick={() => navigate('/modul-lms/belajar')}
          className="relative z-10 shrink-0 bg-white text-brand-navy font-bold text-xs md:text-sm px-4 py-2.5 rounded-xl flex items-center gap-2 hover:-translate-y-px hover:shadow-lg transition-all"
        >
          <IconRocket className="w-4 h-4" /> Mulai Modul 1
        </button>
      </div>

      {/* AI Inline */}
      <div className="bg-gradient-to-br from-brand-blueLt to-brand-purpleLt border border-brand-blueBd rounded-xl p-3 flex gap-3 items-start">
        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-brand-blue to-brand-purple flex items-center justify-center shrink-0 text-white shadow-sm">
          <IconRobot className="w-4 h-4" />
        </div>
        <div>
          <div className="text-[10px] font-bold text-brand-blue mb-0.5 uppercase tracking-wide">Astro-AI</div>
          <div className="text-xs text-[#1e3a8a] leading-relaxed">
            Mari kita mulai eksplorasi antariksa! Cuaca antariksa hari ini terpantau tenang, namun tetap waspada terhadap pergerakan asteroid di dekat bumi.
          </div>
        </div>
      </div>

      {/* Grid Modules (Adapting metric cards format) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        
        {/* Modul 1 */}
        <div onClick={() => navigate('/modul-lms/belajar')} className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm flex items-start gap-3 cursor-pointer hover:shadow-md hover:border-brand-orange transition-all">
          <div className="w-10 h-10 rounded-xl bg-brand-orangeLt flex items-center justify-center text-brand-orange shrink-0">
            <IconSun className="w-5 h-5" />
          </div>
          <div>
            <div className="text-lg font-extrabold text-brand-navy leading-none mb-1">Modul 1</div>
            <div className="text-[11px] font-semibold text-brand-slate2">Cuaca Antariksa</div>
            <div className="text-[10px] font-semibold text-brand-orange mt-1">Siap dimulai</div>
          </div>
        </div>

        {/* Modul 2 */}
        <div onClick={() => navigate('/impact-calculator')} className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm flex items-start gap-3 cursor-pointer hover:shadow-md hover:border-brand-blue transition-all">
          <div className="w-10 h-10 rounded-xl bg-brand-blueLt flex items-center justify-center text-brand-blue shrink-0">
            <IconRadar className="w-5 h-5" />
          </div>
          <div>
             <div className="text-lg font-extrabold text-brand-navy leading-none mb-1">Modul 2</div>
            <div className="text-[11px] font-semibold text-brand-slate2">Simulasi Kawah Meteor</div>
            <div className="text-[10px] font-semibold text-brand-blue mt-1">Kalkulator Fisika Dampak</div>
          </div>
        </div>

        {/* Modul 3 */}
        <div onClick={() => navigate('/space-debris')} className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm flex items-start gap-3 cursor-pointer hover:shadow-md hover:border-brand-red transition-all">
          <div className="w-10 h-10 rounded-xl bg-brand-redLt flex items-center justify-center text-brand-red shrink-0">
            <IconSatellite className="w-5 h-5" />
          </div>
          <div>
            <div className="text-lg font-extrabold text-brand-navy leading-none mb-1">Modul 3</div>
            <div className="text-[11px] font-semibold text-brand-slate2">Sampah Antariksa</div>
            <div className="text-[10px] font-semibold text-brand-red mt-1">Data Fireball USG</div>
          </div>
        </div>

        {/* Modul 4 */}
        <div onClick={() => navigate('/tsunami-simulator')} className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm flex items-start gap-3 cursor-pointer hover:shadow-md hover:border-brand-teal transition-all">
          <div className="w-10 h-10 rounded-xl bg-brand-tealLt flex items-center justify-center text-brand-teal shrink-0">
            <IconLock className="w-5 h-5" />
          </div>
          <div>
            <div className="text-lg font-extrabold text-brand-navy leading-none mb-1 opacity-70">Modul 4</div>
            <div className="text-[11px] font-semibold text-brand-slate2 opacity-70">Tsunami Tumbukan</div>
            <div className="text-[10px] font-semibold text-brand-slate3 mt-1">Terkunci</div>
          </div>
        </div>
      </div>

      {/* Grid 2 - Literasi & IconActivity (Visual Mockup) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm">
          <div className="text-[11px] font-bold text-brand-slate uppercase tracking-wide mb-4 flex items-center gap-1.5">
            <IconTarget className="w-3.5 h-3.5" /> Skor Literasi Astromitigasi
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="text-[11px] font-medium text-brand-slate w-28 shrink-0">Cuaca Antariksa</div>
              <div className="flex-1 h-1.5 bg-brand-bg rounded-full overflow-hidden">
                <div className="h-full bg-brand-blue w-[0%]" />
              </div>
              <div className="text-[11px] font-bold text-brand-slate2 w-8 text-right">0%</div>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="text-[11px] font-medium text-brand-slate w-28 shrink-0">Simulasi Kawah</div>
              <div className="flex-1 h-1.5 bg-brand-bg rounded-full overflow-hidden">
                <div className="h-full bg-brand-orange w-[0%]" />
              </div>
              <div className="text-[11px] font-bold text-brand-slate2 w-8 text-right">0%</div>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="text-[11px] font-medium text-brand-slate w-28 shrink-0">Sampah Antariksa</div>
              <div className="flex-1 h-1.5 bg-brand-bg rounded-full overflow-hidden">
                <div className="h-full bg-brand-red w-[0%]" />
              </div>
              <div className="text-[11px] font-bold text-brand-slate2 w-8 text-right">0%</div>
            </div>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm">
          <div className="text-[11px] font-bold text-brand-slate uppercase tracking-wide mb-4 flex items-center gap-1.5">
            <IconClock className="w-3.5 h-3.5" /> Riwayat Aktivitas
          </div>
          
          <div className="flex flex-col items-center justify-center py-6 text-center">
            <div className="w-12 h-12 bg-brand-bg rounded-full flex items-center justify-center text-brand-slate2 mb-3">
              <IconActivity className="w-6 h-6" />
            </div>
            <div className="text-[13px] font-semibold text-brand-slate mb-1">Belum ada aktivitas</div>
            <div className="text-[11px] text-brand-slate2">Mulai pelajari modul pertamamu!</div>
          </div>
        </div>
      </div>

    </div>
  );
}
