import React, { useState } from 'react';
import { 
  IconWaveSine, IconRobot, IconPlayerPlay, IconAlertTriangle, IconHelp, 
  IconArrowRight, IconBooks, IconDatabase, IconBrain, IconCheck, IconX,
  IconPencil, IconMessageCircle, IconFileCheck, IconClipboardCheck,
  IconHome
} from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';

export function PhaseEngage({ nextPhase }) {
  const navigate = useNavigate();
  const [videoWatched, setVideoWatched] = useState(false);
  const [pollAnswered, setPollAnswered] = useState(false);

  return (
    <div className="phase-content active animate-fade-in">
      <div className="phase-intro" style={{ background: '#EFF6FF', borderColor: '#BFDBFE' }}>
        <div className="phase-intro-icon" style={{ background: '#DBEAFE' }}>
          <IconWaveSine style={{ fontSize: '22px', color: 'var(--mod-color)' }} />
        </div>
        <div>
          <div className="phase-intro-title">Engage — Membangun Kesadaran Risiko Cuaca Antariksa</div>
          <div className="phase-intro-sub">Video Badai Matahari Carrington 1859 · Fakta mengejutkan · Polling persepsi risiko infrastruktur teknologi</div>
          <div className="lit-pills mt-2 flex flex-wrap gap-2">
            <span className="lit-pill" style={{ background: '#DBEAFE', color: 'var(--mod-color)', borderColor: '#BFDBFE' }}>Risk Awareness</span>
            <span className="lit-pill" style={{ background: 'var(--green-lt)', color: 'var(--green)', borderColor: 'var(--green-bd)' }}>Disaster Knowledge</span>
          </div>
        </div>
      </div>

      <div className="ai-box">
        <div className="ai-avatar"><IconRobot /></div>
        <div>
          <div className="ai-name">GEMA-AI · Fase Engage</div>
          <div className="ai-text">Sebelum mulai — <strong>apakah kamu tahu apa yang terjadi jika Badai Matahari skala G5 menghantam Bumi saat ini?</strong> Jawabannya mungkin membuatmu kesulitan mengakses internet berbulan-bulan. Tonton video pemantik berikut.</div>
        </div>
      </div>

      <div className="card">
        <div className="card-title"><IconPlayerPlay style={{ color: 'var(--mod-color)' }} /> Video Pemantik</div>
        <div className="video-card cursor-pointer relative" onClick={() => setVideoWatched(true)}>
          {videoWatched && <div className="video-done-tag" style={{display:'flex'}}><IconCheck className="w-3 h-3" /> Sudah ditonton</div>}
          <div className="video-play">▶</div>
          <div className="video-title">Peristiwa Carrington 1859 — Saat Badai Matahari Membakar Telegraf</div>
          <div className="video-meta">8 menit · NASA ESA · Klik untuk tandai sudah ditonton</div>
        </div>
      </div>

      <div className="card">
        <div className="card-title"><IconAlertTriangle style={{ color: 'var(--orange)' }} /> Fakta Mengejutkan — Cuaca Antariksa</div>
        <div className="fact-grid">
          <div className="fact-card"><div className="fact-val" style={{ color: 'var(--mod-color)' }}>$2.6T</div><div className="fact-lbl">Perkiraan kerugian global jika badai Matahari ekstrem merusak jaringan listrik</div></div>
          <div className="fact-card"><div className="fact-val" style={{ color: 'var(--mod-color)' }}>40</div><div className="fact-lbl">Satelit Starlink hancur oleh badai geomagnetik ringan pada Februari 2022</div></div>
          <div className="fact-card"><div className="fact-val" style={{ color: 'var(--mod-color)' }}>8 Menit</div><div className="fact-lbl">Waktu yang dibutuhkan cahaya dari suar Matahari untuk mencapai dan memengaruhi ionosfer Bumi</div></div>
          <div className="fact-card"><div className="fact-val" style={{ color: 'var(--mod-color)' }}>G5</div><div className="fact-lbl">Skala badai geomagnetik ekstrem yang terjadi Mei 2024, menimbulkan aurora hingga ekuator</div></div>
        </div>
      </div>

      <div className="card">
        <div className="card-title"><IconHelp style={{ color: 'var(--mod-color)' }} /> Polling Awal</div>
        <div style={{ fontSize: '13px', fontWeight: 500, color: 'var(--navy)', marginBottom: '10px' }}>
          Infrastruktur manakah yang menurut Anda paling rentan saat terjadi Badai Geomagnetik skala G5?
        </div>
        <div>
          <div className="poll-opt cursor-pointer" onClick={() => setPollAnswered(true)}>
            <div className="poll-dot"></div> 📡 Jaringan Internet Global (Kabel bawah laut dan satelit)
          </div>
          <div className="poll-opt cursor-pointer" onClick={() => setPollAnswered(true)}>
            <div className="poll-dot"></div> ⚡ Jaringan Distribusi Listrik (Trafo tegangan tinggi)
          </div>
          <div className="poll-opt cursor-pointer" onClick={() => setPollAnswered(true)}>
            <div className="poll-dot"></div> 🗺️ Sistem Navigasi GPS/GNSS (Penerbangan dan maritim)
          </div>
          <div className="poll-opt cursor-pointer" onClick={() => setPollAnswered(true)}>
            <div className="poll-dot"></div> ❓ Tidak tahu — semuanya mungkin terdampak sama rata
          </div>
        </div>
        {pollAnswered && (
          <div style={{ marginTop: '10px', padding: '9px 11px', background: 'var(--mod-color-lt)', borderRadius: 'var(--r-sm)', fontSize: '12px', color: 'var(--mod-color)' }}>
            <strong>Jawaban tersimpan!</strong> Di fase Discover, kita akan melihat bagaimana cuaca antariksa mengancam infrastruktur modern.
          </div>
        )}
      </div>

      <div className="btn-row mt-6">
        <button 
          className="btn-next-phase" 
          disabled={!pollAnswered} 
          onClick={() => navigate(`/modul-lms/belajar/${nextPhase}`)}
        >
          Lanjut ke Discover <IconArrowRight className="w-4 h-4" />
        </button>
        {!pollAnswered && <span style={{ fontSize: '11px', color: 'var(--slate2)' }}>Jawab polling untuk melanjutkan</span>}
      </div>
    </div>
  );
}

