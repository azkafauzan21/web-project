import React from 'react';
import { Mail, MapPin, Phone, Send, GraduationCap, Building2, ShieldCheck } from 'lucide-react';

export function Kontak() {
  return (
    <div className="p-6 md:p-8 max-w-6xl mx-auto space-y-10 fade-in">
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
                <GraduationCap className="w-5 h-5 text-blue-500" />
                <span className="text-sm font-medium">Universitas Pendidikan Indonesia</span>
              </div>
              <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                <Building2 className="w-5 h-5 text-blue-500" />
                <span className="text-sm font-medium">Badan Riset & Inovasi Nasional (BRIN)</span>
              </div>
              <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                <ShieldCheck className="w-5 h-5 text-blue-500" />
                <span className="text-sm font-medium">Riset Kolaborasi Indonesia (RKI)</span>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl p-6">
            <div className="space-y-5">
              <div className="flex gap-3">
                <MapPin className="w-5 h-5 text-slate-400 shrink-0" />
                <div className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  <strong>FPMIPA UPI</strong><br/>
                  Jl. Dr. Setiabudi No.229, Isola, Sukasari,<br/>
                  Kota Bandung, Jawa Barat 40154
                </div>
              </div>
              <div className="flex gap-3 items-center">
                <Mail className="w-5 h-5 text-slate-400 shrink-0" />
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
              <Send className="w-4 h-4" /> Kirim Pesan
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
