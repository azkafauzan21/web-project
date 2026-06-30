import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IconBooks } from '@tabler/icons-react';

export function LandingModul() {
  const navigate = useNavigate();

  const handleModulClick = () => {
    // Arahkan ke halaman login/register atau onboard jika belum login
    navigate('/login');
  };

  return (
    <section className="py-[72px] bg-brand-bg w-full font-sans">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center max-w-[600px] mx-auto mb-10">
          <div className="text-[13px] font-extrabold tracking-wide uppercase text-brand-blue flex items-center justify-center gap-1.5 mb-2">
            <IconBooks className="w-[18px] h-[18px]" /> Kurikulum
          </div>
          <h2 className="text-[32px] font-extrabold leading-[1.2] text-brand-navy mb-4 tracking-[-0.5px]">
            5 Modul Literasi Bencana Antariksa
          </h2>
          <p className="text-[15px] text-brand-slate leading-[1.6] m-0">
            Setiap modul mencakup 6 fase pembelajaran E-DRA dengan AI Chatbot aktif di setiap fase.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 mt-10">
          {/* Modul 1 */}
          <div 
            className="bg-white border border-slate-200 rounded-2xl p-[20px] px-[14px] text-center cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
            style={{ borderTop: '3px solid var(--red)' }}
            onClick={handleModulClick}
          >
            <div className="text-[32px] mb-[10px]">☀️</div>
            <div className="text-[10px] font-bold tracking-[0.4px] uppercase mb-[4px]" style={{ color: 'var(--red)' }}>Modul 1</div>
            <div className="text-[13px] font-bold mb-[6px]" style={{ color: 'var(--red)' }}>Cuaca Antariksa</div>
            <div className="text-[11px] text-brand-slate2 leading-[1.45]">Siklus Matahari · Flare · CME · Badai Geomagnetik</div>
          </div>

          {/* Modul 2 */}
          <div 
            className="bg-white border border-slate-200 rounded-2xl p-[20px] px-[14px] text-center cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
            style={{ borderTop: '3px solid var(--blue)' }}
            onClick={handleModulClick}
          >
            <div className="text-[32px] mb-[10px]">☄️</div>
            <div className="text-[10px] font-bold tracking-[0.4px] uppercase mb-[4px]" style={{ color: 'var(--blue)' }}>Modul 2</div>
            <div className="text-[13px] font-bold mb-[6px]" style={{ color: 'var(--blue)' }}>Kawah Meteor</div>
            <div className="text-[11px] text-brand-slate2 leading-[1.45]">Fisika Dampak · Radius Kehancuran · Massa & Kecepatan</div>
          </div>

          {/* Modul 3 */}
          <div 
            className="bg-white border border-slate-200 rounded-2xl p-[20px] px-[14px] text-center cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
            style={{ borderTop: '3px solid var(--orange)' }}
            onClick={handleModulClick}
          >
            <div className="text-[32px] mb-[10px]">🛰️</div>
            <div className="text-[10px] font-bold tracking-[0.4px] uppercase mb-[4px]" style={{ color: 'var(--orange)' }}>Modul 3</div>
            <div className="text-[13px] font-bold mb-[6px]" style={{ color: 'var(--orange)' }}>Sampah Antariksa</div>
            <div className="text-[11px] text-brand-slate2 leading-[1.45]">Orbit LEO · Sindrom Kessler · Risiko Tabrakan</div>
          </div>

          {/* Modul 4 */}
          <div 
            className="bg-white border border-slate-200 rounded-2xl p-[20px] px-[14px] text-center cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
            style={{ borderTop: '3px solid var(--teal)' }}
            onClick={handleModulClick}
          >
            <div className="text-[32px] mb-[10px]">🌊</div>
            <div className="text-[10px] font-bold tracking-[0.4px] uppercase mb-[4px]" style={{ color: 'var(--teal)' }}>Modul 4</div>
            <div className="text-[13px] font-bold mb-[6px]" style={{ color: 'var(--teal)' }}>Tsunami Tumbukan</div>
            <div className="text-[11px] text-brand-slate2 leading-[1.45]">Simulasi Air Laut · Megatsunami · Evakuasi Pesisir</div>
          </div>

          {/* Modul 5 */}
          <div 
            className="bg-white border border-slate-200 rounded-2xl p-[20px] px-[14px] text-center cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
            style={{ borderTop: '3px solid var(--green)' }}
            onClick={handleModulClick}
          >
            <div className="text-[32px] mb-[10px]">🛡️</div>
            <div className="text-[10px] font-bold tracking-[0.4px] uppercase mb-[4px]" style={{ color: 'var(--green)' }}>Modul 5</div>
            <div className="text-[13px] font-bold mb-[6px]" style={{ color: 'var(--green)' }}>Radiasi Kosmik</div>
            <div className="text-[11px] text-brand-slate2 leading-[1.45]">Magnetosfer · Sabuk Van Allen · Badai Radiasi</div>
          </div>
        </div>

        <div className="text-center text-[12px] text-brand-slate2 mt-[24px]">
          Setiap modul: Engage · Discover · Reason · Apply · Reflection · Assessment — dengan AI Disaster Assistant di setiap fase
        </div>
      </div>
    </section>
  );
}