export function PhaseDiscover({ nextPhase, prevPhase }) {
  const navigate = useNavigate();
  return (
    <div className="phase-content active animate-fade-in">
      <div className="phase-intro" style={{ background: '#F5F3FF', borderColor: '#DDD6FE' }}>
        <div className="phase-intro-icon" style={{ background: '#EDE9FE' }}>
          <IconAlertTriangle style={{ fontSize: '22px', color: '#8B5CF6' }} />
        </div>
        <div>
          <div className="phase-intro-title">Discover — Dinamika Matahari & Sistem Peringatan</div>
          <div className="phase-intro-sub">Mempelajari siklus Matahari 11 tahunan, jenis jilatan api (CME/Flare), dan skala peringatan NOAA (G, S, R).</div>
          <div className="lit-pills mt-2 flex flex-wrap gap-2">
            <span className="lit-pill" style={{ background: '#EDE9FE', color: '#8B5CF6', borderColor: '#DDD6FE' }}>Physical Science</span>
            <span className="lit-pill" style={{ background: '#DBEAFE', color: 'var(--mod-color)', borderColor: '#BFDBFE' }}>Data Literacy</span>
          </div>
        </div>
      </div>

      <div className="ai-box">
        <div className="ai-avatar"><IconRobot /></div>
        <div>
          <div className="ai-name">GEMA-AI · Fase Discover</div>
          <div className="ai-text">Eksplorasi modul-modul di bawah ini. Tahukah kamu NOAA membagi skala Cuaca Antariksa menjadi tiga: <strong>G (Geomagnetic Storm)</strong>, <strong>S (Solar Radiation)</strong>, dan <strong>R (Radio Blackout)</strong>? Pahami perbedaannya!</div>
        </div>
      </div>

      <div className="card">
        <div className="card-title"><IconAlertTriangle style={{ color: 'var(--mod-color)' }} /> Skala Peringatan Badai Geomagnetik (NOAA)</div>
        <div className="warning-grid">
          <div className="warning-card" style={{ background: '#F0FDF4', borderColor: 'var(--green-bd)' }}>
            <div className="w-level" style={{ color: 'var(--green)' }}>G1 Minor</div>
            <div className="w-height" style={{ color: 'var(--green)' }}>Kp = 5</div>
            <div className="w-desc" style={{ color: '#166534' }}>Fluktuasi kecil listrik. Satelit normal. Aurora terlihat utara.</div>
          </div>
          <div className="warning-card" style={{ background: '#FFFBEB', borderColor: '#FDE68A' }}>
            <div className="w-level" style={{ color: 'var(--orange)' }}>G3 Strong</div>
            <div className="w-height" style={{ color: 'var(--orange)' }}>Kp = 7</div>
            <div className="w-desc" style={{ color: '#92400E' }}>Koreksi voltase listrik dibutuhkan. Navigasi GPS bisa terputus sesaat.</div>
          </div>
          <div className="warning-card" style={{ background: '#FEF3C7', borderColor: '#F59E0B' }}>
            <div className="w-level" style={{ color: '#D97706' }}>G4 Severe</div>
            <div className="w-height" style={{ color: '#D97706' }}>Kp = 8</div>
            <div className="w-desc" style={{ color: '#92400E' }}>Sistem distribusi listrik luas terdampak. Tracking satelit sulit.</div>
          </div>
          <div className="warning-card" style={{ background: 'var(--red-lt)', borderColor: 'var(--red-bd)' }}>
            <div className="w-level" style={{ color: 'var(--red)' }}>G5 Extreme</div>
            <div className="w-height" style={{ color: 'var(--red)' }}>Kp = 9</div>
            <div className="w-desc" style={{ color: '#7F1D1D' }}>Keruntuhan grid listrik global. Satelit rusak permanen. Radio padam.</div>
          </div>
        </div>
        <div className="info-box mt-3">
          <strong>Catatan penting:</strong> Siklus Matahari mencapai puncaknya (Solar Maximum) kira-kira setiap 11 tahun, yang saat ini sedang berlangsung hingga tahun 2025-2026. Intensitas jilatan api (CME) meningkat drastis di periode ini.
        </div>
      </div>

      <div className="card">
        <div className="card-title"><IconBooks style={{ color: 'var(--mod-color)' }} /> Topik Materi — Klik untuk Pelajari</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3" id="topic-grid">
          <div className="topic-card cursor-pointer p-4 border rounded-xl hover:border-blue-500 hover:bg-blue-50">
            <div className="flex gap-3">
              <div className="text-2xl">☀️</div>
              <div>
                <div className="font-bold text-[13px] text-slate-800">Siklus Matahari & Sunspots</div>
                <div className="text-[11px] text-slate-500 mt-1">Dinamika magnetik 11 tahunan, bintik hitam Matahari (Sunspots) sebagai indikator badai.</div>
              </div>
            </div>
          </div>
          <div className="topic-card cursor-pointer p-4 border rounded-xl hover:border-blue-500 hover:bg-blue-50">
            <div className="flex gap-3">
              <div className="text-2xl">🔥</div>
              <div>
                <div className="font-bold text-[13px] text-slate-800">CME vs Solar Flares</div>
                <div className="text-[11px] text-slate-500 mt-1">Perbedaan Lontaran Massa Korona (CME) yang butuh berhari-hari vs Suar cahaya dalam hitungan menit.</div>
              </div>
            </div>
          </div>
          <div className="topic-card cursor-pointer p-4 border rounded-xl hover:border-blue-500 hover:bg-blue-50">
            <div className="flex gap-3">
              <div className="text-2xl">🧲</div>
              <div>
                <div className="font-bold text-[13px] text-slate-800">Medan Magnet Bumi</div>
                <div className="text-[11px] text-slate-500 mt-1">Sabuk Van Allen dan bagaimana magnetosfer melindungi Bumi dari partikel maut Matahari.</div>
              </div>
            </div>
          </div>
          <div className="topic-card cursor-pointer p-4 border rounded-xl hover:border-blue-500 hover:bg-blue-50">
            <div className="flex gap-3">
              <div className="text-2xl">🛰️</div>
              <div>
                <div className="font-bold text-[13px] text-slate-800">Sistem Peringatan SWPC NOAA</div>
                <div className="text-[11px] text-slate-500 mt-1">Satelit DSCOVR & SOHO di titik Lagrange L1 untuk peringatan dini cuaca antariksa.</div>
              </div>
            </div>
          </div>
        </div>
        <div id="topic-progress" style={{ marginTop: '8px', fontSize: '11px', color: 'var(--slate2)' }}>0 dari 4 topik dipelajari</div>
      </div>

      <div className="card">
        <div className="card-title"><IconDatabase style={{ color: '#0d9488' }} /> Aktivitas — Eksplorasi Data Real-time NOAA</div>
        <div className="data-activity-box p-4 bg-teal-50 border-l-4 border-teal-600 rounded-r-md">
          <div className="font-bold text-teal-800 mb-1">Tugas Eksplorasi Mandiri</div>
          <div className="text-sm text-teal-700 mb-3">Buka dasbor SWPC NOAA dan cari: <strong>(1)</strong> Indeks Kp saat ini, <strong>(2)</strong> Apakah ada peringatan badai geomagnetik dalam 3 hari ke depan, <strong>(3)</strong> Kecepatan angin matahari (Solar Wind) real-time.</div>
          <a className="data-link inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:underline cursor-pointer"><IconDatabase className="w-4 h-4" /> SWPC NOAA Dashboard</a>
        </div>
      </div>

      <div className="btn-row mt-6">
        <button className="btn-secondary-sm" onClick={() => navigate(`/modul-lms/belajar/${prevPhase}`)}><IconArrowRight className="w-4 h-4 rotate-180" /> Kembali</button>
        <button className="btn-next-phase" onClick={() => navigate(`/modul-lms/belajar/${nextPhase}`)}>Lanjut ke Reason <IconArrowRight className="w-4 h-4" /></button>
      </div>
    </div>
  );
}

