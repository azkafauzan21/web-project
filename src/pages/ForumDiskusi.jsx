import React from 'react';
import { IconPlus, IconMessageCircle, IconEye, IconUser, IconClock } from '@tabler/icons-react';
import './Dashboard.css';

const forumTopics = [
  {
    id: 1,
    title: "Bagaimana cara membedakan badai matahari biasa dengan flare ekstrem (X-class)?",
    badges: [
      { text: "M1 Cuaca Antariksa", colorClass: "badge-red" },
      { text: "Hot 🔥", colorClass: "badge-orange" }
    ],
    replies: 12,
    views: 48,
    author: "Nur Afifah",
    time: "2 jam lalu"
  },
  {
    id: 2,
    title: "Berapa lama waktu evakuasi yang kita punya jika asteroid 10km terdeteksi menuju Bumi?",
    badges: [
      { text: "M2 Simulasi Kawah", colorClass: "badge-blue" }
    ],
    replies: 8,
    views: 31,
    author: "Rizky P.",
    time: "5 jam lalu"
  },
  {
    id: 3,
    title: "Apakah ada regulasi internasional jika satelit negara lain jatuh di pemukiman kita?",
    badges: [
      { text: "M3 Sampah Antariksa", colorClass: "badge-orange" },
      { text: "Baru", colorClass: "badge-purple" }
    ],
    replies: 3,
    views: 15,
    author: "Dita S.",
    time: "1 hari lalu"
  },
  {
    id: 4,
    title: "Berapa estimasi tinggi gelombang tsunami jika meteor berukuran 50m jatuh di laut dangkal?",
    badges: [
      { text: "M4 Tsunami Tumbukan", style: { background: 'var(--teal-lt)', color: 'var(--teal)' } }
    ],
    replies: 6,
    views: 22,
    author: "Andi M.",
    time: "2 hari lalu"
  }
];

export function ForumDiskusi() {
  return (
    <div className="w-full pb-6 font-sans">
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px', flexWrap: 'wrap', gap: '10px' }}>
        <div>
          <div style={{ fontSize: '18px', fontWeight: 800, color: 'var(--navy)', marginBottom: '4px' }}>
            Forum Diskusi
          </div>
          <div style={{ fontSize: '13px', color: 'var(--slate)' }}>
            Diskusi ilmiah tentang bencana bersama mahasiswa dari seluruh Indonesia.
          </div>
        </div>
        <button 
          type="button" 
          style={{ padding: '8px 16px', background: 'var(--blue)', color: '#fff', border: 'none', borderRadius: 'var(--r-sm)', fontSize: '13px', fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', fontFamily: 'inherit' }}
          onClick={() => alert('Form buat topik baru akan tersedia di versi produksi.')}
        >
          <IconPlus size={16} stroke={2.5} aria-hidden="true" /> Buat Topik Baru
        </button>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {forumTopics.map((topic) => (
          <div 
            key={topic.id} 
            className="bg-white border border-slate-200 rounded-xl p-[14px_16px] cursor-pointer transition-all duration-150 hover:shadow-[var(--shadow)] hover:border-[var(--blue-bd)]"
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px', flexWrap: 'wrap' }}>
              {topic.badges.map((b, i) => (
                <span key={i} className={`badge ${b.colorClass || ''}`} style={b.style || {}}>
                  {b.text}
                </span>
              ))}
            </div>
            <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--navy)', marginBottom: '4px' }}>
              {topic.title}
            </div>
            <div style={{ fontSize: '11px', color: 'var(--slate2)', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <IconMessageCircle size={14} aria-hidden="true" /> {topic.replies} balasan
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <IconEye size={14} aria-hidden="true" /> {topic.views} dilihat
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <IconUser size={14} aria-hidden="true" /> {topic.author}
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <IconClock size={14} aria-hidden="true" /> {topic.time}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
