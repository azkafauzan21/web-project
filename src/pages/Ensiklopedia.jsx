import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Zap, Skull, Satellite, Flame, Bolt, Search, Brain, PenTool, MessageCircle, ClipboardCheck, ChevronRight } from 'lucide-react';

const phases = [
  { id: 'engage', label: 'Engage', icon: Bolt },
  { id: 'discover', label: 'Discover', icon: Search },
  { id: 'reason', label: 'Reason', icon: Brain },
  { id: 'apply', label: 'Apply', icon: PenTool },
  { id: 'reflect', label: 'Reflection', icon: MessageCircle },
  { id: 'assess', label: 'Assessment', icon: ClipboardCheck }
];

export function Ensiklopedia() {
  const [activePhase, setActivePhase] = useState('engage');

  return (
    <div className="flex flex-col h-full bg-white dark:bg-slate-900">
      
      {/* PHASE HEADER BAR */}
      <nav className="flex items-center gap-2 overflow-x-auto p-4 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-sm hide-scroll sticky top-0 z-10" aria-label="Fase pembelajaran">
        {phases.map((phase, index) => {
          const isActive = activePhase === phase.id;
          return (
            <React.Fragment key={phase.id}>
              <div 
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-semibold cursor-pointer transition-colors whitespace-nowrap ${isActive ? 'bg-slate-800 text-white dark:bg-blue-600 shadow-md hover:bg-slate-900 dark:hover:bg-blue-700' : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'}`} 
                onClick={() => setActivePhase(phase.id)}
                role="button"
                tabIndex="0"
              >
                <phase.icon className="w-3.5 h-3.5" /> {phase.label}
              </div>
              {index < phases.length - 1 && <ChevronRight className="text-slate-300 dark:text-slate-600 shrink-0 w-4 h-4" />}
            </React.Fragment>
          );
        })}
      </nav>

      {/* PHASE CONTENT */}
      <main className="flex-1 overflow-y-auto bg-slate-50 dark:bg-slate-950">
        <div className="mx-auto max-w-4xl p-6">
          
          {activePhase === 'engage' && (
            <div className="animate-in fade-in duration-300">
              <div className="rounded-xl p-5 mb-6 flex items-start gap-4 border bg-red-50 border-red-200 dark:bg-red-900/10 dark:border-red-900/30">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 bg-red-100 dark:bg-red-900/50">
                  <Bolt className="w-6 h-6 text-red-600 dark:text-red-400" />
                </div>
                <div>
                  <div className="font-bold text-lg text-slate-800 dark:text-slate-100 mb-1">Engage — Membangun Kesadaran & Rasa Ingin Tahu</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">Video kasus nyata · Fakta mengejutkan · Polling awal untuk memetakan persepsi risiko benda jatuh dari antariksa.</div>
                </div>
              </div>
              <Card className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm rounded-xl p-5 mb-4">
                <h3 className="font-bold text-slate-800 dark:text-slate-200 mb-2">Video Pengantar (Dummy)</h3>
                <div className="bg-slate-900 rounded-xl aspect-video flex items-center justify-center relative overflow-hidden group cursor-pointer border border-slate-800">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur text-white flex items-center justify-center text-xl group-hover:bg-white/30 group-hover:scale-110 transition-all z-10">▶</div>
                  <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-black/80 to-transparent text-white text-sm font-bold z-10">Dampak Asteroid Chelyabinsk</div>
                </div>
              </Card>
            </div>
          )}

          {activePhase === 'discover' && (
            <div className="animate-in fade-in duration-300">
              <div className="rounded-xl p-5 mb-6 flex items-start gap-4 border bg-blue-50 border-blue-200 dark:bg-blue-900/10 dark:border-blue-900/30">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 bg-blue-100 dark:bg-blue-900/50">
                  <Search className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <div className="font-bold text-lg text-slate-800 dark:text-slate-100 mb-1">Discover — Eksplorasi Data & Konsep</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">Simulasi interaktif · Analisis data pengamatan astronomi nyata.</div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white dark:bg-slate-900 rounded-xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-center">
                  <div className="text-3xl font-black mb-1 tracking-tight text-blue-600 dark:text-blue-400">30,000+</div>
                  <div className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide leading-tight">Asteroid Dekat Bumi (NEA) Ditemukan</div>
                </div>
                <div className="bg-white dark:bg-slate-900 rounded-xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-center">
                  <div className="text-3xl font-black mb-1 tracking-tight text-purple-600 dark:text-purple-400">11 Tahun</div>
                  <div className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide leading-tight">Siklus Aktivitas Maksimum Matahari</div>
                </div>
              </div>
            </div>
          )}

          {activePhase === 'reason' && (
            <div className="animate-in fade-in duration-300">
              <div className="rounded-xl p-5 mb-6 flex items-start gap-4 border bg-purple-50 border-purple-200 dark:bg-purple-900/10 dark:border-purple-900/30">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 bg-purple-100 dark:bg-purple-900/50">
                  <Brain className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <div className="font-bold text-lg text-slate-800 dark:text-slate-100 mb-1">Reason — Berpikir Kritis & Menganalisis Risiko</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">Bedah mitos vs fakta · Diskusi skenario mitigasi.</div>
                </div>
              </div>
              <Card className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm rounded-xl p-5">
                <h3 className="font-bold text-slate-800 dark:text-slate-200 mb-2">Studi Kasus Skenario (Dummy)</h3>
                <div className="bg-orange-50 dark:bg-orange-900/10 border-l-4 border-orange-500 p-4 text-sm text-slate-700 dark:text-slate-300 rounded-r-lg">
                  <strong>Skenario X-Flare Kelas X40:</strong> Bagaimana jika CME menabrak kutub bumi dalam 2 jam? Tentukan prioritas pengamanan jaringan trafo.
                </div>
              </Card>
            </div>
          )}

          {(activePhase === 'apply' || activePhase === 'reflect' || activePhase === 'assess') && (
            <div className="animate-in fade-in duration-300">
              <Card className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm rounded-xl p-8 text-center">
                <div className="text-4xl mb-4">🚧</div>
                <h3 className="font-bold text-lg text-slate-800 dark:text-slate-200 mb-2">Fase {activePhase} (Dummy)</h3>
                <p className="text-slate-500 dark:text-slate-400">Konten interaktif untuk fase ini sedang dalam tahap pengembangan.</p>
              </Card>
            </div>
          )}

        </div>
      </main>
    </div>
  );
}