export function PhaseReason({ nextPhase, prevPhase }) {
  const navigate = useNavigate();
  return (
    <div className="phase-content active animate-fade-in">
      <div className="phase-intro" style={{ background: 'var(--orange-lt)', borderColor: '#FDE68A' }}>
        <div className="phase-intro-icon" style={{ background: '#FEF3C7' }}>
          <IconBrain style={{ fontSize: '22px', color: 'var(--orange)' }} />
        </div>
        <div>
          <div className="phase-intro-title">Reason — Analisis Kerentanan & Evaluasi Informasi</div>
          <div className="phase-intro-sub">Mengapa satelit Starlink hancur padahal badai sangat kecil? Evaluasi narasi Kiamat Internet.</div>
          <div className="lit-pills mt-2 flex flex-wrap gap-2">
            <span className="lit-pill" style={{ background: '#FEF3C7', color: 'var(--orange)', borderColor: '#FDE68A' }}>Critical Thinking</span>
            <span className="lit-pill" style={{ background: 'var(--red-lt)', color: 'var(--red)', borderColor: 'var(--red-bd)' }}>Information Evaluation</span>
          </div>
        </div>
      </div>

      <div className="ai-box">
        <div className="ai-avatar"><IconRobot /></div>
        <div>
          <div className="ai-name">GEMA-AI · Interaktif</div>
          <div className="ai-text">
            Februari 2022, 40 satelit Starlink SpaceX gagal mencapai orbit dan terbakar karena badai geomagnetik level G1 yang sangat kecil. 
            <br/><br/><strong>Menurut analisismu, mengapa badai kecil bisa menghancurkan satelit modern, padahal ISS aman?</strong> Diskusikan dengan saya!
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-title">Chat dengan GEMA-AI</div>
        <div className="bg-slate-50 border rounded-lg h-[300px] p-4 overflow-y-auto mb-3 flex flex-col gap-3">
          <div className="ai-msg bot">Silakan berikan opinimu tentang kasus kegagalan satelit Starlink SpaceX. Perhatikan faktor ketinggian orbit (LEO)!</div>
          <div className="ai-msg user">Apakah karena lapisan atmosfer di Low Earth Orbit (LEO) mengembang saat terkena badai, sehingga meningkatkan drag (gesekan) pada satelit?</div>
          <div className="ai-msg bot">Tepat sekali! Badai geomagnetik memanaskan termosfer dan menyebabkannya mengembang. Satelit Starlink diluncurkan di orbit sangat rendah (~210 km) untuk pengecekan awal. Pengembangan atmosfer meningkatkan <em>atmospheric drag</em> hingga 50%, menarik satelit turun sebelum bisa menaikkan orbitnya. Pemikiran kritis yang sangat baik!</div>
        </div>
        <div className="flex gap-2">
          <input type="text" className="w-full px-3 py-2 border rounded-md text-sm outline-none focus:border-blue-500" placeholder="Ketik jawaban argumenmu di sini..." />
          <button className="bg-blue-600 text-white px-4 rounded-md text-sm font-medium">Kirim</button>
        </div>
      </div>

      <div className="card">
        <div className="card-title"><IconAlertTriangle style={{ color: 'var(--red)' }} /> Deteksi Hoaks: "Kiamat Internet"</div>
        <div className="text-sm text-slate-700 mb-4">
          Banyak artikel berita clickbait menyebut akan terjadi "Kiamat Internet berbulan-bulan" akibat Solar Maximum 2025. Evaluasi berita tersebut!
        </div>
        <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
          <div className="font-bold text-red-800 text-sm mb-2">Narasi Beredar:</div>
          <div className="italic text-slate-600 text-sm mb-4">"NASA peringatkan KIAMAT INTERNET di tahun 2025. Badai matahari akan menghancurkan semua kabel fiber optik, dunia gelap total tanpa komunikasi!"</div>
          
          <div className="flex gap-2">
            <button className="px-3 py-1.5 bg-white border border-red-300 text-red-700 text-xs font-bold rounded hover:bg-red-100 flex gap-1 items-center">
              <IconX className="w-3 h-3" /> INI HOAKS / MISINFORMASI
            </button>
            <button className="px-3 py-1.5 bg-white border border-green-300 text-green-700 text-xs font-bold rounded hover:bg-green-100 flex gap-1 items-center">
              <IconCheck className="w-3 h-3" /> INI FAKTA SAINS
            </button>
          </div>
        </div>
      </div>

      <div className="btn-row mt-6">
        <button className="btn-secondary-sm" onClick={() => navigate(`/modul-lms/belajar/${prevPhase}`)}><IconArrowRight className="w-4 h-4 rotate-180" /> Kembali</button>
        <button className="btn-next-phase" onClick={() => navigate(`/modul-lms/belajar/${nextPhase}`)}>Lanjut ke Apply <IconArrowRight className="w-4 h-4" /></button>
      </div>
    </div>
  );
}

