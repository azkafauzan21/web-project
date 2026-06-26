import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff, KeyRound, Globe, ArrowLeft } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';

export function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState('siswa');

  const handleLogin = (e) => {
    e.preventDefault();
    // Dummy login action, redirect to dashboard
    navigate('/dashboard');
  };

  return (
    <div className="flex flex-col md:flex-row h-screen w-full bg-slate-900 overflow-hidden">
      {/* LEFT PANEL */}
      <div className="relative flex-1 flex flex-col justify-between p-8 md:p-12 lg:p-16 text-white overflow-hidden bg-slate-900">
        <div className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="relative z-10 flex flex-col gap-6 max-w-xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-600/20">
              <Globe className="w-5 h-5 text-white" />
            </div>
            <div className="text-xl font-bold tracking-tight text-white">Astro<span className="text-blue-400">Mitigasi</span></div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
            Mari menjelajah <em className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 not-italic">Kosmos</em><br/>dengan waspada.
          </h1>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed">
            Platform edukasi dan pemantauan Bencana Astronomi interaktif.<br/>
            Pelajari cuaca antariksa, pantau asteroid, dan simulasikan dampak.
          </p>
          
          <div className="flex gap-8 mt-4 border-l-2 border-slate-800 pl-6">
            <div className="flex flex-col">
              <div className="text-3xl font-black text-orange-400">3</div>
              <div className="text-xs text-slate-400 uppercase tracking-widest mt-1">Modul Edukasi E-DRA Aktif</div>
            </div>
            <div className="flex flex-col">
              <div className="text-3xl font-black text-blue-400">2</div>
              <div className="text-xs text-slate-400 uppercase tracking-widest mt-1">Simulator Bencana Ruang Angkasa</div>
            </div>
          </div>
          
          <div className="mt-8 p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm relative">
            <div className="text-sm text-slate-300 italic mb-2">
              "Kesiapan adalah senjata terbaik kita melawan ketidakpastian alam semesta."
            </div>
            <div className="text-xs font-bold text-slate-400">DLLS-GEMA Foundation</div>
          </div>
        </div>
        
        <div className="relative z-10 flex flex-col gap-6 mt-12">
          <div className="flex flex-wrap gap-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-800 text-slate-300 text-xs font-medium border border-slate-700"><Globe className="w-3 h-3"/> Cuaca Antariksa</div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-800 text-slate-300 text-xs font-medium border border-slate-700"><Globe className="w-3 h-3"/> Tracker Asteroid</div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-800 text-slate-300 text-xs font-medium border border-slate-700"><Globe className="w-3 h-3"/> Sampah Antariksa</div>
          </div>
          <button className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm w-max cursor-pointer bg-transparent border-none" onClick={() => navigate('/')}>
            <ArrowLeft className="w-4 h-4"/> Kembali ke Beranda
          </button>
        </div>
      </div>
      
      {/* RIGHT PANEL */}
      <div className="w-full md:w-[480px] lg:w-[540px] bg-white dark:bg-slate-950 flex flex-col justify-center p-8 md:p-12 shrink-0 relative z-20 shadow-2xl">
        <div className="w-full max-w-sm mx-auto">
          <div className="flex flex-col">
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-2 tracking-tight">Selamat Datang</h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm mb-8">Masuk untuk melanjutkan pembelajaran astromitigasi Anda.</p>
            
            <div className="flex p-1 bg-slate-100 dark:bg-slate-900 rounded-lg mb-8">
              <button 
                type="button" 
                className={`flex-1 py-2 text-sm font-semibold rounded-md transition-all ${role === 'siswa' ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm' : 'text-slate-500 dark:text-slate-400'}`}
                onClick={() => setRole('siswa')}
              >
                Pengguna Biasa
              </button>
              <button 
                type="button" 
                className={`flex-1 py-2 text-sm font-semibold rounded-md transition-all ${role === 'guru' ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm' : 'text-slate-500 dark:text-slate-400'}`}
                onClick={() => setRole('guru')}
              >
                Peneliti / Guru
              </button>
            </div>
            
            <form onSubmit={handleLogin}>
              <div className="flex flex-col gap-2 mb-5">
                <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Email / Username</label>
                <div className="relative flex items-center">
                  <input type="text" className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm dark:text-white" placeholder="contoh@astromitigasi.id" required />
                </div>
              </div>
              
              <div className="flex flex-col gap-2 mb-5">
                <div className="flex justify-between items-center text-sm font-bold text-slate-700 dark:text-slate-300">
                  <span>Password</span>
                  <a className="text-blue-600 dark:text-blue-400 font-semibold cursor-pointer hover:underline text-xs">Lupa password?</a>
                </div>
                <div className="relative flex items-center">
                  <input 
                    type={showPassword ? "text" : "password"} 
                    className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm dark:text-white" 
                    placeholder="Masukkan password Anda" 
                    required 
                  />
                  <button 
                    type="button" 
                    className="absolute right-3 p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 bg-transparent border-none cursor-pointer" 
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>
              
              <div className="flex items-center gap-2 mb-8">
                <input type="checkbox" id="remember" className="rounded border-slate-300" />
                <label htmlFor="remember" className="text-sm text-slate-600 dark:text-slate-400 cursor-pointer">Ingat saya di perangkat ini</label>
              </div>
              
              <Button type="submit" className="w-full">Masuk</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
