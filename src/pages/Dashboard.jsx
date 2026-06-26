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
            <div className="text-5xl shrink-0">🌱</div>
            <div>
              <div className="text-3xl font-extrabold text-white tracking-tight">0 Hari</div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Runtunan Belajar</div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold bg-slate-800 text-slate-500">S</div>
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold bg-slate-800 text-slate-500">S</div>
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold bg-slate-800 text-slate-500">R</div>
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
                <div className="h-full rounded-full bg-slate-300 dark:bg-slate-700" style={{ width: '0%' }}></div>
              </div>
              <div className="w-10 text-right text-xs font-bold text-slate-400">0%</div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-32 text-xs font-semibold text-slate-700 dark:text-slate-300 truncate">Asteroid</div>
              <div className="flex-1 h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full rounded-full bg-slate-300 dark:bg-slate-700" style={{ width: '0%' }}></div>
              </div>
              <div className="w-10 text-right text-xs font-bold text-slate-400">0%</div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-32 text-xs font-semibold text-slate-700 dark:text-slate-300 truncate">Sampah Antariksa</div>
              <div className="flex-1 h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full rounded-full bg-slate-300 dark:bg-slate-700" style={{ width: '0%' }}></div>
              </div>
              <div className="w-10 text-right text-xs font-bold text-slate-400">0%</div>
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
          <div className="flex flex-col items-center justify-center py-6 text-center">
            <div className="w-12 h-12 bg-slate-50 dark:bg-slate-800/50 rounded-full flex items-center justify-center text-slate-400 mb-3">
              <Clock className="w-6 h-6" />
            </div>
            <div className="text-sm font-medium text-slate-600 dark:text-slate-400">Belum ada aktivitas</div>
            <div className="text-xs text-slate-400 dark:text-slate-500 mt-1">Mulai pelajari modul pertamamu!</div>
          </div>
        </Card>

        <Card className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm rounded-xl p-5">
          <div className="text-sm font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wide mb-4 flex items-center gap-2">
            <Trophy className="w-4 h-4" /> Pencapaian Terbaru
          </div>
          <div className="flex flex-col items-center justify-center py-6 text-center">
            <div className="w-12 h-12 bg-slate-50 dark:bg-slate-800/50 rounded-full flex items-center justify-center text-slate-400 mb-3">
              <Trophy className="w-6 h-6" />
            </div>
            <div className="text-sm font-medium text-slate-600 dark:text-slate-400">Belum ada pencapaian</div>
            <div className="text-xs text-slate-400 dark:text-slate-500 mt-1">Selesaikan modul untuk mendapatkan lencana.</div>
          </div>
        </Card>
      </div>

    </div>
  );
}