export function PhaseApply({ nextPhase, prevPhase }) {
  const navigate = useNavigate();
  return (
    <div className="phase-content active animate-fade-in">
      <div className="phase-intro" style={{ background: '#FDF4FF', borderColor: '#F5D0FE' }}>
        <div className="phase-intro-icon" style={{ background: '#FAE8FF' }}>
          <IconPencil style={{ fontSize: '22px', color: '#C026D3' }} />
        </div>
        <div>
          <div className="phase-intro-title">Apply — Proyek Mitigasi Infrastruktur Esensial</div>
          <div className="phase-intro-sub">Menerapkan pengetahuan untuk merancang Standar Operasional Prosedur (SOP) mitigasi Cuaca Antariksa di tingkat Nasional.</div>
          <div className="lit-pills mt-2 flex flex-wrap gap-2">
            <span className="lit-pill" style={{ background: '#FAE8FF', color: '#C026D3', borderColor: '#F5D0FE' }}>Problem Solving</span>
            <span className="lit-pill" style={{ background: '#DBEAFE', color: 'var(--mod-color)', borderColor: '#BFDBFE' }}>Project Based</span>
          </div>
        </div>
      </div>

      <div className="ai-box">
        <div className="ai-avatar"><IconRobot /></div>
        <div>
          <div className="ai-name">GEMA-AI · Panduan Proyek</div>
          <div className="ai-text">Pilih salah satu peran/profesi di bawah ini. Bayangkan BMKG/LAPAN mengeluarkan peringatan dini G4 Severe Geomagnetic Storm yang akan menghantam Bumi dalam 24 jam. Apa SOP darurat yang kamu buat untuk institusimu?</div>
        </div>
      </div>

      <div className="card">
        <div className="card-title">Pilih Skenario Peran</div>
        <div className="apply-options">
          <div className="apply-card selected cursor-pointer">
            <div className="apply-card-top">
              <div className="text-2xl">🔌</div>
              <div className="apply-card-title">Manajer Jaringan Listrik PLN</div>
            </div>
            <div className="apply-card-desc">PLN mengoperasikan transmisi SUTET tegangan tinggi yang sangat rentan terhadap arus induksi geomagnetik (GIC) yang bisa melelehkan trafo raksasa bernilai triliunan.</div>
          </div>
          <div className="apply-card cursor-pointer">
            <div className="apply-card-top">
              <div className="text-2xl">✈️</div>
              <div className="apply-card-title">Operator Penerbangan Komersial</div>
            </div>
            <div className="apply-card-desc">Pesawat rute polar akan terpapar radiasi ekstrem. Sinyal GPS untuk instrumen pendaratan kemungkinan mati, dan komunikasi radio frekuensi tinggi (HF) putus total.</div>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-title">Instruksi Proyek — Unggah SOP Draft</div>
        <div className="text-sm text-slate-700 mb-4 leading-relaxed">
          Buatlah draft singkat <strong>SOP Darurat (3 langkah utama)</strong> untuk institusi yang kamu pilih. Fokus pada: (1) Tindakan 12 jam sebelum hantaman badai, (2) Pengalihan operasional saat badai, (3) Pemulihan pasca badai.
        </div>
        <textarea className="w-full px-3 py-2 border rounded-md text-sm outline-none focus:border-blue-500 min-h-[120px] mb-3" placeholder="Tuliskan 3 langkah SOP Darurat di sini..."></textarea>
        <button className="upload-btn"><IconFileCheck /> Simpan & Unggah Draf</button>
      </div>

      <div className="btn-row mt-6">
        <button className="btn-secondary-sm" onClick={() => navigate(`/modul-lms/belajar/${prevPhase}`)}><IconArrowRight className="w-4 h-4 rotate-180" /> Kembali</button>
        <button className="btn-next-phase" onClick={() => navigate(`/modul-lms/belajar/${nextPhase}`)}>Lanjut ke Reflection <IconArrowRight className="w-4 h-4" /></button>
      </div>
    </div>
  );
}

