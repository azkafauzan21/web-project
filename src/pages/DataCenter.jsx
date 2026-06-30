import React from 'react';
import { IconSun, IconMeteor, IconSatellite, IconExternalLink, IconRobot } from '@tabler/icons-react';
import './Dashboard.css';

export function DataCenter() {
  return (
    <div className="w-full pb-6 font-sans">
      <div style={{ marginBottom: '16px' }}>
        <div style={{ fontSize: '18px', fontWeight: 800, color: 'var(--navy)', marginBottom: '4px' }}>
          Disaster Data Center
        </div>
        <div style={{ fontSize: '13px', color: 'var(--slate)' }}>
          Data antariksa real-time dari NOAA, NASA, dan ESA — terintegrasi langsung ke aktivitas modul.
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[14px]" style={{ marginBottom: '14px' }}>
        
        {/* Card 1: NOAA */}
        <div className="card" style={{ borderTop: '3px solid var(--red)' }}>
          <div className="card-title">
            <IconSun size={18} color="var(--red)" aria-hidden="true" /> NOAA/SWPC — Cuaca Antariksa
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div style={{ padding: '9px 11px', background: 'var(--red-lt)', borderRadius: 'var(--r-sm)', fontSize: '12px' }}>
              <div style={{ fontWeight: 700, color: 'var(--red)' }}>X2.3 Solar Flare · AR3615</div>
              <div style={{ color: 'var(--slate)', marginTop: '2px' }}>G3 Geomagnetic Storm · 2 jam lalu</div>
            </div>
            <div style={{ padding: '9px 11px', background: 'var(--bg)', borderRadius: 'var(--r-sm)', fontSize: '12px' }}>
              <div style={{ fontWeight: 600, color: 'var(--navy)' }}>M1.1 Solar Flare · AR3614</div>
              <div style={{ color: 'var(--slate)', marginTop: '2px' }}>Tidak berdampak ke Bumi · 8 jam lalu</div>
            </div>
            <div style={{ padding: '9px 11px', background: 'var(--bg)', borderRadius: 'var(--r-sm)', fontSize: '12px' }}>
              <div style={{ fontWeight: 600, color: 'var(--navy)' }}>C5.4 Solar Flare · AR3615</div>
              <div style={{ color: 'var(--slate)', marginTop: '2px' }}>Aktivitas latar belakang · 1 hari lalu</div>
            </div>
            <a style={{ fontSize: '11px', color: 'var(--blue)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer' }}>
              <IconExternalLink size={12} aria-hidden="true" /> Buka Space Weather Prediction Center →
            </a>
          </div>
        </div>

        {/* Card 2: NASA CNEOS */}
        <div className="card" style={{ borderTop: '3px solid var(--orange)' }}>
          <div className="card-title">
            <IconMeteor size={18} color="var(--orange)" aria-hidden="true" /> NASA CNEOS — Objek Dekat Bumi
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div style={{ padding: '9px 11px', background: 'var(--orange-lt)', borderRadius: 'var(--r-sm)', fontSize: '12px' }}>
              <div style={{ fontWeight: 700, color: 'var(--orange)' }}>Asteroid 2024 BX1 · Pendekatan Dekat</div>
              <div style={{ color: 'var(--slate)', marginTop: '2px' }}>Jarak 0.05 LD · Kecepatan 14 km/s · Besok</div>
            </div>
            <div style={{ padding: '9px 11px', background: 'var(--bg)', borderRadius: 'var(--r-sm)', fontSize: '12px' }}>
              <div style={{ fontWeight: 600, color: 'var(--navy)' }}>Asteroid 2023 DZ2 · Terpantau</div>
              <div style={{ color: 'var(--slate)', marginTop: '2px' }}>Jarak 0.8 LD · Kecepatan 9 km/s · 3 hari lalu</div>
            </div>
            <div style={{ padding: '9px 11px', background: 'var(--bg)', borderRadius: 'var(--r-sm)', fontSize: '12px' }}>
              <div style={{ fontWeight: 600, color: 'var(--navy)' }}>Asteroid Bennu · Risiko Rendah</div>
              <div style={{ color: 'var(--slate)', marginTop: '2px' }}>Skala Palermo -1.71 · Pemantauan jangka panjang</div>
            </div>
            <a style={{ fontSize: '11px', color: 'var(--blue)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer' }}>
              <IconExternalLink size={12} aria-hidden="true" /> Buka CNEOS Asteroid Watch →
            </a>
          </div>
        </div>

        {/* Card 3: ESA */}
        <div className="card" style={{ borderTop: '3px solid var(--blue)' }}>
          <div className="card-title">
            <IconSatellite size={18} color="var(--blue)" aria-hidden="true" /> ESA — Sampah Antariksa
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div style={{ padding: '9px 11px', background: 'var(--blue-lt)', borderRadius: 'var(--r-sm)', fontSize: '12px' }}>
              <div style={{ fontWeight: 700, color: 'var(--blue)' }}>Satelit ERS-2 · Re-entry Peringatan</div>
              <div style={{ color: 'var(--slate)', marginTop: '2px' }}>Estimasi jatuh: Samudra Pasifik · 12 jam lagi</div>
            </div>
            <div style={{ padding: '9px 11px', background: 'var(--bg)', borderRadius: 'var(--r-sm)', fontSize: '12px' }}>
              <div style={{ fontWeight: 600, color: 'var(--navy)' }}>Puing Roket CZ-5B · Telah Jatuh</div>
              <div style={{ color: 'var(--slate)', marginTop: '2px' }}>Jatuh di Samudra Hindia · 2 minggu lalu</div>
            </div>
            <div style={{ padding: '9px 11px', background: 'var(--bg)', borderRadius: 'var(--r-sm)', fontSize: '12px' }}>
              <div style={{ fontWeight: 600, color: 'var(--navy)' }}>Satelit Kosmos 1408 · Debris Terpantau</div>
              <div style={{ color: 'var(--slate)', marginTop: '2px' }}>1.500+ puing terlacak · Orbit rendah (LEO)</div>
            </div>
            <a style={{ fontSize: '11px', color: 'var(--blue)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer' }}>
              <IconExternalLink size={12} aria-hidden="true" /> Buka ESA Space Debris Office →
            </a>
          </div>
        </div>

      </div>

      {/* AI Inline Banner */}
      <div className="ai-inline">
        <div className="ai-inline-avatar">
          <IconRobot size={18} stroke={1.5} color="currentColor" />
        </div>
        <div>
          <div className="ai-inline-name">ASTRO AI</div>
          <div className="ai-inline-text">
            Data di atas sangat relevan dengan Modul 1 (Cuaca Antariksa) yang sedang kamu pelajari. Badai Matahari X2.3 yang terjadi baru saja berpotensi mengganggu komunikasi radio di wilayahmu! Menurutmu, mitigasi seperti apa yang perlu disiapkan?
          </div>
        </div>
      </div>

    </div>
  );
}
