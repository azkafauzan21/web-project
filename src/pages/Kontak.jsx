import React from 'react';
import { Link } from 'react-router-dom';
import { IconBuildingCommunity, IconMail, IconMapPin, IconPhone, IconSchool, IconSend, IconShieldCheck, IconMicroscope, IconAward, IconUserPlus, IconLogin, IconPlanet } from '@tabler/icons-react';

export function Kontak() {
  return (
    <div className="w-full flex flex-col items-center overflow-x-hidden">
      <div className="p-6 md:p-8 w-full max-w-6xl mx-auto space-y-10 fade-in">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white">
          Hubungi Tim Peneliti
        </h1>
        <p className="text-slate-600 dark:text-slate-400">
          Astromitigasi dikembangkan sebagai bagian dari inovasi teknologi pendidikan mitigasi. Jika Anda memiliki masukan, ide kolaborasi, atau melaporkan kendala, jangan ragu untuk menghubungi kami.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Info Kontak & Dukungan */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/30 rounded-2xl p-6">
            <h3 className="text-sm font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-4">Didukung Oleh</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                <IconSchool className="w-5 h-5 text-blue-500" />
                <span className="text-sm font-medium">Universitas Pendidikan Indonesia</span>
              </div>
              <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                <IconBuildingCommunity className="w-5 h-5 text-blue-500" />
                <span className="text-sm font-medium">Badan Riset & Inovasi Nasional (BRIN)</span>
              </div>
              <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                <IconShieldCheck className="w-5 h-5 text-blue-500" />
                <span className="text-sm font-medium">Riset Kolaborasi Indonesia (RKI)</span>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl p-6">
            <div className="space-y-5">
              <div className="flex gap-3">
                <IconMapPin className="w-5 h-5 text-slate-400 shrink-0" />
                <div className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  <strong>FPMIPA UPI</strong><br/>
                  Jl. Dr. Setiabudi No.229, Isola, Sukasari,<br/>
                  Kota Bandung, Jawa Barat 40154
                </div>
              </div>
              <div className="flex gap-3 items-center">
                <IconMail className="w-5 h-5 text-slate-400 shrink-0" />
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  astromitigasi@upi.edu
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="lg:col-span-2 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 md:p-8 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Kirim Pesan</h2>
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Nama Lengkap</label>
                <input type="text" className="w-full px-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-transparent text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="John Doe" />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Email</label>
                <input type="email" className="w-full px-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-transparent text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="john@example.com" />
              </div>
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Kategori Pesan</label>
              <select className="w-full px-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Pertanyaan Umum</option>
                <option>Laporan Bug / Error</option>
                <option>Tawaran Kolaborasi Riset</option>
              </select>
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Pesan</label>
              <textarea rows="5" className="w-full px-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-transparent text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none" placeholder="Tuliskan pesan Anda di sini..."></textarea>
            </div>
            <button className="flex items-center justify-center gap-2 w-full md:w-auto px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold transition-colors">
              <IconSend className="w-4 h-4" /> Kirim Pesan
            </button>
          </form>
        </div>
      </div>
      </div>

      {/* Partner Section (Matches DLLS-GEMA `.partner-section`) */}
      <div className="w-full bg-white dark:bg-slate-950 py-12 border-t border-slate-100 dark:border-slate-900">
        <div className="max-w-[900px] mx-auto px-6 flex flex-wrap justify-center items-center gap-4">
          <div className="text-[10px] font-bold text-slate-400 tracking-[1px] uppercase mr-2">Didukung oleh</div>
          <div className="w-[1px] h-6 bg-slate-200 dark:bg-slate-800 hidden sm:block"></div>
          <div className="px-4 py-2 rounded-full border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 text-[11px] font-semibold bg-white dark:bg-slate-900 shadow-sm flex items-center gap-1.5">
            <IconBuildingCommunity className="w-3.5 h-3.5 text-slate-400" /> UPI Bandung
          </div>
          <div className="px-4 py-2 rounded-full border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 text-[11px] font-semibold bg-white dark:bg-slate-900 shadow-sm flex items-center gap-1.5">
            <IconBuildingCommunity className="w-3.5 h-3.5 text-slate-400" /> Universitas Terbuka
          </div>
          <div className="px-4 py-2 rounded-full border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 text-[11px] font-semibold bg-white dark:bg-slate-900 shadow-sm flex items-center gap-1.5">
            <IconMicroscope className="w-3.5 h-3.5 text-slate-400" /> BRIN Jakarta
          </div>
          <div className="px-4 py-2 rounded-full border border-slate-200 dark:border-slate-800 text-blue-700 dark:text-blue-400 text-[11px] font-bold bg-blue-50 dark:bg-blue-900/20 shadow-sm flex items-center gap-1.5">
            <IconAward className="w-3.5 h-3.5 text-blue-500" /> RKI 2026 Skema B
          </div>
          
          <div className="w-full flex justify-center mt-4 gap-2">
            <div className="px-3 py-1 rounded-full border border-slate-200 dark:border-slate-800 text-slate-500 text-[10px] font-bold bg-slate-50 dark:bg-slate-900">SDG 4</div>
            <div className="px-3 py-1 rounded-full border border-slate-200 dark:border-slate-800 text-slate-500 text-[10px] font-bold bg-slate-50 dark:bg-slate-900">SDG 11</div>
            <div className="px-3 py-1 rounded-full border border-slate-200 dark:border-slate-800 text-slate-500 text-[10px] font-bold bg-slate-50 dark:bg-slate-900">SDG 13</div>
            <div className="px-3 py-1 rounded-full border border-slate-200 dark:border-slate-800 text-slate-500 text-[10px] font-bold bg-slate-50 dark:bg-slate-900">SDG 17</div>
          </div>
        </div>
      </div>

      {/* CTA Section (Matches DLLS-GEMA `.cta-section`) */}
      <section className="relative w-full py-20 bg-[linear-gradient(135deg,#0F172A_0%,#1E3A8A_50%,#312E81_100%)] overflow-hidden text-center text-white">
        <div className="absolute top-[-60px] left-[-60px] w-[320px] h-[320px] bg-white/[0.03] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-[-40px] right-[-40px] w-[240px] h-[240px] bg-white/[0.04] rounded-full pointer-events-none"></div>
        
        <div className="max-w-[640px] mx-auto px-6 relative z-10 flex flex-col items-center">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-[20px] border border-white/15 bg-white/10 text-white/90 text-[11px] font-bold tracking-[0.4px] uppercase mb-5">
            <IconShieldCheck className="w-4 h-4" /> Gratis untuk mahasiswa UPI & UT terdaftar
          </div>
          
          <h2 className="text-[32px] font-extrabold leading-[1.25] tracking-[-0.3px] mb-[14px] text-white">
            Jadilah bagian dari gerakan<br/>literasi antariksa masa depan
          </h2>
          
          <p className="text-[14px] text-white/65 leading-[1.75] mb-8">
            Aktivitas matahari yang dinamis dan ribuan asteroid yang melintas mendekat Bumi membutuhkan perhatian kita.<br/>Mari tingkatkan kesadaran bahaya dari luar angkasa hari ini.
          </p>
          
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/login" className="inline-flex items-center justify-center gap-2 px-7 py-3 bg-white text-slate-900 hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(0,0,0,0.25)] font-bold rounded-xl transition-all shadow-[0_4px_16px_rgba(0,0,0,0.2)] text-[14px]">
              <IconUserPlus className="w-[18px] h-[18px]" /> Daftar Akun Gratis
            </Link>
            <Link to="/login" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-transparent border-[1.5px] border-white/30 text-white/90 hover:border-white/70 hover:bg-white/5 font-semibold rounded-xl transition-all text-[14px]">
              <IconLogin className="w-[18px] h-[18px]" /> Sudah punya akun? Masuk
            </Link>
          </div>
        </div>
      </section>

      {/* Footer (Matches DLLS-GEMA `.footer`) */}
      <footer className="w-full bg-[#0F172A] text-slate-300 py-16 border-t border-slate-800/50">
        <div className="max-w-[1080px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-12">
            
            {/* Brand Col */}
            <div className="col-span-1 md:col-span-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-[8px] bg-blue-600 flex items-center justify-center">
                  <IconPlanet className="w-4 h-4 text-white" />
                </div>
                <div className="text-[14px] font-bold text-white tracking-wide">
                  <span className="text-blue-400">DLLS</span> — GEMA Project
                </div>
              </div>
              <p className="text-[13px] text-slate-400 leading-[1.7] mb-6 pr-4">
                Disaster Literacy Learning System dikembangkan dalam Riset Kolaborasi Indonesia (RKI) 2026 Skema B, didanai Kemendikbudristek. Kolaborasi UPI, Universitas Terbuka, dan BRIN Jakarta.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-slate-800 rounded-md text-[11px] font-semibold text-slate-400 border border-slate-700">UPI Bandung</span>
                <span className="px-3 py-1 bg-slate-800 rounded-md text-[11px] font-semibold text-slate-400 border border-slate-700">Universitas Terbuka</span>
                <span className="px-3 py-1 bg-slate-800 rounded-md text-[11px] font-semibold text-slate-400 border border-slate-700">BRIN Jakarta</span>
                <span className="px-3 py-1 bg-slate-800 rounded-md text-[11px] font-semibold text-slate-400 border border-slate-700">FPMIPA</span>
              </div>
            </div>

            {/* Links Cols */}
            <div className="col-span-1 md:col-span-2 md:col-start-6">
              <div className="text-[11px] font-bold uppercase tracking-[1px] text-slate-500 mb-5">Platform</div>
              <ul className="space-y-3">
                <li><a href="#modul" className="text-[13px] text-slate-400 hover:text-white transition-colors">Modul Bencana</a></li>
                <li><a href="#ai" className="text-[13px] text-slate-400 hover:text-white transition-colors">AI Assistant</a></li>
                <li><a href="#data" className="text-[13px] text-slate-400 hover:text-white transition-colors">Disaster Data Center</a></li>
                <li><a href="#gallery" className="text-[13px] text-slate-400 hover:text-white transition-colors">Galeri Proyek</a></li>
                <li><a href="#asesmen" className="text-[13px] text-slate-400 hover:text-white transition-colors">Asesmen</a></li>
              </ul>
            </div>

            <div className="col-span-1 md:col-span-2">
              <div className="text-[11px] font-bold uppercase tracking-[1px] text-slate-500 mb-5">Tentang</div>
              <ul className="space-y-3">
                <li><a href="#tentang" className="text-[13px] text-slate-400 hover:text-white transition-colors">Tentang Kami</a></li>
                <li><a href="#riset" className="text-[13px] text-slate-400 hover:text-white transition-colors">Roadmap Riset</a></li>
                <li><a href="#publikasi" className="text-[13px] text-slate-400 hover:text-white transition-colors">Publikasi</a></li>
                <li><a href="#tim" className="text-[13px] text-slate-400 hover:text-white transition-colors">Tim Peneliti</a></li>
                <li><a href="#kontak" className="text-[13px] text-slate-400 hover:text-white transition-colors">Kontak</a></li>
              </ul>
            </div>

            <div className="col-span-1 md:col-span-2">
              <div className="text-[11px] font-bold uppercase tracking-[1px] text-slate-500 mb-5">Dukungan</div>
              <ul className="space-y-3">
                <li><a href="#bantuan" className="text-[13px] text-slate-400 hover:text-white transition-colors">Panduan Mahasiswa</a></li>
                <li><a href="#bantuan-dosen" className="text-[13px] text-slate-400 hover:text-white transition-colors">Panduan Dosen</a></li>
                <li><a href="#faq" className="text-[13px] text-slate-400 hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#lapor" className="text-[13px] text-slate-400 hover:text-white transition-colors">Laporkan Masalah</a></li>
                <li><a href="#hubungi" className="text-[13px] text-slate-400 hover:text-white transition-colors">Hubungi Kami</a></li>
              </ul>
            </div>

          </div>

          <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-[12px] text-slate-500">
              © 2026 GEMA Project — FPMIPA UPI. Dikembangkan untuk kepentingan pendidikan nasional.
            </div>
            <div className="flex gap-2">
              <span className="px-2.5 py-1 bg-slate-800 rounded text-[10px] font-bold text-slate-500 border border-slate-700">SDG 4</span>
              <span className="px-2.5 py-1 bg-slate-800 rounded text-[10px] font-bold text-slate-500 border border-slate-700">SDG 11</span>
              <span className="px-2.5 py-1 bg-slate-800 rounded text-[10px] font-bold text-slate-500 border border-slate-700">SDG 13</span>
              <span className="px-2.5 py-1 bg-slate-800 rounded text-[10px] font-bold text-slate-500 border border-slate-700">SDG 17</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
