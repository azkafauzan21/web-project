import React, { useState } from 'react';
import './Dashboard.css';

const projects = [
  {
    id: 1,
    title: 'Detektor Sederhana Badai Magnetik',
    desc: 'Alat peraga · M1 Cuaca Antariksa · Angkatan 2024',
    categoryFilter: 'alat',
    badgeText: 'Alat Peraga',
    icon: '🔧',
    colorVar: '--red',
  },
  {
    id: 2,
    title: 'Poster Evakuasi Radiasi Ekstrem',
    desc: 'Poster mitigasi · M5 Radiasi Kosmik · Kelompok B',
    categoryFilter: 'poster',
    badgeText: 'Poster',
    icon: '📋',
    colorVar: '--blue',
  },
  {
    id: 3,
    title: 'Peta Dampak Tumbukan Asteroid',
    desc: 'Peta risiko · M2 Simulasi Kawah · Tim Riset',
    categoryFilter: 'peta',
    badgeText: 'Peta Risiko',
    icon: '🗺',
    colorVar: '--orange',
  },
  {
    id: 4,
    title: 'Sosialisasi Bahaya Sampah Antariksa',
    desc: 'Aksi sosial · M3 Sampah Antariksa · Angkatan 2023',
    categoryFilter: 'sosial',
    badgeText: 'Aksi Sosial',
    icon: '🤝',
    colorVar: '--teal',
  },
  {
    id: 5,
    title: 'Video Edukasi Tsunami Tumbukan',
    desc: 'Video edukasi · M4 Tsunami Tumbukan · Individu',
    categoryFilter: 'poster',
    badgeText: 'Poster/Video',
    icon: '🎬',
    colorVar: '--green',
  },
  {
    id: 6,
    title: 'Aplikasi Kalkulator Risiko Kosmik',
    desc: 'Proyek digital · Lintas modul · Tim 5 mhs',
    categoryFilter: 'alat',
    badgeText: 'Alat Digital',
    icon: '📱',
    colorVar: '--purple',
  }
];

const filters = [
  { id: 'semua', label: 'Semua' },
  { id: 'alat', label: 'Alat Peraga' },
  { id: 'poster', label: 'Poster' },
  { id: 'sosial', label: 'Aksi Sosial' },
  { id: 'peta', label: 'Peta Risiko' },
];

export function ProjectGallery() {
  const [activeFilter, setActiveFilter] = useState('semua');

  const filteredProjects = projects.filter(p => 
    activeFilter === 'semua' || p.categoryFilter === activeFilter
  );

  return (
    <div className="w-full pb-6 font-sans">
      <div style={{ marginBottom: '16px' }}>
        <div style={{ fontSize: '18px', fontWeight: 800, color: 'var(--navy)', marginBottom: '4px' }}>
          Project Gallery
        </div>
        <div style={{ fontSize: '13px', color: 'var(--slate)' }}>
          Karya nyata mahasiswa dari fase Apply setiap modul. Semua proyek berdampak untuk komunitas sekitar.
        </div>
      </div>

      <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '16px' }}>
        {filters.map(f => (
          <button
            key={f.id}
            type="button"
            className={`nav-item ${activeFilter === f.id ? 'active' : ''}`}
            style={{ borderRadius: '20px', padding: '5px 14px', fontSize: '12px', width: 'auto' }}
            onClick={() => setActiveFilter(f.id)}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[14px]">
        {filteredProjects.map((p) => {
          // Buat variabel class badge sesuai colorVar. 
          // Karena format DLLS-GEMA badge adalah <span class="badge badge-red">
          // Kita pisahkan nama warna dari --red
          const colorName = p.colorVar.replace('--', ''); 
          // Kecuali teal yang custom stylenya
          let badgeEl;
          if (colorName === 'teal') {
            badgeEl = <span className="badge" style={{ background: 'var(--teal-lt)', color: 'var(--teal)' }}>{p.badgeText}</span>;
          } else {
            badgeEl = <span className={`badge badge-${colorName}`}>{p.badgeText}</span>;
          }

          return (
            <div 
              key={p.id} 
              className="bg-white border border-slate-200 rounded-xl p-[16px] group transition-all duration-200 cursor-pointer hover:-translate-y-[2px] hover:shadow-[var(--shadow)] hover:border-[var(--border)]"
              style={{ boxShadow: 'var(--shadow-sm)' }}
            >
              <div style={{ height: '80px', background: `var(${p.colorVar}-lt)`, borderRadius: 'var(--r-sm)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '36px', marginBottom: '12px' }}>
                {p.icon}
              </div>
              <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--navy)', marginBottom: '4px' }}>
                {p.title}
              </div>
              <div style={{ fontSize: '11px', color: 'var(--slate2)', marginBottom: '8px' }}>
                {p.desc}
              </div>
              {badgeEl}
            </div>
          );
        })}
      </div>
    </div>
  );
}
