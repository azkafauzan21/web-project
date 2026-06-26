import React, { useState } from 'react';
import { User, Layout, ClipboardList, Rocket, Bot } from 'lucide-react';
import { Card } from './ui/card';
import { Card } from './ui/card';
import { useAuth } from '../contexts/AuthContext';
import { toast } from 'react-hot-toast';

export function OnboardingTour({ onComplete }) {
  const { user, token, updateUser } = useAuth();
  const [step, setStep] = useState(1);
  const [astronomyKnowledge, setAstronomyKnowledge] = useState('Pemula (Belum tahu banyak)');
  const [isSaving, setIsSaving] = useState(false);

  const steps = [
    { id: 1, icon: User, label: 'Profil Belajar' },
    { id: 2, icon: Layout, label: 'Orientasi LMS' },
    { id: 3, icon: ClipboardList, label: 'Pre-test Diagnostik' },
    { id: 4, icon: Rocket, label: 'Mulai' }
  ];

  return (
    <div className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto flex flex-col">
        
        {/* Header */}
        <div className="p-5 border-b bg-slate-50 flex items-center justify-between sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white">
              <Rocket className="w-4 h-4" />
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
                  <Bot className="w-5 h-5" />
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
            <div className="animate-in fade-in slide-in-from-right-4 duration-300 text-center py-8">
              <div className="text-4xl mb-4">🗺️</div>
              <h2 className="text-xl font-bold text-slate-800 mb-2">Orientasi Platform (Dummy)</h2>
              <p className="text-sm text-slate-500 mb-6">Tur fitur-fitur yang tersedia di aplikasi ini.</p>
            </div>
          )}

          {step === 3 && (
            <div className="animate-in fade-in slide-in-from-right-4 duration-300 text-center py-8">
              <div className="text-4xl mb-4">📝</div>
              <h2 className="text-xl font-bold text-slate-800 mb-2">Pre-test Diagnostik (Dummy)</h2>
              <p className="text-sm text-slate-500 mb-6">Kuisioner awal untuk mengukur pemahaman Anda mengenai ancaman kosmis.</p>
            </div>
          )}

          {step === 4 && (
            <div className="animate-in fade-in slide-in-from-right-4 duration-300 text-center py-8">
              <div className="text-4xl mb-4">🚀</div>
              <h2 className="text-xl font-bold text-slate-800 mb-2">Semua Siap!</h2>
              <p className="text-sm text-slate-500 mb-6">Mulai eksplorasi materi mitigasi bencana antariksa Anda sekarang.</p>
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
              <Rocket className="w-4 h-4" /> {isSaving ? 'Menyimpan...' : 'Mulai Eksplorasi'}
            </button>
          )}
        </div>

      </div>
    </div>
  );
}
