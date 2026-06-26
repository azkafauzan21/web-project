import React from 'react';
import { AlertTriangle, Flame, Waves, Mountain, Droplets, BookOpen, Presentation, CheckCircle } from 'lucide-react';

export function TentangKami() {
  const disasterStats = [
    {
      id: 'gempa',
      title: 'Gempa Bumi',
      icon: AlertTriangle,
      color: 'text-red-600 bg-red-100 dark:bg-red-900/30 dark:text-red-400',
      case: 'Sesar Lembang & Megathrust',
      stat: '500+ Sesar Aktif Terpetakan',
    },
    {
      id: 'tsunami',
      title: 'Tsunami',
      icon: Waves,
      color: 'text-blue-600 bg-blue-100 dark:bg-blue-900/30 dark:text-blue-400',
      case: 'Tsunami Palu 2018',
      stat: '4.340 korban jiwa',
    },
    {
      id: 'vulkan',
      title: 'Vulkanologi',
      icon: Flame,
      color: 'text-orange-600 bg-orange-100 dark:bg-orange-900/30 dark:text-orange-400',
      case: '127 Gunung Api Aktif',
      stat: 'Ring of Fire',
    },
    {
      id: 'banjir',
      title: 'Cuaca Ekstrem',
      icon: Droplets,
      color: 'text-teal-600 bg-teal-100 dark:bg-teal-900/30 dark:text-teal-400',
      case: 'Solar Flare & Badai Magnetik',
      stat: 'Ancaman Jaringan Listrik Global',
    },
    {
      id: 'longsor',
      title: 'Sampah Antariksa',
      icon: Mountain,
      color: 'text-purple-600 bg-purple-100 dark:bg-purple-900/30 dark:text-purple-400',
      case: 'Kessler Syndrome',
      stat: 'Ribuan Puing di Orbit Rendah',
    }
  ];

  return (
    <div className="p-6 md:p-8 max-w-6xl mx-auto space-y-10 fade-in">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="text-sm font-bold text-red-600 dark:text-red-400 uppercase tracking-wider flex items-center justify-center gap-2">
          <AlertTriangle className="w-4 h-4" /> Mengapa Literasi Mitigasi Penting?
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight">
          Indonesia: Negara Paling Rawan Bencana ke-3 di Dunia
        </h1>
        <p className="text-slate-600 dark:text-slate-400">
          Platform Astromitigasi dirancang untuk memperluas cakrawala mitigasi kita, dari ancaman di Bumi hingga ancaman kosmik dari luar angkasa.
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
            "Tingkat literasi bencana masih tergolong rendah, bahkan pada mereka yang pernah mengalami bencana secara langsung."
          </blockquote>
          <p className="text-sm text-slate-500">
            Pembelajaran konseptual tidak cukup. Astromitigasi mengintegrasikan data real-time NASA & BMKG agar masyarakat dapat memantau ancaman secara mandiri menggunakan teknologi AI terkini.
          </p>
        </div>
        <div className="space-y-4">
          <div className="flex items-start gap-4 bg-white dark:bg-slate-950 p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800">
            <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-lg text-green-600 dark:text-green-400 shrink-0">
              <CheckCircle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 dark:text-white text-sm">Disaster Data Center</h4>
              <p className="text-xs text-slate-500 mt-1">Data real-time untuk dianalisis, bukan data rekaan.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 bg-white dark:bg-slate-950 p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800">
            <div className="bg-purple-100 dark:bg-purple-900/30 p-2 rounded-lg text-purple-600 dark:text-purple-400 shrink-0">
              <Presentation className="w-5 h-5" />
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
