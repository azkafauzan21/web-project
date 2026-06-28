import React from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle, Users, Sparkles, BookOpen, Image as ImageIcon, Quote } from 'lucide-react';

export function LandingSections() {
  return (
    <>
      {/* Why Section */}
      <section id="about" className="py-20 bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-[1080px] mx-auto px-6">
          <div className="text-red-500 font-bold tracking-[1px] uppercase text-[11px] mb-4 flex items-center gap-2">
            <AlertTriangle className="w-4 h-4" /> Mengapa literasi antariksa penting?
          </div>
          <h2 className="text-[32px] md:text-[38px] font-extrabold text-slate-900 dark:text-white leading-[1.2] mb-12 tracking-tight">
            Bumi: Terancam oleh aktivitas kosmik<br/>tanpa disadari
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white dark:bg-slate-800 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm relative overflow-hidden">
                <div className="text-2xl mb-3">☀️</div>
                <div className="text-[11px] font-bold text-red-500 uppercase tracking-wide mb-1">Badai Matahari</div>
                <div className="text-[14px] font-bold text-slate-900 dark:text-white leading-snug mb-2">Badai Magnetik Ekstrem<br/>G5 · Mei 2024</div>
                <div className="text-[12px] text-slate-500 dark:text-slate-400">Gangguan GPS & Jaringan Listrik</div>
              </div>
              <div className="bg-white dark:bg-slate-800 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
                <div className="text-2xl mb-3">☄️</div>
                <div className="text-[11px] font-bold text-blue-500 uppercase tracking-wide mb-1">Asteroid</div>
                <div className="text-[14px] font-bold text-slate-900 dark:text-white leading-snug mb-2">Meteor Chelyabinsk</div>
                <div className="text-[12px] text-slate-500 dark:text-slate-400">1500+ korban luka · 2013</div>
              </div>
              <div className="bg-white dark:bg-slate-800 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
                <div className="text-2xl mb-3">🛰️</div>
                <div className="text-[11px] font-bold text-orange-500 uppercase tracking-wide mb-1">Sampah Antariksa</div>
                <div className="text-[14px] font-bold text-slate-900 dark:text-white leading-snug mb-2">Jatuhan Puing Roket</div>
                <div className="text-[12px] text-slate-500 dark:text-slate-400">Risiko di jalur padat orbit</div>
              </div>
              <div className="bg-white dark:bg-slate-800 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
                <div className="text-2xl mb-3">📡</div>
                <div className="text-[11px] font-bold text-teal-500 uppercase tracking-wide mb-1">Pemadaman Radio</div>
                <div className="text-[14px] font-bold text-slate-900 dark:text-white leading-snug mb-2">Blackout Navigasi Penerbangan</div>
                <div className="text-[12px] text-slate-500 dark:text-slate-400">Radiasi Matahari Kelas X</div>
              </div>
            </div>
            
            <div className="flex flex-col justify-center">
              <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl mb-8 border-l-4 border-blue-500 shadow-sm">
                <div className="text-[15px] font-medium text-slate-700 dark:text-slate-300 italic leading-relaxed mb-3">
                  "Tingkat literasi bencana mahasiswa MIPA masih tergolong rendah, bahkan pada mereka yang pernah mengalami bencana gempa bumi secara langsung."
                </div>
                <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wide">
                  Fadilah et al., Journal of Engineering Science and Technology, 2020
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Motivasi Section */}
      <section className="py-20 bg-white dark:bg-slate-950">
        <div className="max-w-[1080px] mx-auto px-6 text-center">
          <div className="text-[11px] font-bold text-blue-500 uppercase tracking-[1px] mb-3 flex items-center justify-center gap-1.5">
            <Users className="w-4 h-4" /> Mengapa kamu harus peduli?
          </div>
          <h2 className="text-[32px] md:text-[38px] font-extrabold text-slate-900 dark:text-white leading-[1.2] tracking-tight mb-12">
            Kamu adalah agen kesiapsiagaan<br />bencana Indonesia
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="md:col-span-3 bg-[#0F172A] rounded-[24px] p-8 lg:p-10 flex flex-col md:flex-row gap-8 items-center border border-slate-800 shadow-xl">
              <div className="flex-1">
                <div className="text-4xl mb-4">🎓</div>
                <div className="text-[18px] md:text-[22px] font-bold text-white leading-[1.5] mb-4">
                  "Guru fisika masa depan bukan hanya mengajar gelombang dan gaya — mereka mengajarkan cara bertahan hidup di negara paling aktif seismiknya di dunia."
                </div>
                <div className="text-[11px] font-bold text-blue-400 uppercase tracking-[1px]">
                  Visi GEMA — IPBA UPI 2026 · SDGs Butir 4, 11, 13, 17
                </div>
              </div>
              <div className="flex-1 grid grid-cols-2 gap-4 w-full">
                <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                  <div className="text-2xl font-black text-red-400 mb-1">500+</div>
                  <div className="text-[11px] text-slate-400 font-medium leading-[1.4]">Sesar aktif di Indonesia. Banyak belum terpetakan.</div>
                </div>
                <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                  <div className="text-2xl font-black text-amber-400 mb-1">3×</div>
                  <div className="text-[11px] text-slate-400 font-medium leading-[1.4]">Lebih sering bencana dibanding 30 tahun lalu</div>
                </div>
                <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                  <div className="text-2xl font-black text-blue-400 mb-1">17%</div>
                  <div className="text-[11px] text-slate-400 font-medium leading-[1.4]">Gempa bumi dunia terjadi di wilayah Indonesia</div>
                </div>
                <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                  <div className="text-2xl font-black text-emerald-400 mb-1">↑0.47</div>
                  <div className="text-[11px] text-slate-400 font-medium leading-[1.4]">N-Gain rata-rata literasi bencana mahasiswa DLLS</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-[1080px] mx-auto px-6 text-center">
          <div className="text-[11px] font-bold text-purple-500 uppercase tracking-[1px] mb-3 flex items-center justify-center gap-1.5">
            <Sparkles className="w-4 h-4" /> Fitur Unggulan
          </div>
          <h2 className="text-[32px] md:text-[38px] font-extrabold text-slate-900 dark:text-white leading-[1.2] tracking-tight mb-12">
            Teknologi pembelajaran yang dirancang<br />untuk bencana nyata
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {[
              { icon: '🤖', bg: 'bg-blue-50 dark:bg-blue-900/20', color: 'text-blue-500', title: 'AI Disaster Assistant', desc: 'Chatbot berbasis pendekatan Socratic merespons pertanyaan bencana dengan pertanyaan balik.' },
              { icon: '📋', bg: 'bg-amber-50 dark:bg-amber-900/20', color: 'text-amber-500', title: 'Alur E-DRA per Modul', desc: 'Kerangka Engage-Discover-Reason-Apply-Reflection-Assessment terintegrasi.' },
              { icon: '🗺️', bg: 'bg-green-50 dark:bg-green-900/20', color: 'text-green-500', title: 'Disaster Data Center', desc: 'Data real-time BMKG, BNPB, dan USGS terintegrasi langsung ke aktivitas.' },
              { icon: '📈', bg: 'bg-purple-50 dark:bg-purple-900/20', color: 'text-purple-500', title: 'Learning Analytics N-Gain', desc: 'Dashboard N-Gain per mahasiswa, tracking literasi 4 dimensi.' },
              { icon: '🧪', bg: 'bg-red-50 dark:bg-red-900/20', color: 'text-red-500', title: 'Diagnostik Four-Tier Adaptif', desc: 'Mendeteksi miskonsepsi bencana sebelum belajar secara adaptif.' },
              { icon: '🖼️', bg: 'bg-teal-50 dark:bg-teal-900/20', color: 'text-teal-500', title: 'Project Gallery Publik', desc: 'Ruang pamer karya mahasiswa, poster mitigasi, video edukasi yang diakses luas.' }
            ].map((f, i) => (
              <div key={i} className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm transition-transform hover:-translate-y-1">
                <div className={`w-12 h-12 ${f.bg} rounded-xl flex items-center justify-center text-2xl mb-5`}>{f.icon}</div>
                <div className="text-[16px] font-bold text-slate-900 dark:text-white mb-2">{f.title}</div>
                <div className="text-[13px] text-slate-500 dark:text-slate-400 leading-[1.6]">{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section id="modules" className="py-24 bg-white dark:bg-slate-950">
        <div className="max-w-[1080px] mx-auto px-6 text-center">
          <div className="text-[11px] font-bold text-blue-500 uppercase tracking-[1px] mb-3 flex items-center justify-center gap-1.5">
            <BookOpen className="w-4 h-4" /> Kurikulum
          </div>
          <h2 className="text-[32px] md:text-[38px] font-extrabold text-slate-900 dark:text-white leading-[1.2] tracking-tight mb-4">
            3 Modul Literasi Bencana Antariksa
          </h2>
          <p className="text-[14px] text-slate-500 dark:text-slate-400 mb-12">Setiap modul mencakup 6 fase pembelajaran dengan AI Chatbot (Astro-AI) aktif di setiap fase.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left justify-center">
            <Link to="/modul" className="group block bg-white dark:bg-slate-800 p-8 rounded-[20px] border border-slate-200 dark:border-slate-700 border-t-[3px] border-t-blue-500 shadow-sm hover:shadow-md transition-all">
              <div className="text-[32px] mb-4 group-hover:scale-110 transition-transform origin-left">☀️</div>
              <div className="text-[11px] font-bold text-blue-500 uppercase tracking-[1px] mb-2">Modul 1</div>
              <div className="text-[18px] font-extrabold text-slate-900 dark:text-white mb-3 leading-snug">Cuaca Antariksa</div>
              <div className="text-[13px] text-slate-500 dark:text-slate-400 leading-[1.6]">Siklus Matahari · Flare & CME · Badai Geomagnetik · Dampak Satelit & Navigasi</div>
            </Link>
            <Link to="/modul" className="group block bg-white dark:bg-slate-800 p-8 rounded-[20px] border border-slate-200 dark:border-slate-700 border-t-[3px] border-t-orange-500 shadow-sm hover:shadow-md transition-all">
              <div className="text-[32px] mb-4 group-hover:scale-110 transition-transform origin-left">☄️</div>
              <div className="text-[11px] font-bold text-orange-500 uppercase tracking-[1px] mb-2">Modul 2</div>
              <div className="text-[18px] font-extrabold text-slate-900 dark:text-white mb-3 leading-snug">Asteroid & Komet</div>
              <div className="text-[13px] text-slate-500 dark:text-slate-400 leading-[1.6]">Near-Earth Objects (NEO) · Orbit & Trayektori · Skala Torino · Misi Pertahanan Planet</div>
            </Link>
            <Link to="/modul" className="group block bg-white dark:bg-slate-800 p-8 rounded-[20px] border border-slate-200 dark:border-slate-700 border-t-[3px] border-t-red-500 shadow-sm hover:shadow-md transition-all">
              <div className="text-[32px] mb-4 group-hover:scale-110 transition-transform origin-left">🛰️</div>
              <div className="text-[11px] font-bold text-red-500 uppercase tracking-[1px] mb-2">Modul 3</div>
              <div className="text-[18px] font-extrabold text-slate-900 dark:text-white mb-3 leading-snug">Sampah Antariksa</div>
              <div className="text-[13px] text-slate-500 dark:text-slate-400 leading-[1.6]">Sindrom Kessler · Dinamika Orbit LEO · Manajemen Lalu Lintas Ruang Angkasa</div>
            </Link>
          </div>
          
          <div className="mt-12 text-[13px] font-medium text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-900 inline-block px-6 py-3 rounded-full border border-slate-200 dark:border-slate-800 shadow-sm">
            🤖 Didampingi Astro-AI, agen cerdas yang siap menjawab pertanyaanmu kapan saja!
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-slate-50 dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-[1080px] mx-auto px-6">
          <div className="text-[11px] font-bold text-green-500 uppercase tracking-[1px] mb-3 flex items-center gap-1.5">
            <ImageIcon className="w-4 h-4" /> Galeri Karya Mahasiswa
          </div>
          <h2 className="text-[32px] md:text-[38px] font-extrabold text-slate-900 dark:text-white leading-[1.2] tracking-tight mb-4">
            Aksi nyata literasi bencana dari kampus
          </h2>
          <p className="text-[14px] text-slate-500 dark:text-slate-400 mb-10 max-w-[600px]">Proyek Apply dari mahasiswa yang sudah berdampak nyata di komunitas sekitar kampus.</p>
          
          <div className="flex gap-2 overflow-x-auto pb-4 mb-8">
            {['Semua', 'Alat Peraga', 'Poster Mitigasi', 'Aksi Sosial', 'Peta Risiko'].map((tab, i) => (
              <button key={i} className={`px-4 py-2 rounded-full text-[12px] font-bold whitespace-nowrap transition-colors ${i === 0 ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900' : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700 dark:hover:bg-slate-700'}`}>
                {tab}
              </button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden flex flex-col">
              <div className="h-40 bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-900/10 flex items-center justify-center relative">
                <span className="text-5xl opacity-80">🛠️</span>
                <span className="absolute bottom-3 left-3 bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300 text-[10px] font-bold px-2 py-1 rounded">Alat Peraga</span>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <div className="text-[15px] font-bold text-slate-900 dark:text-white mb-2 leading-snug">Seismograf Sederhana DIY</div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-auto flex items-center gap-1.5"><span className="text-red-500">🏢</span> M1 Gempa · Angkatan 2024</div>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden flex flex-col">
              <div className="h-40 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-900/10 flex items-center justify-center relative">
                <span className="text-5xl opacity-80">📄</span>
                <span className="absolute bottom-3 left-3 bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 text-[10px] font-bold px-2 py-1 rounded">Poster Mitigasi</span>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <div className="text-[15px] font-bold text-slate-900 dark:text-white mb-2 leading-snug">Poster Jalur Evakuasi Tsunami</div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-auto flex items-center gap-1.5"><span className="text-blue-500">🌊</span> M2 Tsunami · Kelompok B</div>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden flex flex-col">
              <div className="h-40 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-900/10 flex items-center justify-center relative">
                <span className="text-5xl opacity-80">🗺️</span>
                <span className="absolute bottom-3 left-3 bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300 text-[10px] font-bold px-2 py-1 rounded">Peta Risiko</span>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <div className="text-[15px] font-bold text-slate-900 dark:text-white mb-2 leading-snug">Peta KRB Gunung Gede Pangrango</div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-auto flex items-center gap-1.5"><span className="text-orange-500">🌋</span> M3 Vulkanologi · Tim Riset</div>
              </div>
            </div>
          </div>
          
          <div className="mt-10 text-center">
            <button className="px-6 py-2.5 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-[13px] font-bold border border-slate-200 dark:border-slate-700 rounded-full shadow-sm hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
              Lihat semua karya →
            </button>
          </div>
        </div>
      </section>

      {/* Testimoni Section */}
      <section className="py-20 bg-white dark:bg-slate-950">
        <div className="max-w-[1080px] mx-auto px-6">
          <div className="text-[11px] font-bold text-orange-500 uppercase tracking-[1px] mb-3 flex items-center justify-center gap-1.5">
            <Quote className="w-4 h-4" /> Kata Mahasiswa
          </div>
          <h2 className="text-[32px] md:text-[38px] font-extrabold text-slate-900 dark:text-white leading-[1.2] tracking-tight mb-12 text-center">
            Pengalaman belajar literasi bencana<br />bersama DLLS
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
              <div className="text-amber-400 text-sm tracking-widest mb-3">★★★★★</div>
              <div className="text-[13px] text-slate-600 dark:text-slate-300 italic leading-[1.7] mb-5">
                "Setelah menggunakan DLLS, saya baru sadar bahwa daerah asal saya di Padang masuk zona megathrust. Saya langsung sosialisasikan ke keluarga cara evakuasi yang benar."
              </div>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-400 flex items-center justify-center font-bold text-[12px]">NA</div>
                <div>
                  <div className="text-[13px] font-bold text-slate-900 dark:text-white">Nur Afifah</div>
                  <div className="text-[11px] text-slate-500">Pend. Fisika 2023 · Padang</div>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
              <div className="text-amber-400 text-sm tracking-widest mb-3">★★★★★</div>
              <div className="text-[13px] text-slate-600 dark:text-slate-300 italic leading-[1.7] mb-5">
                "AI Disaster Assistant benar-benar seperti tutor — dia tidak langsung jawab, tapi membuat saya berpikir lebih dalam. N-Gain saya naik dari 0.38 ke 0.71 setelah 5 modul."
              </div>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/50 dark:text-orange-400 flex items-center justify-center font-bold text-[12px]">RP</div>
                <div>
                  <div className="text-[13px] font-bold text-slate-900 dark:text-white">Rizky Pratama</div>
                  <div className="text-[11px] text-slate-500">Pend. Fisika 2022 · Bandung</div>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
              <div className="text-amber-400 text-sm tracking-widest mb-3">★★★★★</div>
              <div className="text-[13px] text-slate-600 dark:text-slate-300 italic leading-[1.7] mb-5">
                "Peta KRB yang saya buat di fase Apply Modul Vulkanologi bahkan dipakai oleh desa setempat untuk sosialisasi bencana. Rasanya belajar benar-benar bermakna."
              </div>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-400 flex items-center justify-center font-bold text-[12px]">DS</div>
                <div>
                  <div className="text-[13px] font-bold text-slate-900 dark:text-white">Dita Sari</div>
                  <div className="text-[11px] text-slate-500">Pend. Fisika 2023 · Yogyakarta</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
