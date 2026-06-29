import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IconArrowLeft, IconEye, IconEyeOff, IconGlobe } from '@tabler/icons-react';
import { Button } from '../components/ui/button';

export function Register() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState('siswa');
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    nim: '',
    institution: '',
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:8000'}/api/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData, role }),
      });

      if (response.ok) {
        alert('Registrasi berhasil! Silakan masuk.');
        navigate('/login');
      } else {
        const errorData = await response.json();
        setErrorMsg(errorData.detail || 'Terjadi kesalahan saat registrasi.');
      }
    } catch (err) {
      setErrorMsg('Gagal terhubung ke server.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen w-full bg-slate-900 overflow-hidden">
      {/* LEFT PANEL */}
      <div className="relative hidden md:flex flex-1 flex-col justify-between p-8 md:p-12 lg:p-16 text-white overflow-hidden bg-slate-900">
        <div className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="relative z-10 flex flex-col gap-6 max-w-xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-600/20">
              <IconGlobe className="w-5 h-5 text-white" />
            </div>
            <div className="text-xl font-bold tracking-tight text-white">Astro<span className="text-blue-400">Mitigasi</span></div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
            Bersiap, Belajar,<br/><em className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 not-italic">Selamatkan Nyawa.</em>
          </h1>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed">
            Platform pembelajaran mitigasi bencana astronomi interaktif.<br/>
            Daftarkan diri Anda untuk mengakses fitur simulasi dan pemantauan ancaman kosmik.
          </p>
          
          <div className="flex gap-8 mt-4 border-l-2 border-slate-800 pl-6">
            <div className="flex flex-col">
              <div className="text-3xl font-black text-orange-400">3</div>
              <div className="text-xs text-slate-400 uppercase tracking-widest mt-1">Modul Aktif</div>
            </div>
            <div className="flex flex-col">
              <div className="text-3xl font-black text-blue-400">2</div>
              <div className="text-xs text-slate-400 uppercase tracking-widest mt-1">Simulator Bencana</div>
            </div>
          </div>
          
          <div className="mt-8 p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm relative">
            <div className="text-sm text-slate-300 italic mb-2">
              "Kesiapan adalah senjata terbaik kita melawan ketidakpastian alam semesta."
            </div>
            <div className="text-xs font-bold text-slate-400">Tim Astromitigasi</div>
          </div>
        </div>
        
        <div className="relative z-10 flex flex-col gap-6 mt-12">
          <button className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm w-max cursor-pointer bg-transparent border-none" onClick={() => navigate('/')}>
            <IconArrowLeft className="w-4 h-4"/> Kembali ke Beranda
          </button>
        </div>
      </div>
      
      {/* RIGHT PANEL */}
      <div className="w-full md:w-[480px] lg:w-[540px] bg-white dark:bg-slate-950 flex flex-col justify-center p-8 md:p-12 shrink-0 relative z-20 shadow-2xl overflow-y-auto">
        <div className="w-full max-w-sm mx-auto my-auto py-8">
          <div className="flex flex-col">
            <button className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors text-xs font-semibold mb-6 w-max cursor-pointer bg-transparent border-none" onClick={() => navigate('/login')}>
              <IconArrowLeft className="w-4 h-4"/> Sudah punya akun? Masuk
            </button>
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-2 tracking-tight">Daftar Akun</h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">Gratis untuk seluruh warga yang ingin belajar mitigasi.</p>
            
            {errorMsg && (
              <div className="mb-4 p-3 rounded-lg bg-red-100 text-red-600 text-sm border border-red-200">
                {errorMsg}
              </div>
            )}
            
            <div className="flex p-1 bg-slate-100 dark:bg-slate-900 rounded-lg mb-6">
              <button 
                type="button" 
                className={`flex-1 py-2 text-sm font-semibold rounded-md transition-all ${role === 'siswa' ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm' : 'text-slate-500 dark:text-slate-400'}`}
                onClick={() => setRole('siswa')}
              >
                Mahasiswa
              </button>
              <button 
                type="button" 
                className={`flex-1 py-2 text-sm font-semibold rounded-md transition-all ${role === 'guru' ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm' : 'text-slate-500 dark:text-slate-400'}`}
                onClick={() => setRole('guru')}
              >
                Dosen
              </button>
            </div>
            
            <form onSubmit={handleRegister}>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300">Nama Depan</label>
                  <input type="text" name="first_name" value={formData.first_name} onChange={handleChange} className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm dark:text-white" placeholder="Nama" required />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300">Nama Belakang</label>
                  <input type="text" name="last_name" value={formData.last_name} onChange={handleChange} className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm dark:text-white" placeholder="Belakang" />
                </div>
              </div>

              <div className="flex flex-col gap-2 mb-4">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300">NIM</label>
                <input type="text" name="nim" value={formData.nim} onChange={handleChange} className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm dark:text-white" placeholder="Misal: 2100000" required />
                <span className="text-[10px] text-slate-500">NIM akan diverifikasi dengan data institusi.</span>
              </div>

              <div className="flex flex-col gap-2 mb-4">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300">Institusi</label>
                <select name="institution" value={formData.institution} onChange={handleChange} className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm dark:text-white" required>
                  <option value="">Pilih Institusi...</option>
                  <option value="upi">UPI Bandung</option>
                  <option value="ut">Universitas Terbuka</option>
                  <option value="lainnya">Lainnya...</option>
                </select>
              </div>

              <div className="flex flex-col gap-2 mb-4">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300">Email Institusi</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm dark:text-white" placeholder="nim@student.upi.edu" required />
              </div>
              
              <div className="flex flex-col gap-2 mb-5">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300">Kata Sandi</label>
                <div className="relative flex items-center">
                  <input 
                    type={showPassword ? "text" : "password"} 
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm dark:text-white" 
                    placeholder="Minimal 8 karakter" 
                    required 
                  />
                  <button 
                    type="button" 
                    className="absolute right-3 p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 bg-transparent border-none cursor-pointer" 
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <IconEyeOff className="w-4 h-4" /> : <IconEye className="w-4 h-4" />}
                  </button>
                </div>
              </div>
              
              <div className="flex items-start gap-2 mb-8">
                <input type="checkbox" id="agree" className="w-4 h-4 mt-0.5 rounded border-slate-300 text-blue-600 focus:ring-blue-500" required />
                <label htmlFor="agree" className="text-xs text-slate-600 dark:text-slate-400 cursor-pointer leading-tight">
                  Saya menyetujui <span className="text-blue-600 dark:text-blue-400 font-semibold">Syarat & Ketentuan</span> dan <span className="text-blue-600 dark:text-blue-400 font-semibold">Kebijakan Privasi</span> Astromitigasi.
                </label>
              </div>
              
              <Button type="submit" disabled={loading} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-sm shadow-blue-600/20">
                {loading ? 'Memproses...' : 'Buat Akun & Mulai Belajar'}
              </Button>
              
              <div className="flex items-center gap-4 my-6">
                <div className="flex-1 h-px bg-slate-200 dark:bg-slate-800"></div>
                <span className="text-xs text-slate-400 font-medium">atau</span>
                <div className="flex-1 h-px bg-slate-200 dark:bg-slate-800"></div>
              </div>
              
              <Button type="button" variant="outline" className="w-full font-semibold border-2 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 dark:hover:bg-slate-800">
                Daftar dengan SSO UPI
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
