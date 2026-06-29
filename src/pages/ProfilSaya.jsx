import React from 'react';
import { User, Settings, Edit, GraduationCap, MapPin, Activity, Mail } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

export function ProfilSaya() {
  const { user } = useAuth();
  const userName = user ? `${user.first_name} ${user.last_name || ''}`.trim() : 'Penjelajah';
  const initials = userName !== 'Penjelajah' ? userName.substring(0, 2).toUpperCase() : 'RZ';
  const email = user ? user.email : 'explorer@astromitigasi.edu';

  return (
    <div className="p-4 md:p-6 max-w-5xl mx-auto space-y-4 fade-in font-sans">
      <div className="mb-4">
        <h1 className="text-lg md:text-xl font-extrabold text-brand-navy mb-1">Profil Saya</h1>
        <p className="text-xs md:text-sm text-brand-slate2">Informasi akun dan preferensi belajar Astromitigasi.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Informasi Akun */}
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
          <div className="flex items-center gap-2 text-sm font-bold text-brand-navy mb-4">
            <User className="w-4 h-4 text-brand-blue" /> Informasi Akun
          </div>
          
          <div className="flex items-center gap-4 mb-5">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-brand-blue to-brand-purple flex items-center justify-center text-xl font-bold text-white shrink-0 shadow-sm">
              {initials}
            </div>
            <div>
              <div className="text-base font-bold text-brand-navy">{userName}</div>
              <div className="text-xs text-brand-slate2 mb-1">{email}</div>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold bg-brand-blue/10 text-brand-blue">
                Siswa Astronomi
              </span>
            </div>
          </div>
          
          <div className="space-y-3">
            <div className="flex justify-between items-center py-2 border-b border-slate-100 text-xs">
              <span className="text-brand-slate2 flex items-center gap-1.5"><GraduationCap className="w-3.5 h-3.5" /> Institusi</span>
              <span className="font-semibold text-brand-navy">Sekolah Antariksa Nasional</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-slate-100 text-xs">
              <span className="text-brand-slate2 flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> Asal Daerah</span>
              <span className="font-semibold text-brand-navy">Jawa Barat</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-slate-100 text-xs">
              <span className="text-brand-slate2 flex items-center gap-1.5"><Activity className="w-3.5 h-3.5" /> Status</span>
              <span className="font-semibold text-brand-green">Aktif</span>
            </div>
            <div className="flex justify-between items-center py-2 text-xs">
              <span className="text-brand-slate2 flex items-center gap-1.5"><Mail className="w-3.5 h-3.5" /> Bergabung Sejak</span>
              <span className="font-semibold text-brand-navy">2026</span>
            </div>
          </div>
        </div>

        {/* Preferensi Belajar */}
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
          <div className="flex items-center gap-2 text-sm font-bold text-brand-navy mb-4">
            <Settings className="w-4 h-4 text-brand-slate" /> Preferensi Belajar & Sistem
          </div>
          
          <div className="space-y-3">
            <div className="flex justify-between items-center py-2 border-b border-slate-100 text-xs">
              <span className="text-brand-slate2">Gaya Belajar (VARK)</span>
              <span className="inline-flex px-2 py-0.5 rounded text-[10px] font-bold bg-brand-purple/10 text-brand-purple">
                Visual & Kinesthetic
              </span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-slate-100 text-xs">
              <span className="text-brand-slate2">Tingkat Minat Bencana</span>
              <span className="font-semibold text-brand-navy">Asteroid & Cuaca Antariksa</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-slate-100 text-xs">
              <span className="text-brand-slate2">Notifikasi Orbit NEO</span>
              <span className="inline-flex px-2 py-0.5 rounded text-[10px] font-bold bg-brand-green/10 text-brand-green">
                Aktif
              </span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-slate-100 text-xs">
              <span className="text-brand-slate2">Tema Aplikasi</span>
              <span className="font-semibold text-brand-navy">Terang (Default)</span>
            </div>
            <div className="flex justify-between items-center py-2 text-xs">
              <span className="text-brand-slate2">Bahasa</span>
              <span className="font-semibold text-brand-navy">Bahasa Indonesia</span>
            </div>
          </div>
          
          <button 
            type="button" 
            className="mt-5 w-full py-2 bg-brand-bg hover:bg-slate-100 border border-slate-200 rounded-xl text-xs font-semibold text-brand-navy flex items-center justify-center gap-2 transition-colors"
            onClick={() => alert('Edit profil akan tersedia di versi selanjutnya.')}
          >
            <Edit className="w-4 h-4" /> Edit Profil
          </button>
        </div>
      </div>
    </div>
  );
}
