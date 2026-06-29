import React, { useState } from 'react';
import { IconBolt, IconBook, IconClipboardList, IconLayout, IconRobot, IconRocket, IconTarget, IconUser } from '@tabler/icons-react';
import { Card } from './ui/card';
import { useAuth } from '../contexts/AuthContext';
import { toast } from 'react-hot-toast';

export function OnboardingTour({ onComplete }) {
  const { user, token, updateUser } = useAuth();
  const [step, setStep] = useState(1);
  const [astronomyKnowledge, setAstronomyKnowledge] = useState('Pemula (Belum tahu banyak)');
  const [isSaving, setIsSaving] = useState(false);
  const [preTestAnswer, setPreTestAnswer] = useState('');

  const steps = [
    { id: 1, icon: IconUser, label: 'Profil Belajar' },
    { id: 2, icon: IconLayout, label: 'Orientasi LMS' },
    { id: 3, icon: IconClipboardList, label: 'Pre-test Diagnostik' },
    { id: 4, icon: IconRocket, label: 'Mulai' }
  ];

  return (
    <div className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto flex flex-col">
        
        {/* Header */}
        <div className="p-5 border-b bg-slate-50 flex items-center justify-between sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white">
              <IconRocket className="w-4 h-4" />
            </div>
            <div className="font-bold text-slate-800">Astromitigasi Onboarding</div>
          </div>
          <div className="text-xs font-semibold px-3 py-1 bg-slate-200 text-slate-600 rounded-full">
            Langkah {step} dari 4
          </div>
        </div>

        {/* Stepper */}
        <div className="px-6 pt-6 pb-2">
          <div className="flex items-start justify-between relative max-w-md mx-auto">
            <div className="absolute top-4 left-0 right-0 h-[2px] bg-slate-200 -z-10"></div>
            {steps.map((s, idx) => {
              const isActive = step === s.id;
              const isDone = step > s.id;
              return (
                <div key={s.id} className="flex flex-col items-center gap-2 bg-white px-2">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${isActive ? 'bg-blue-600 text-white shadow-[0_0_0_3px_#BFDBFE]' : isDone ? 'bg-green-600 text-white' : 'bg-white border-2 border-slate-200 text-slate-400'}`}>
                    <s.icon className="w-4 h-4" />
                  </div>
                  <div className={`text-[10px] font-semibold text-center w-16 leading-tight ${isActive ? 'text-blue-600' : isDone ? 'text-green-600' : 'text-slate-400'}`}>
                    {s.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Content Area */}
        <div className="p-6 flex-1">
          {step === 1 && (
            <div className="animate-in fade-in slide-in-from-right-4 duration-300">
              <h2 className="text-xl font-bold text-slate-800 mb-2">Lengkapi Profil Astromitigasi Anda</h2>
              <p className="text-sm text-slate-500 mb-6">Informasi ini membantu ASTRO AI merekomendasikan simulasi yang sesuai dengan tingkat pemahaman Anda.</p>
              
              <div className="bg-blue-50 border border-blue-100 p-4 rounded-xl flex gap-4 mb-6">
                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white shrink-0">
                  <IconRobot className="w-5 h-5" />
                </div>
                <p className="text-xs text-blue-900 leading-relaxed">
                  Halo! Saya <strong>ASTRO AI</strong>. Lengkapi data ini agar saya bisa merancang materi tentang Cuaca Antariksa, Asteroid, atau Sampah Antariksa sesuai dengan kebutuhan dan minat Anda.
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">Nama Lengkap</label>
                  <input 
                    type="text" 
                    className="w-full px-3 py-2 border rounded-lg text-sm bg-slate-50 text-slate-500 cursor-not-allowed outline-none" 
                    value={`${user?.first_name || ''} ${user?.last_name || ''}`.trim()} 
                    readOnly 
                  />
                  <p className="text-[10px] text-slate-400 mt-1">*Nama diambil otomatis dari profil Anda.</p>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">Tingkat Pengetahuan Astronomi</label>
                  <select 
                    className="w-full px-3 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                    value={astronomyKnowledge}
                    onChange={(e) => setAstronomyKnowledge(e.target.value)}
                  >
                    <option value="Pemula (Belum tahu banyak)">Pemula (Belum tahu banyak)</option>
                    <option value="Menengah (Suka baca artikel/nonton sci-fi)">Menengah (Suka baca artikel/nonton sci-fi)</option>
                    <option value="Ahli (Mahasiswa/Lulusan Astronomi)">Ahli (Mahasiswa/Lulusan Astronomi)</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="animate-in fade-in slide-in-from-right-4 duration-300 py-4">
              <div className="text-center mb-6">
                <div className="inline-flex w-12 h-12 rounded-full bg-blue-100 text-blue-600 items-center justify-center mb-4">
                  <IconLayout className="w-6 h-6" />
                </div>
                <h2 className="text-xl font-bold text-slate-800 mb-2">Kenali Pusat Komando Anda</h2>
                <p className="text-sm text-slate-500">Platform Astromitigasi dilengkapi dengan alat untuk memantau dan mempelajari ancaman kosmis.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 border rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors">
                  <IconBook className="w-6 h-6 text-indigo-500 mb-2" />
                  <h3 className="font-bold text-sm text-slate-800 mb-1">Modul Belajar</h3>
                  <p className="text-xs text-slate-500">Pelajari dari dasar hingga ahli tentang objek luar angkasa.</p>
                </div>
                <div className="p-4 border rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors">
                  <IconBolt className="w-6 h-6 text-amber-500 mb-2" />
                  <h3 className="font-bold text-sm text-slate-800 mb-1">Pantau NEO</h3>
                  <p className="text-xs text-slate-500">Data *Near-Earth Objects* (NEO) langsung dari API NASA.</p>
                </div>
                <div className="p-4 border rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors">
                  <IconTarget className="w-6 h-6 text-red-500 mb-2" />
                  <h3 className="font-bold text-sm text-slate-800 mb-1">Simulasi & Quiz</h3>
                  <p className="text-xs text-slate-500">Uji pengetahuan Anda dan simulasikan dampak mitigasi.</p>
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="animate-in fade-in slide-in-from-right-4 duration-300 py-4">
              <div className="text-center mb-6">
                <div className="inline-flex w-12 h-12 rounded-full bg-purple-100 text-purple-600 items-center justify-center mb-4">
                  <IconClipboardList className="w-6 h-6" />
                </div>
                <h2 className="text-xl font-bold text-slate-800 mb-2">Pre-test Singkat</h2>
                <p className="text-sm text-slate-500">Untuk menyesuaikan kurikulum Anda, objek kosmis mana yang paling Anda khawatirkan?</p>
              </div>
              <div className="space-y-3">
                {['Asteroid / Meteor (Batu ruang angkasa)', 'Badai Matahari (Solar Flare)', 'Supernova (Ledakan bintang)', 'Saya belum tahu apa-apa'].map((option) => (
                  <label key={option} className={`flex items-center p-4 border rounded-xl cursor-pointer transition-all ${preTestAnswer === option ? 'border-purple-500 bg-purple-50 ring-2 ring-purple-200' : 'hover:bg-slate-50'}`}>
                    <input 
                      type="radio" 
                      name="pretest" 
                      className="w-4 h-4 text-purple-600 focus:ring-purple-500 border-gray-300" 
                      value={option}
                      checked={preTestAnswer === option}
                      onChange={(e) => setPreTestAnswer(e.target.value)}
                    />
                    <span className="ml-3 text-sm font-medium text-slate-700">{option}</span>
                  </label>
                ))}
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="animate-in fade-in slide-in-from-right-4 duration-300 text-center py-10">
              <div className="relative inline-block mb-6">
                <div className="absolute inset-0 bg-blue-400 blur-xl opacity-30 rounded-full"></div>
                <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white shadow-lg mx-auto">
                  <IconRocket className="w-10 h-10" />
                </div>
              </div>
              <h2 className="text-2xl font-bold text-slate-800 mb-3">Semua Sistem Siap!</h2>
              <p className="text-sm text-slate-500 max-w-sm mx-auto mb-6">
                Data profil Anda telah kami kumpulkan. Kami siap memandu Anda menjadi agen Astromitigasi yang andal.
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 text-green-700 rounded-lg text-sm font-medium border border-green-200">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                Koneksi ke server NASA stabil
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="p-4 border-t bg-slate-50 flex justify-end gap-3 rounded-b-xl sticky bottom-0">
          {step > 1 && (
            <button 
              className="px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-200 rounded-lg transition-colors"
              onClick={() => setStep(step - 1)}
              disabled={isSaving}
            >
              Kembali
            </button>
          )}
          {step < 4 ? (
            <button 
              className="px-6 py-2 text-sm font-bold bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors shadow-md shadow-blue-500/20"
              onClick={() => setStep(step + 1)}
              disabled={isSaving}
            >
              Lanjut
            </button>
          ) : (
            <button 
              className="px-6 py-2 text-sm font-bold bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors shadow-md shadow-green-500/20 flex items-center gap-2 disabled:opacity-50"
              disabled={isSaving}
              onClick={async () => {
                setIsSaving(true);
                try {
                  const response = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:8000'}/api/users/me`, {
                    method: 'PATCH',
                    headers: {
                      'Content-Type': 'application/json',
                      'Authorization': `Bearer ${token}`
                    },
                    body: JSON.stringify({
                      astronomy_knowledge_level: astronomyKnowledge
                    })
                  });
                  
                  if (response.ok) {
                    const updatedUser = await response.json();
                    updateUser(updatedUser);
                    toast.success('Profil berhasil diperbarui!');
                    if (onComplete) onComplete();
                  } else {
                    toast.error('Gagal menyimpan profil.');
                  }
                } catch (error) {
                  toast.error('Terjadi kesalahan jaringan.');
                } finally {
                  setIsSaving(false);
                }
              }}
            >
              <IconRocket className="w-4 h-4" /> {isSaving ? 'Menyimpan...' : 'Mulai Eksplorasi'}
            </button>
          )}
        </div>

      </div>
    </div>
  );
}
