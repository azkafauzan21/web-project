import React from 'react';
import { IconChartLine } from '@tabler/icons-react';
import './Dashboard.css';

export function ProgressSaya() {
  return (
    <div className="w-full pb-6 font-sans">
      
      {/* Header Halaman */}
      <div style={{ marginBottom: '16px' }}>
        <div style={{ fontSize: '18px', fontWeight: 800, color: 'var(--navy)', marginBottom: '4px' }}>
          Progress Belajar Saya
        </div>
        <div style={{ fontSize: '13px', color: 'var(--slate)' }}>
          Perkembangan literasi bencana kamu dalam 4 dimensi utama.
        </div>
      </div>

      {/* Grid 4 Dimensi Utama */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[14px]" style={{ marginBottom: '16px' }}>
        
        {/* Pengetahuan */}
        <div className="bg-white border border-slate-200 rounded-xl p-[14px_16px]">
          <div className="text-[11px] font-extrabold text-brand-navy mb-1 uppercase">Pengetahuan</div>
          <div className="text-2xl font-extrabold mb-2 leading-none" style={{ color: 'var(--blue)' }}>44%</div>
          <div className="pbar" style={{ marginBottom: '8px' }}>
            <div className="pbar-fill" style={{ width: '44%', background: 'var(--blue)' }}></div>
          </div>
          <div className="text-[11px] text-brand-slate2 leading-[1.4]">Pemahaman konsep dan fakta kebencanaan.</div>
        </div>

        {/* Sikap */}
        <div className="bg-white border border-slate-200 rounded-xl p-[14px_16px]">
          <div className="text-[11px] font-extrabold text-brand-navy mb-1 uppercase">Sikap</div>
          <div className="text-2xl font-extrabold mb-2 leading-none" style={{ color: 'var(--purple)' }}>51%</div>
          <div className="pbar" style={{ marginBottom: '8px' }}>
            <div className="pbar-fill" style={{ width: '51%', background: 'var(--purple)' }}></div>
          </div>
          <div className="text-[11px] text-brand-slate2 leading-[1.4]">Kepedulian dan persepsi risiko bencana.</div>
        </div>

        {/* Keterampilan */}
        <div className="bg-white border border-slate-200 rounded-xl p-[14px_16px]">
          <div className="text-[11px] font-extrabold text-brand-navy mb-1 uppercase">Keterampilan</div>
          <div className="text-2xl font-extrabold mb-2 leading-none" style={{ color: 'var(--orange)' }}>38%</div>
          <div className="pbar" style={{ marginBottom: '8px' }}>
            <div className="pbar-fill" style={{ width: '38%', background: 'var(--orange)' }}></div>
          </div>
          <div className="text-[11px] text-brand-slate2 leading-[1.4]">Kemampuan analisis dan evaluasi informasi.</div>
        </div>

        {/* Kesiapsiagaan */}
        <div className="bg-white border border-slate-200 rounded-xl p-[14px_16px]">
          <div className="text-[11px] font-extrabold text-brand-navy mb-1 uppercase">Kesiapsiagaan</div>
          <div className="text-2xl font-extrabold mb-2 leading-none" style={{ color: 'var(--green)' }}>35%</div>
          <div className="pbar" style={{ marginBottom: '8px' }}>
            <div className="pbar-fill" style={{ width: '35%', background: 'var(--green)' }}></div>
          </div>
          <div className="text-[11px] text-brand-slate2 leading-[1.4]">Kemampuan tindakan nyata saat bencana.</div>
        </div>

      </div>

      {/* Perkembangan N-Gain per Modul */}
      <div className="card">
        <div className="card-title">
          <IconChartLine size={18} color="var(--blue)" aria-hidden="true" /> Perkembangan N-Gain per Modul
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', paddingTop: '4px' }}>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ fontSize: '12px', fontWeight: 500, width: '140px', color: 'var(--slate)' }}>Pre-test Awal</div>
            <div style={{ flex: 1 }}>
              <div className="pbar" style={{ height: '8px' }}>
                <div className="pbar-fill" style={{ width: '42%', background: 'var(--slate2)' }}></div>
              </div>
            </div>
            <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--slate2)', width: '36px', textAlign: 'right' }}>42%</div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ fontSize: '12px', fontWeight: 500, width: '140px', color: 'var(--slate)' }}>Post M1 Cuaca Antariksa</div>
            <div style={{ flex: 1 }}>
              <div className="pbar" style={{ height: '8px' }}>
                <div className="pbar-fill" style={{ width: '0%', background: 'var(--red)' }}></div>
              </div>
            </div>
            <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--slate3)', width: '36px', textAlign: 'right' }}>—</div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ fontSize: '12px', fontWeight: 500, width: '140px', color: 'var(--slate)' }}>Post M2 Simulasi Kawah</div>
            <div style={{ flex: 1 }}>
              <div className="pbar" style={{ height: '8px' }}>
                <div className="pbar-fill" style={{ width: '0%', background: 'var(--blue)' }}></div>
              </div>
            </div>
            <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--slate3)', width: '36px', textAlign: 'right' }}>—</div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ fontSize: '12px', fontWeight: 500, width: '140px', color: 'var(--slate)' }}>Post M3 Sampah Antariksa</div>
            <div style={{ flex: 1 }}>
              <div className="pbar" style={{ height: '8px' }}>
                <div className="pbar-fill" style={{ width: '0%', background: 'var(--orange)' }}></div>
              </div>
            </div>
            <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--slate3)', width: '36px', textAlign: 'right' }}>—</div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ fontSize: '12px', fontWeight: 500, width: '140px', color: 'var(--slate)' }}>Post M4 Tsunami Tumbukan</div>
            <div style={{ flex: 1 }}>
              <div className="pbar" style={{ height: '8px' }}>
                <div className="pbar-fill" style={{ width: '0%', background: 'var(--teal)' }}></div>
              </div>
            </div>
            <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--slate3)', width: '36px', textAlign: 'right' }}>—</div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ fontSize: '12px', fontWeight: 500, width: '140px', color: 'var(--slate)' }}>Post M5 Radiasi Kosmik</div>
            <div style={{ flex: 1 }}>
              <div className="pbar" style={{ height: '8px' }}>
                <div className="pbar-fill" style={{ width: '0%', background: 'var(--green)' }}></div>
              </div>
            </div>
            <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--slate3)', width: '36px', textAlign: 'right' }}>—</div>
          </div>

          <div style={{ padding: '10px 12px', background: 'var(--bg)', borderRadius: 'var(--r-sm)', fontSize: '11px', color: 'var(--slate2)', marginTop: '4px' }}>
            Data N-Gain akan muncul setelah kamu menyelesaikan post-test di setiap modul. Target N-Gain keseluruhan: <strong>≥0.40</strong>.
          </div>
        </div>
      </div>

    </div>
  );
}
