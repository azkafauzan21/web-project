import React, { useState } from 'react';
import { Trophy, BookOpen, Clock, Target, ChevronRight, Flame, Rocket, AlertTriangle, ShieldCheck } from 'lucide-react';
import { Card } from '../components/ui/card';
import { OnboardingTour } from '../components/OnboardingTour';
import { useAuth } from '../contexts/AuthContext';
import { Link } from 'react-router-dom';

export function Dashboard() {
  const { user, loading } = useAuth();
  
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
    <div className="space-y-6 max-w-6xl mx-auto">
      
      {showTour && <OnboardingTour onComplete={() => setShowTour(false)} />}
      
      {/* WELCOME BANNER DLLS-GEMA STYLE */}
      <div className="bg-slate-900 dark:bg-slate-950 rounded-2xl p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xl relative overflow-hidden border border-slate-800">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 opacity-10">
          <Rocket className="w-64 h-64 text-white" />
        </div>
        <div className="flex flex-col gap-2 relative z-10">
          <div className="text-2xl md:text-3xl font-bold text-white tracking-tight">Halo, {user?.first_name || 'Kadet Antariksa'}! 👋</div>
          <div className="text-sm md:text-base text-slate-400 max-w-2xl leading-relaxed">
            Selamat datang kembali di Pusat Komando Astromitigasi DLLS. Lanjutkan misi edukasimu untuk memahami cuaca antariksa, pantauan asteroid, dan mitigasi bahaya luar angkasa.
          </div>
          <div className="mt-4">
            <Link to="/modul-lms" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20">
              Lanjutkan Misi <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        
        {/* STREAK CARD */}
        <div className="md:col-span-5">
          <Card className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 flex flex-col justify-center h-full shadow-sm">
            <div className="flex items-center gap-5 mb-5">
              <div className="w-16 h-16 rounded-2xl bg-orange-50 dark:bg-orange-500/10 flex items-center justify-center shrink-0">
                <Flame className="w-8 h-8 text-orange-500" />
              </div>
              <div>
                <div className="text-4xl font-black text-slate-900 dark:text-white tracking-tighter">0<span className="text-xl text-slate-500 ml-1 font-bold">Hari</span></div>
                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mt-1">Runtunan Belajar</div>
              </div>
            </div>
            
            <div className="flex items-center justify-between gap-1 w-full mt-auto">
              {['S', 'S', 'R', 'K', 'J', 'S', 'M'].map((day, i) => (
                <div key={i} className="flex flex-col items-center gap-1.5">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-400">
                    {day}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* MAIN STATISTIC CARDS */}
        <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Card className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm flex flex-col justify-center border-l-4 border-l-blue-500">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center">
                <BookOpen className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Modul Selesai</div>
            </div>
            <div className="text-3xl font-bold text-slate-900 dark:text-white">0<span className="text-sm font-medium text-slate-500 ml-2">/ 12 Modul</span></div>
          </Card>
          
          <Card className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm flex flex-col justify-center border-l-4 border-l-green-500">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-green-50 dark:bg-green-500/10 flex items-center justify-center">
                <Target className="w-4 h-4 text-green-600 dark:text-green-400" />
              </div>
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Skor Rata-rata</div>
            </div>
            <div className="text-3xl font-bold text-slate-900 dark:text-white">0%</div>
          </Card>
          
          <Card className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm flex flex-col justify-center border-l-4 border-l-red-500">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-red-50 dark:bg-red-500/10 flex items-center justify-center">
                <AlertTriangle className="w-4 h-4 text-red-600 dark:text-red-400" />
              </div>
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Ancaman Aktif</div>
            </div>
            <div className="text-3xl font-bold text-slate-900 dark:text-white">3<span className="text-sm font-medium text-slate-500 ml-2">Peringatan</span></div>
          </Card>

          <Card className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm flex flex-col justify-center border-l-4 border-l-teal-500">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-teal-50 dark:bg-teal-500/10 flex items-center justify-center">
                <ShieldCheck className="w-4 h-4 text-teal-600 dark:text-teal-400" />
              </div>
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Status Keamanan</div>
            </div>
            <div className="text-lg font-bold text-teal-600 dark:text-teal-400">NORMAL</div>
          </Card>
        </div>
      </div>

      {/* ACTIVITY FEED & MODULES */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm rounded-2xl p-6">
          <div className="text-sm font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wide mb-6 flex items-center gap-2">
            <Clock className="w-4 h-4 text-slate-400" /> Riwayat Aktivitas
          </div>
          <div className="flex flex-col items-center justify-center py-10 text-center">
            <div className="w-16 h-16 bg-slate-50 dark:bg-slate-800/50 rounded-full flex items-center justify-center text-slate-300 mb-4">
              <Clock className="w-8 h-8" />
            </div>
            <div className="text-sm font-bold text-slate-600 dark:text-slate-300">Belum ada aktivitas</div>
            <div className="text-xs text-slate-500 mt-2">Data aktivitas misi dan belajarmu akan muncul di sini.</div>
          </div>
        </Card>

        <Card className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm rounded-2xl p-6">
          <div className="text-sm font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wide mb-6 flex items-center gap-2">
            <Trophy className="w-4 h-4 text-slate-400" /> Pencapaian Terbaru
          </div>
          <div className="flex flex-col items-center justify-center py-10 text-center">
            <div className="w-16 h-16 bg-slate-50 dark:bg-slate-800/50 rounded-full flex items-center justify-center text-slate-300 mb-4">
              <Trophy className="w-8 h-8" />
            </div>
            <div className="text-sm font-bold text-slate-600 dark:text-slate-300">Belum ada lencana</div>
            <div className="text-xs text-slate-500 mt-2">Selesaikan misi dan modul untuk mendapatkan lencana khusus.</div>
          </div>
        </Card>
      </div>

    </div>
  );
}
