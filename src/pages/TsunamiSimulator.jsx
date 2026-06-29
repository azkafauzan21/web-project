import React, { useState, useEffect } from 'react';
import { IconActivity, IconArrowLeft, IconPlayerPlay, IconSquare, IconWaveSine } from '@tabler/icons-react';
import { Link } from 'react-router-dom';

export function TsunamiSimulator() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setTime(prev => (prev >= 100 ? 0 : prev + 1));
      }, 100);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <div className="w-full min-h-screen bg-slate-50 dark:bg-slate-950 p-6 md:p-8 pt-24">
      <div className="max-w-6xl mx-auto space-y-8 fade-in">
        <div className="flex items-center gap-4 mb-8">
          <Link to="/#modul" className="p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors">
            <IconArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Peta Simulasi Tsunami</h1>
            <p className="text-sm text-slate-500 dark:text-slate-400">Visualisasi komputasi perambatan gelombang (Konsep BROWNI - Galaz 2022)</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
              <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-6">Kontrol Simulasi</h2>
              
              <div className="space-y-6">
                <div>
                  <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 block mb-2">Magnitudo Gempa</label>
                  <input type="range" min="7" max="9.5" step="0.1" defaultValue="8.5" className="w-full" />
                  <div className="flex justify-between text-xs text-slate-500 mt-1"><span>Mw 7.0</span><span>Mw 9.5</span></div>
                </div>

                <div>
                  <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 block mb-2">Kedalaman (km)</label>
                  <input type="range" min="10" max="50" step="1" defaultValue="15" className="w-full" />
                  <div className="flex justify-between text-xs text-slate-500 mt-1"><span>10 km</span><span>50 km</span></div>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                  <button 
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="w-full py-3 rounded-lg flex items-center justify-center gap-2 font-bold text-white transition-colors bg-teal-600 hover:bg-teal-700"
                  >
                    {isPlaying ? <><IconSquare className="w-4 h-4"/> Hentikan Simulasi</> : <><IconPlayerPlay className="w-4 h-4"/> Mulai Simulasi</>}
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 shadow-sm text-sm text-slate-600 dark:text-slate-400">
              <strong className="text-slate-900 dark:text-white block mb-1">Catatan Referensi:</strong>
              Modul ini mengadopsi abstraksi dari paper Galaz dkk. (2022) tentang integrasi simulasi numerik tsunami (Shallow Water Equations) ke dalam klien web.
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="bg-slate-100 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 h-[600px] overflow-hidden relative shadow-inner">
              {/* Fake Map Background */}
              <div className="absolute inset-0 opacity-20 pointer-events-none" style={{
                backgroundImage: 'radial-gradient(circle at center, #64748b 1px, transparent 1px)',
                backgroundSize: '20px 20px'
              }}></div>
              
              {/* Epicenter */}
              <div className="absolute top-1/2 left-1/3 w-4 h-4 bg-red-500 rounded-full -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="absolute inset-0 bg-red-500 rounded-full animate-ping"></div>
                <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-red-900 text-red-100 text-[10px] font-bold px-2 py-0.5 rounded whitespace-nowrap">Episentrum</div>
              </div>

              {/* Tsunami IconWaveSine (Visualization based on time) */}
              {isPlaying && (
                <div 
                  className="absolute top-1/2 left-1/3 rounded-full border-4 border-teal-500/50 -translate-x-1/2 -translate-y-1/2 transition-all duration-100 ease-linear"
                  style={{ width: `${time * 10}px`, height: `${time * 10}px`, opacity: Math.max(0, 1 - time/100) }}
                ></div>
              )}
              {isPlaying && time > 20 && (
                <div 
                  className="absolute top-1/2 left-1/3 rounded-full border-4 border-teal-500/30 -translate-x-1/2 -translate-y-1/2 transition-all duration-100 ease-linear"
                  style={{ width: `${(time-20) * 10}px`, height: `${(time-20) * 10}px`, opacity: Math.max(0, 1 - (time-20)/100) }}
                ></div>
              )}

              {/* Coastline / Target */}
              <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-300 dark:bg-slate-800 border-l-4 border-emerald-500/30">
                <div className="p-8 text-slate-500 dark:text-slate-500 font-bold tracking-widest uppercase transform rotate-90 origin-top-left absolute left-10 top-1/3 opacity-50">Garis Pantai</div>
              </div>

              <div className="absolute bottom-4 left-4 bg-white/90 dark:bg-slate-950/90 backdrop-blur px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-800 flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <IconActivity className="w-4 h-4 text-teal-500" />
                  <span className="text-sm font-bold text-slate-900 dark:text-white">T + {(time * 0.5).toFixed(1)} menit</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