export function PhaseReflect({ nextPhase, prevPhase }) {
  const navigate = useNavigate();
  return (
    <div className="phase-content active animate-fade-in">
      <div className="phase-intro" style={{ background: '#ECFDF5', borderColor: '#A7F3D0' }}>
        <div className="phase-intro-icon" style={{ background: '#D1FAE5' }}>
          <IconMessageCircle style={{ fontSize: '22px', color: '#059669' }} />
        </div>
        <div>
          <div className="phase-intro-title">Reflection — Jurnal Belajar Cuaca Antariksa</div>
          <div className="phase-intro-sub">Menyadari kerentanan teknologi modern dan betapa Bumi bergantung pada keseimbangan kosmik.</div>
          <div className="lit-pills mt-2 flex flex-wrap gap-2">
            <span className="lit-pill" style={{ background: '#D1FAE5', color: '#059669', borderColor: '#A7F3D0' }}>Self Reflection</span>
            <span className="lit-pill" style={{ background: '#DBEAFE', color: 'var(--mod-color)', borderColor: '#BFDBFE' }}>Cosmic Awareness</span>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-title">Jurnal Refleksi Mandiri</div>
        
        <div className="journal-group mb-4">
          <label className="journal-label">Momen Aha! (Insight Baru)</label>
          <textarea className="journal-textarea" placeholder="Hal paling mengejutkan yang baru saya pelajari tentang Cuaca Antariksa adalah..."></textarea>
        </div>

        <div className="journal-group mb-4">
          <label className="journal-label">Koneksi Realita</label>
          <textarea className="journal-textarea" placeholder="Berdasarkan seberapa bergantung saya pada listrik dan internet tiap hari, jika terjadi badai G5 besok, hal yang paling sulit bagi hidup saya adalah..."></textarea>
        </div>

        <button className="px-4 py-2 bg-slate-900 text-white rounded-md text-sm font-semibold hover:bg-slate-800 transition-colors">
          Simpan Jurnal ke Portofolio
        </button>
      </div>

      <div className="btn-row mt-6">
        <button className="btn-secondary-sm" onClick={() => navigate(`/modul-lms/belajar/${prevPhase}`)}><IconArrowRight className="w-4 h-4 rotate-180" /> Kembali</button>
        <button className="btn-next-phase" onClick={() => navigate(`/modul-lms/belajar/${nextPhase}`)}>Lanjut ke Assessment <IconArrowRight className="w-4 h-4" /></button>
      </div>
    </div>
  );
}

