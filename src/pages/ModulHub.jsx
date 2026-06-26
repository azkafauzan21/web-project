import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Sun, Radar, Satellite, Lock } from 'lucide-react';

export function ModulHub() {
  const navigate = useNavigate();

  const modules = [
    {
      id: 'space-weather',
      title: 'Cuaca Antariksa',
      description: 'Pantau aktivitas matahari, flare, dan badai geomagnetik secara real-time.',
      icon: Sun,
      path: '/space-weather',
      color: 'bg-orange-50 text-orange-600 border-orange-200 dark:bg-orange-900/20 dark:border-orange-800',
      isLocked: false
    },
    {
      id: 'tracker',
      title: 'CNEOS Tracker',
      description: 'Lacak posisi asteroid (NEO) yang berada di dekat Bumi dan simulasikan orbitnya.',
      icon: Radar,
      path: '/tracker',
      color: 'bg-blue-50 text-blue-600 border-blue-200 dark:bg-blue-900/20 dark:border-blue-800',
      isLocked: false
    },
    {
      id: 'space-debris',
      title: 'Sampah Antariksa',
      description: 'Peta persebaran puing-puing satelit dan objek buatan manusia di orbit rendah Bumi.',
      icon: Satellite,
      path: '/space-debris',
      color: 'bg-slate-50 text-slate-600 border-slate-200 dark:bg-slate-800/50 dark:border-slate-700',
      isLocked: false
    },
    {
      id: 'ancaman-eksotis',
      title: 'Ancaman Eksotis',
      description: 'Materi lanjutan mengenai supernova, sinar gamma, dan anomali kosmik lainnya.',
      icon: Lock,
      path: '#',
      color: 'bg-slate-50 text-slate-400 border-slate-200 dark:bg-slate-900/50 dark:border-slate-800',
      isLocked: true
    }
  ];

  return (
    <div className="p-6 md:p-8 max-w-6xl mx-auto space-y-8 fade-in">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Modul Edukasi & Pemantauan</h1>
        <p className="text-slate-600 dark:text-slate-400 text-sm">
          Pilih modul di bawah ini untuk mengakses simulator pemantauan atau membaca materi literasi mitigasi bencana antariksa.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {modules.map((mod) => (
          <div 
            key={mod.id}
            onClick={() => !mod.isLocked && navigate(mod.path)}
            className={`border rounded-xl p-6 transition-all duration-300 ${
              mod.isLocked 
                ? 'opacity-70 cursor-not-allowed bg-slate-50/50 dark:bg-slate-900/20 border-slate-200 dark:border-slate-800' 
                : 'bg-white dark:bg-slate-950 border-slate-200 dark:border-slate-800 hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-700 cursor-pointer group'
            }`}
          >
            <div className="flex items-start gap-5">
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center shrink-0 border ${mod.color}`}>
                <mod.icon className="w-7 h-7" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1.5">
                  <h2 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {mod.title}
                  </h2>
                  {mod.id === 'space-weather' && (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400">HOT</span>
                  )}
                  {mod.isLocked && (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-200 text-slate-600 dark:bg-slate-800 dark:text-slate-400">LOCKED</span>
                  )}
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {mod.description}
                </p>
              </div>
            </div>
            
            {!mod.isLocked && (
              <div className="mt-6 flex justify-end">
                <button className="text-sm font-semibold text-blue-600 dark:text-blue-400 group-hover:underline flex items-center gap-1">
                  Buka Modul &rarr;
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
