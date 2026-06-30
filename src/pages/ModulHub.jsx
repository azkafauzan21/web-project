import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IconRobot, IconPlayerPlay, IconLock } from '@tabler/icons-react';
import './Dashboard.css';

export function ModulHub() {
  const navigate = useNavigate();

  return (
    <div className="w-full pb-6 font-sans">
      
      {/* Header Halaman */}
      <div style={{ marginBottom: '16px' }}>
        <div style={{ fontSize: '18px', fontWeight: 800, color: 'var(--navy)', marginBottom: '4px' }}>
          Modul Astromitigasi
        </div>
        <div style={{ fontSize: '13px', color: 'var(--slate)' }}>
          Selesaikan modul secara berurutan. Setiap modul menggunakan alur E-DRA dengan AI Chatbot aktif di setiap fase.
        </div>
      </div>

      {/* AI Inline Banner */}
      <div className="ai-inline" style={{ marginBottom: '16px' }}>
        <div className="ai-inline-avatar"><IconRobot size={16} color="#fff" /></div>
        <div>
          <div className="ai-inline-name">ASTRO AI</div>
          <div className="ai-inline-text">
            Mulai dari Modul 1 — Cuaca Antariksa. Ini fondasi yang paling relevan untuk memahami ancaman badai matahari terhadap teknologi modern kita!
          </div>
        </div>
      </div>

      {/* Daftar Modul */}
      <div className="flex flex-col gap-[14px]">

        {/* Modul 1 (Active) */}
        <div className="mod-card" onClick={() => navigate('/modul-lms/belajar')}>
          <div className="mod-icon" style={{ background: 'var(--red-lt)', fontSize: '28px' }}>☀️</div>
          <div className="mod-info">
            <div className="mod-num" style={{ color: 'var(--red)' }}>Modul 1</div>
            <div className="mod-title">Cuaca Antariksa</div>
            <div className="mod-sub">Siklus Matahari · Flare · CME · Badai Geomagnetik</div>
            <div style={{ display: 'flex', gap: '5px', flexWrap: 'wrap', margin: '6px 0' }}>
              <span className="badge badge-red">Risk Awareness</span>
              <span className="badge badge-orange">Disaster Knowledge</span>
              <span className="badge badge-blue">Preparedness</span>
            </div>
            <div className="pbar"><div className="pbar-fill" style={{ width: '0%', background: 'var(--red)' }}></div></div>
          </div>
          <div className="mod-right">
            <span className="badge badge-blue" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <IconPlayerPlay size={14} /> Mulai
            </span>
            <span style={{ fontSize: '11px', color: 'var(--slate2)' }}>6 fase · ~3 jam</span>
          </div>
        </div>

        {/* Modul 2 (Locked) */}
        <div className="mod-card locked">
          <div className="mod-icon" style={{ background: 'var(--blue-lt)', fontSize: '28px' }}>☄️</div>
          <div className="mod-info">
            <div className="mod-num" style={{ color: 'var(--blue)' }}>Modul 2</div>
            <div className="mod-title">Simulasi Kawah Meteor</div>
            <div className="mod-sub">Kalkulator Fisika Dampak · Radius Kehancuran · Massa & Kecepatan</div>
            <div style={{ marginTop: '4px', fontSize: '11px', color: 'var(--slate2)' }}>🔒 Terbuka setelah Modul 1 selesai</div>
          </div>
          <div className="mod-right">
            <IconLock size={20} color="var(--slate3)" aria-label="Terkunci" />
          </div>
        </div>

        {/* Modul 3 (Locked) */}
        <div className="mod-card locked">
          <div className="mod-icon" style={{ background: 'var(--orange-lt)', fontSize: '28px' }}>🛰️</div>
          <div className="mod-info">
            <div className="mod-num" style={{ color: 'var(--orange)' }}>Modul 3</div>
            <div className="mod-title">Sampah Antariksa</div>
            <div className="mod-sub">Orbit LEO · Sindrom Kessler · Data Fireball USG · Risiko Tabrakan</div>
            <div style={{ marginTop: '4px', fontSize: '11px', color: 'var(--slate2)' }}>🔒 Terbuka setelah Modul 2 selesai</div>
          </div>
          <div className="mod-right">
            <IconLock size={20} color="var(--slate3)" aria-label="Terkunci" />
          </div>
        </div>

        {/* Modul 4 (Locked) */}
        <div className="mod-card locked">
          <div className="mod-icon" style={{ background: 'var(--teal-lt)', fontSize: '28px' }}>🌊</div>
          <div className="mod-info">
            <div className="mod-num" style={{ color: 'var(--teal)' }}>Modul 4</div>
            <div className="mod-title">Tsunami Tumbukan</div>
            <div className="mod-sub">Simulasi Air Laut · Gelombang Megatsunami · Evakuasi Pesisir</div>
            <div style={{ marginTop: '4px', fontSize: '11px', color: 'var(--slate2)' }}>🔒 Terbuka setelah Modul 3 selesai</div>
          </div>
          <div className="mod-right">
            <IconLock size={20} color="var(--slate3)" aria-label="Terkunci" />
          </div>
        </div>

        {/* Modul 5 (Locked) */}
        <div className="mod-card locked">
          <div className="mod-icon" style={{ background: 'var(--green-lt)', fontSize: '28px' }}>🛡️</div>
          <div className="mod-info">
            <div className="mod-num" style={{ color: 'var(--green)' }}>Modul 5</div>
            <div className="mod-title">Radiasi Kosmik</div>
            <div className="mod-sub">Magnetosfer · Sabuk Van Allen · Badai Radiasi · Perlindungan Astronaut</div>
            <div style={{ marginTop: '4px', fontSize: '11px', color: 'var(--slate2)' }}>🔒 Terbuka setelah Modul 4 selesai</div>
          </div>
          <div className="mod-right">
            <IconLock size={20} color="var(--slate3)" aria-label="Terkunci" />
          </div>
        </div>

      </div>
    </div>
  );
}