export function PhaseAssess({ prevPhase }) {
  const navigate = useNavigate();
  return (
    <div className="phase-content active animate-fade-in">
      <div className="phase-intro" style={{ background: '#F8FAFC', borderColor: '#E2E8F0' }}>
        <div className="phase-intro-icon" style={{ background: '#F1F5F9' }}>
          <IconClipboardCheck style={{ fontSize: '22px', color: '#475569' }} />
        </div>
        <div>
          <div className="phase-intro-title">Assessment — Post-Test Modul 1</div>
          <div className="phase-intro-sub">Uji pemahaman akhir terkait Cuaca Antariksa untuk mengukur N-Gain Score Anda.</div>
          <div className="lit-pills mt-2 flex flex-wrap gap-2">
            <span className="lit-pill" style={{ background: '#F1F5F9', color: '#475569', borderColor: '#E2E8F0' }}>Evaluation</span>
          </div>
        </div>
      </div>

      <div className="assessment-info">
        <div className="assess-stat">
          <div className="assess-stat-val">10</div>
          <div className="assess-stat-lbl">Soal Pilihan Ganda</div>
        </div>
        <div className="assess-stat">
          <div className="assess-stat-val">15 Menit</div>
          <div className="assess-stat-lbl">Batas Waktu</div>
        </div>
        <div className="assess-stat">
          <div className="assess-stat-val">75</div>
          <div className="assess-stat-lbl">Batas Kelulusan (KKM)</div>
        </div>
      </div>

      <div className="card text-center py-12">
        <IconClipboardCheck className="w-16 h-16 mx-auto text-slate-300 mb-4" />
        <h3 className="text-lg font-bold text-slate-800 mb-2">Siap untuk Ujian Akhir Modul?</h3>
        <p className="text-sm text-slate-500 mb-6 max-w-sm mx-auto">
          Pastikan Anda sudah mempelajari semua tahapan dari E, D, R, A, hingga R. Nilai post-test akan dihitung ke portofolio siswa.
        </p>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg text-sm font-bold shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all">
          Mulai Post-Test Sekarang
        </button>
      </div>

      <div className="btn-row mt-6">
        <button className="btn-secondary-sm" onClick={() => navigate(`/modul-lms/belajar/${prevPhase}`)}><IconArrowRight className="w-4 h-4 rotate-180" /> Kembali</button>
        <button className="btn-secondary-sm" onClick={() => navigate('/dashboard')}><IconHome className="w-4 h-4" /> Kembali ke Dashboard</button>
      </div>
    </div>
  );
}
