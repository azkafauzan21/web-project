import React, { useState } from 'react';
import { Trophy, BookOpen, Clock, Zap, Target, Star, ChevronRight } from 'lucide-react';
import { Card } from '../components/ui/card';
import { OnboardingTour } from '../components/OnboardingTour';
import { useAuth } from '../contexts/AuthContext';

export function Dashboard() {
  const { user, loading } = useAuth();
  
  // Tampilkan tour hanya jika user sudah di-load, ada user, dan astronomy_knowledge_level-nya belum ada
  const [showTour, setShowTour] = useState(false);

  React.useEffect(() => {
    if (user && !user.astronomy_knowledge_level) {
      setShowTour(true);
    } else {
      setShowTour(false);
    }
  }, [user]);

  if (loading) {
    return <div className="flex h-screen items-center justify-center text-slate-500">Memuat data...</div>;
  }

  return (
    <div className="space-y-6">
      
      {showTour && <OnboardingTour onComplete={() => setShowTour(false)} />}
      
      {/* WELCOME BANNER */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 text-white shadow-lg shadow-blue-600/20">
        <div className="flex flex-col gap-1">
          <div className="text-xl md:text-2xl font-bold">Halo, {user?.first_name || 'Penjelajah'}! 👋</div>
          <div className="text-sm text-blue-100 max-w-xl leading-relaxed">
            Selamat datang kembali di Pusat Komando Astromitigasi. Lanjutkan misi edukasimu dan pantau kondisi antariksa terkini.
          </div>
        </div>
        <button className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-white text-blue-700 font-bold rounded-lg hover:bg-blue-50 transition-colors shadow-sm whitespace-nowrap">
          Mulai Modul <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        
        {/* STREAK CARD */}
        <div className="md:col-span-2">
          <div className="bg-slate-900 dark:bg-slate-950 rounded-xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-6 shadow-xl relative overflow-hidden w-full h-full">
            <div className="text-5xl shrink-0">🔥</div>
            <div>
              <div className="text-3xl font-extrabold text-white tracking-tight">3 Hari</div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Runtunan Belajar</div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold bg-orange-500/20 text-orange-500">S</div>
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold bg-orange-500/20 text-orange-500">S</div>
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold bg-orange-500 text-white ring-2 ring-orange-500/50 ring-offset-2 ring-offset-slate-900">R</div>
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold bg-slate-800 text-slate-500">K</div>
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold bg-slate-800 text-slate-500">J</div>
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold bg-slate-800 text-slate-500">S</div>
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold bg-slate-800 text-slate-500">M</div>
              </div>
            </div>
          </div>
        </div>

        {/* LITERASI CHART (Topic Bars) */}
        <Card className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm rounded-xl p-5">
          <div className="text-sm font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wide mb-4 flex items-center gap-2">
            <Target className="w-4 h-4" /> Skor Literasi
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-32 text-xs font-semibold text-slate-700 dark:text-slate-300 truncate">Cuaca Antariksa</div>
              <div className="flex-1 h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full rounded-full bg-blue-500" style={{ width: '75%' }}></div>
              </div>
              <div className="w-10 text-right text-xs font-bold text-blue-500">75%</div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-32 text-xs font-semibold text-slate-700 dark:text-slate-300 truncate">Asteroid</div>
              <div className="flex-1 h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full rounded-full bg-orange-500" style={{ width: '40%' }}></div>
              </div>
              <div className="w-10 text-right text-xs font-bold text-orange-500">40%</div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-32 text-xs font-semibold text-slate-700 dark:text-slate-300 truncate">Sampah Antariksa</div>
              <div className="flex-1 h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full rounded-full bg-purple-500" style={{ width: '15%' }}></div>
              </div>
              <div className="w-10 text-right text-xs font-bold text-purple-500">15%</div>
            </div>
          </div>
        </Card>
      </div>

      {/* ACTIVITY FEED & MODULES */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm rounded-xl p-5">
          <div className="text-sm font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wide mb-4 flex items-center gap-2">
            <Clock className="w-4 h-4" /> Riwayat Aktivitas
          </div>
          <div className="space-y-1">
            <div className="flex items-start gap-3 p-2 -mx-2 hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-lg transition-colors">
              <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400"><Star className="w-4 h-4"/></div>
              <div className="flex flex-col gap-0.5 mt-0.5">
                <div className="text-sm font-medium text-slate-800 dark:text-slate-200">Menyelesaikan Kuis Cuaca Antariksa</div>
                <div className="text-[10px] text-slate-500 dark:text-slate-400">2 jam yang lalu</div>
              </div>
            </div>
            <div className="flex items-start gap-3 p-2 -mx-2 hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-lg transition-colors">
              <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"><BookOpen className="w-4 h-4"/></div>
              <div className="flex flex-col gap-0.5 mt-0.5">
                <div className="text-sm font-medium text-slate-800 dark:text-slate-200">Membaca modul "Siklus Matahari"</div>
                <div className="text-[10px] text-slate-500 dark:text-slate-400">Kemarin</div>
              </div>
            </div>
            <div className="flex items-start gap-3 p-2 -mx-2 hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-lg transition-colors">
              <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400"><Zap className="w-4 h-4"/></div>
              <div className="flex flex-col gap-0.5 mt-0.5">
                <div className="text-sm font-medium text-slate-800 dark:text-slate-200">Memantau aktivitas CME di dasbor</div>
                <div className="text-[10px] text-slate-500 dark:text-slate-400">2 hari yang lalu</div>
              </div>
            </div>
          </div>
        </Card>

        <Card className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm rounded-xl p-5">
          <div className="text-sm font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wide mb-4 flex items-center gap-2">
            <Trophy className="w-4 h-4" /> Pencapaian Terbaru
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="border border-slate-200 dark:border-slate-800 rounded-lg p-3 flex flex-col gap-1.5 hover:border-blue-300 dark:hover:border-blue-700/50 hover:bg-blue-50/50 dark:hover:bg-blue-900/10 transition-colors">
              <div className="text-2xl">🔭</div>
              <div className="text-xs font-bold text-slate-900 dark:text-white">Pengamat Pemula</div>
              <div className="text-[10px] text-slate-500 dark:text-slate-400">Pantau 5 objek NEA</div>
            </div>
            <div className="border border-slate-200 dark:border-slate-800 rounded-lg p-3 flex flex-col gap-1.5 hover:border-blue-300 dark:hover:border-blue-700/50 hover:bg-blue-50/50 dark:hover:bg-blue-900/10 transition-all opacity-50 grayscale hover:grayscale-0 hover:opacity-100">
              <div className="text-2xl">☀️</div>
              <div className="text-xs font-bold text-slate-900 dark:text-white">Pakar Badai</div>
              <div className="text-[10px] text-slate-500 dark:text-slate-400">Analisa kelas X-Flare</div>
            </div>
          </div>
        </Card>
      </div>

    </div>
  );
}
