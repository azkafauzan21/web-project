import React from 'react';

export function TentangKami() {
  return (
    <div className="p-6 md:p-8 max-w-4xl mx-auto space-y-6 fade-in">
      <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Tentang Kami</h1>
      <div className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
          Platform Astromitigasi dibangun untuk meningkatkan literasi bencana kosmik di Indonesia. Kami menyediakan alat pemantauan cuaca antariksa dan pelacakan objek dekat Bumi secara langsung, mengintegrasikan data NASA untuk tujuan edukasi publik.
        </p>
      </div>
    </div>
  );
}
