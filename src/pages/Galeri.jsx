import React, { useState } from 'react';
import { IconFileText, IconMapPin, IconPhoto, IconUsers, IconVideo } from '@tabler/icons-react';
import { cn } from '@/lib/utils';

export function Galeri() {
  const [activeTab, setActiveTab] = useState('semua');

  const tabs = [
    { id: 'semua', label: 'Semua' },
    { id: 'alat', label: 'Alat Peraga' },
    { id: 'poster', label: 'Poster Edukasi' },
    { id: 'sosial', label: 'Aksi Komunitas' },
    { id: 'pemodelan', label: 'Pemodelan Orbit' }
  ];

  const galleryItems = [
    { id: 1, category: 'alat', title: 'Detektor Sinyal Badai Matahari DIY', meta: 'Modul Cuaca Antariksa · Klub Astronomi', icon: IconPhoto, color: 'text-red-600 bg-red-100 dark:bg-red-900/30' },
    { id: 2, category: 'poster', title: 'Poster Mitigasi Tabrakan Asteroid', meta: 'Modul Asteroid · Kelompok B', icon: IconFileText, color: 'text-blue-600 bg-blue-100 dark:bg-blue-900/30' },
    { id: 3, category: 'pemodelan', title: 'Peta Persebaran Sampah Satelit LEO', meta: 'Modul Space Debris · Tim Riset', icon: IconMapPin, color: 'text-orange-600 bg-orange-100 dark:bg-orange-900/30' },
    { id: 4, category: 'sosial', title: 'Sosialisasi Bahaya Flare ke Amatir Radio', meta: 'Aksi Sosial · Komunitas ORARI', icon: IconUsers, color: 'text-teal-600 bg-teal-100 dark:bg-teal-900/30' },
    { id: 5, category: 'poster', title: 'IconVideo Animasi Sindrom Kessler', meta: 'Proyek Akhir · Individu', icon: IconVideo, color: 'text-green-600 bg-green-100 dark:bg-green-900/30' },
    { id: 6, category: 'alat', title: 'Aplikasi Notifikasi Flare Harian', meta: 'Lintas Modul · Tim Dev Mhs', icon: IconPhoto, color: 'text-purple-600 bg-purple-100 dark:bg-purple-900/30' }
  ];

  const filteredItems = activeTab === 'semua' ? galleryItems : galleryItems.filter(item => item.category === activeTab);

  return (
    <div className="p-6 md:p-8 max-w-6xl mx-auto space-y-8 fade-in">
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="text-sm font-bold text-green-600 dark:text-green-400 uppercase tracking-wider flex items-center justify-center gap-2">
          <IconPhoto className="w-4 h-4" /> Galeri Karya
        </div>
        <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white">
          Aksi Nyata Literasi Bencana
        </h1>
        <p className="text-slate-600 dark:text-slate-400">
          Kumpulan proyek, alat peraga, dan aksi sosial yang dibangun oleh pengguna untuk menyebarkan kesadaran mitigasi.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-semibold transition-all",
              activeTab === tab.id 
                ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-md"
                : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-400 dark:hover:bg-slate-800"
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Grid Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map(item => (
          <div key={item.id} className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden hover:shadow-lg transition-all group cursor-pointer">
            <div className={`h-40 flex items-center justify-center relative ${item.color.replace('text-', 'bg-').replace('-600', '-50')} dark:opacity-80`}>
              <item.icon className={`w-12 h-12 opacity-50 ${item.color.split(' ')[0]}`} />
              <div className={`absolute bottom-3 left-3 px-2 py-1 text-[10px] font-bold rounded ${item.color}`}>
                {item.category.toUpperCase()}
              </div>
            </div>
            <div className="p-5">
              <h3 className="font-bold text-slate-900 dark:text-white mb-1 group-hover:text-blue-600 transition-colors">{item.title}</h3>
              <p className="text-xs text-slate-500 font-medium">{item.meta}</p>
            </div>
          </div>
        ))}
      </div>
      
      {filteredItems.length === 0 && (
        <div className="text-center py-12 text-slate-500">Belum ada karya di kategori ini.</div>
      )}
    </div>
  );
}
