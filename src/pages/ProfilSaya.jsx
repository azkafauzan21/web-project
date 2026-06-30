import React from 'react';
import { IconSettings, IconUser, IconEdit } from '@tabler/icons-react';
import { useAuth } from '../contexts/AuthContext';
import './Dashboard.css';

export function ProfilSaya() {
  const { user } = useAuth();
  
  const userName = user ? `${user.first_name || ''} ${user.last_name || ''}`.trim() || '-' : '-';
  const email = user ? user.email || '-' : '-';
  const initials = userName !== '-' ? userName.substring(0, 2).toUpperCase() : 'U';

  return (
    <div className="w-full pb-6 font-sans">
      <div style={{ marginBottom: '16px' }}>
        <div style={{ fontSize: '18px', fontWeight: 800, color: 'var(--navy)', marginBottom: '4px' }}>
          Profil Saya
        </div>
        <div style={{ fontSize: '13px', color: 'var(--slate)' }}>
          Informasi akun dan preferensi belajar.
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-[14px]">
        {/* Informasi Akun */}
        <div className="bg-white border border-slate-200 rounded-xl p-[20px] shadow-[var(--shadow-sm)]">
          <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--navy)', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <IconUser size={16} style={{ color: 'var(--blue)' }} /> Informasi Akun
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
            <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'linear-gradient(135deg,var(--blue),var(--purple))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px', fontWeight: 700, color: '#fff', flexShrink: 0 }}>
              {initials}
            </div>
            <div>
              <div style={{ fontSize: '16px', fontWeight: 700, color: 'var(--navy)' }}>{userName}</div>
              <div style={{ fontSize: '12px', color: 'var(--slate2)' }}>{email}</div>
              <div style={{ marginTop: '4px' }}>
                {user?.status ? <span className="badge badge-blue">{user.status}</span> : <span className="text-slate-400 text-[10px]">-</span>}
              </div>
            </div>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid var(--border)', fontSize: '12px' }}>
              <span style={{ color: 'var(--slate)' }}>NIM</span>
              <span style={{ fontWeight: 600, color: 'var(--navy)' }}>{user?.nim || '-'}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid var(--border)', fontSize: '12px' }}>
              <span style={{ color: 'var(--slate)' }}>Program Studi</span>
              <span style={{ fontWeight: 600, color: 'var(--navy)' }}>{user?.program_studi || '-'}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid var(--border)', fontSize: '12px' }}>
              <span style={{ color: 'var(--slate)' }}>Institusi</span>
              <span style={{ fontWeight: 600, color: 'var(--navy)' }}>{user?.institusi || '-'}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid var(--border)', fontSize: '12px' }}>
              <span style={{ color: 'var(--slate)' }}>Angkatan</span>
              <span style={{ fontWeight: 600, color: 'var(--navy)' }}>{user?.angkatan || '-'}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', fontSize: '12px' }}>
              <span style={{ color: 'var(--slate)' }}>Asal Daerah</span>
              <span style={{ fontWeight: 600, color: 'var(--navy)' }}>{user?.asal_daerah || '-'}</span>
            </div>
          </div>
        </div>

        {/* Preferensi Belajar */}
        <div className="bg-white border border-slate-200 rounded-xl p-[20px] shadow-[var(--shadow-sm)]">
          <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--navy)', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <IconSettings size={16} style={{ color: 'var(--slate)' }} /> Preferensi Belajar
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid var(--border)', fontSize: '12px' }}>
              <span style={{ color: 'var(--slate)' }}>Gaya Belajar (VARK)</span>
              {user?.gaya_belajar ? <span className="badge badge-purple">{user.gaya_belajar}</span> : <span style={{ fontWeight: 600, color: 'var(--slate)' }}>-</span>}
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid var(--border)', fontSize: '12px' }}>
              <span style={{ color: 'var(--slate)' }}>Bencana pernah dialami</span>
              <span style={{ fontWeight: 600, color: 'var(--navy)' }}>{user?.bencana_dialami || '-'}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid var(--border)', fontSize: '12px' }}>
              <span style={{ color: 'var(--slate)' }}>Kedekatan zona rawan</span>
              {user?.kedekatan_zona ? <span style={{ fontWeight: 600, color: 'var(--red)' }}>{user.kedekatan_zona}</span> : <span style={{ fontWeight: 600, color: 'var(--slate)' }}>-</span>}
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid var(--border)', fontSize: '12px' }}>
              <span style={{ color: 'var(--slate)' }}>Notifikasi email</span>
              {user?.notifikasi_email ? <span className="badge badge-green">{user.notifikasi_email}</span> : <span style={{ fontWeight: 600, color: 'var(--slate)' }}>-</span>}
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', fontSize: '12px' }}>
              <span style={{ color: 'var(--slate)' }}>Bahasa antarmuka</span>
              <span style={{ fontWeight: 600, color: 'var(--navy)' }}>{user?.bahasa || '-'}</span>
            </div>
          </div>
          
          <button 
            type="button" 
            style={{ marginTop: '14px', width: '100%', padding: '8px', background: 'var(--bg)', border: '1px solid var(--border2)', borderRadius: 'var(--r-sm)', fontSize: '13px', fontWeight: 500, color: 'var(--navy)', cursor: 'pointer', fontFamily: 'inherit', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}
            onClick={() => alert('Edit profil akan tersedia di versi produksi.')}
          >
            <IconEdit size={16} aria-hidden="true" /> Edit Profil
          </button>
        </div>
      </div>
    </div>
  );
}
