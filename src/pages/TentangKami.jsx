import React from 'react';
import { IconAlertTriangle, IconBook, IconCircleCheck, IconDroplet, IconFlame, IconMountain, IconPresentation, IconWaveSine } from '@tabler/icons-react';

export function TentangKami() {
  const disasterStats = [
    {
      id: 'solar_flare',
      title: 'Badai Matahari (Flare)',
      icon: IconFlame,
      color: 'text-red-600 bg-red-100 dark:bg-red-900/30 dark:text-red-400',
      case: 'Peristiwa Carrington 1859',
      stat: 'Ancaman Jaringan Listrik & Satelit',
    },
    {
      id: 'asteroid',
      title: 'Tabrakan Asteroid (NEO)',
      icon: IconAlertTriangle,
      color: 'text-blue-600 bg-blue-100 dark:bg-blue-900/30 dark:text-blue-400',
      case: 'Meteor Chelyabinsk 2013',
      stat: '30.000+ Objek Dekat Bumi Terpetakan',
    },
    {
      id: 'space_debris',
      title: 'Sampah Antariksa',
      icon: IconMountain,
      color: 'text-orange-600 bg-orange-100 dark:bg-orange-900/30 dark:text-orange-400',
      case: 'Sindrom Kessler',
      stat: '34.000+ Puing >10cm di Orbit',
    },
    {
      id: 'geomagnetik',
      title: 'Badai Geomagnetik',
      icon: IconWaveSine,
      color: 'text-teal-600 bg-teal-100 dark:bg-teal-900/30 dark:text-teal-400',
      case: 'G5 Extreme Storm (Mei 2024)',
      stat: 'Gangguan Navigasi GPS & Radio',
    },
    {
      id: 'radiasi',
      title: 'Radiasi Kosmik',
      icon: IconDroplet,
      color: 'text-purple-600 bg-purple-100 dark:bg-purple-900/30 dark:text-purple-400',
      case: 'Galactic Cosmic Rays (GCR)',
      stat: 'Ancaman Astronot & Misi Antariksa',
    }
  ];

  return (
    <div className="p-6 md:p-8 max-w-6xl mx-auto space-y-10 fade-in">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="text-sm font-bold text-red-600 dark:text-red-400 uppercase tracking-wider flex items-center justify-center gap-2">
          <IconAlertTriangle className="w-4 h-4" /> Mengapa Literasi Mitigasi Penting?
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight">
          Bumi: Mengarungi Lautan Kosmik yang Penuh Anomali
        </h1>
        <p className="text-slate-600 dark:text-slate-400">
          Dari badai matahari yang dapat melumpuhkan peradaban digital hingga ancaman tumbukan asteroid. Astromitigasi hadir untuk membangun kesadaran terhadap bahaya dari luar angkasa.
        </p>
      </div>

      {/* Grid Bencana */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {disasterStats.map((item) => (
          <div key={item.id} className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl p-6 hover:shadow-lg transition-shadow">
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${item.color}`}>
              <item.icon className="w-6 h-6" />
            </div>
            <h3 className={`text-lg font-bold mb-1 ${item.color.split(' ')[0]}`}>{item.title}</h3>
            <div className="text-sm font-semibold text-slate-900 dark:text-white">{item.case}</div>
            <div className="text-xs text-slate-500 mt-1">{item.stat}</div>
          </div>
        ))}
      </div>

      {/* Motivasi & Poin */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-blue-50 dark:bg-slate-900 border border-blue-100 dark:border-slate-800 rounded-2xl p-8">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Lebih dari Sekadar Teori</h2>
          <blockquote className="border-l-4 border-blue-600 pl-4 italic text-slate-700 dark:text-slate-300">
            "Ketergantungan manusia modern pada teknologi satelit dan listrik menjadikan kita sangat rentan terhadap cuaca ekstrem dari luar angkasa."
          </blockquote>
          <p className="text-sm text-slate-500">
            Pembelajaran mitigasi konvensional sering melupakan ancaman kosmik. Astromitigasi mengintegrasikan data real-time NASA agar masyarakat dapat menyimulasikan dan memantau anomali cuaca antariksa secara mandiri.
          </p>
        </div>
        <div className="space-y-4">
          <div className="flex items-start gap-4 bg-white dark:bg-slate-950 p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800">
            <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-lg text-green-600 dark:text-green-400 shrink-0">
              <IconCircleCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 dark:text-white text-sm">Disaster Data Center</h4>
              <p className="text-xs text-slate-500 mt-1">Data real-time untuk dianalisis, bukan data rekaan.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 bg-white dark:bg-slate-950 p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800">
            <div className="bg-purple-100 dark:bg-purple-900/30 p-2 rounded-lg text-purple-600 dark:text-purple-400 shrink-0">
              <IconPresentation className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 dark:text-white text-sm">AI Disaster Assistant</h4>
              <p className="text-xs text-slate-500 mt-1">Tutor personal AI yang mendampingi dan menjelaskan setiap anomali data kosmik.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
