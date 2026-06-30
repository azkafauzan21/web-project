import React, { useState, useEffect } from 'react';
import { IconAlertTriangle, IconChartBar, IconBook, IconChevronRight, IconClock, IconFlame, IconLock, IconPlayerPlay, IconRobot, IconRocket, IconShieldCheck, IconTarget, IconTrendingUp, IconTrophy } from '@tabler/icons-react';
import { OnboardingTour } from '../components/OnboardingTour';
import { useAuth } from '../contexts/AuthContext';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Dashboard.css';

export function Dashboard() {
  const { user, token, loading } = useAuth();
  const [showTour, setShowTour] = useState(false);
  
  const [dashboardData, setDashboardData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (user && !user.astronomy_knowledge_level) {
      setShowTour(true);
    } else {
      setShowTour(false);
    }
  }, [user]);

  useEffect(() => {
    const fetchDashboardData = async () => {
      if (!token) return;
      try {
        const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:8000';
        const res = await axios.get(`${apiUrl}/api/dashboard/me`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        setDashboardData(res.data);
      } catch (err) {
        console.error("Gagal mengambil data dashboard:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDashboardData();
  }, [token]);

  if (loading || isLoading) {
    return <div className="flex h-full items-center justify-center text-slate-500">Memuat data dashboard...</div>;
  }

  const progress = dashboardData?.progress || { literacy_score: 0, modules_completed: 0, n_gain: 0, streak_days: 0 };
  const topicScores = dashboardData?.topic_scores || [];
  const activities = dashboardData?.activities || [];

  return (
    <div className="w-full pb-6">
      {showTour && <OnboardingTour onComplete={() => setShowTour(false)} />}
      
      {/* Welcome Banner */}
      <div className="welcome-banner">
        <div className="welcome-text">
          <div className="welcome-greeting">Selamat datang, {user?.first_name || 'Kadet'}! 👋</div>
          <div className="welcome-sub">
            Onboarding selesai · Pre-test {progress.literacy_score > 0 ? 'tercatat' : 'belum'} · Profil: {user?.institution || 'Jawa Barat'}
          </div>
        </div>
        <Link to="/modul-lms" className="welcome-action">
          <IconRocket size={16} /> Mulai Modul 1
        </Link>
      </div>

      {/* AI Inline Box */}
      <div className="ai-inline">
        <div className="ai-inline-avatar"><IconRobot /></div>
        <div>
          <div className="ai-inline-name">ASTRO AI</div>
          <div className="ai-inline-text">
            {user?.first_name}, berdasarkan profil dan wilayahmu, kita mulai dari <strong>Modul Cuaca Antariksa</strong> terlebih dahulu untuk membangun fondasi pemahaman mitigasi yang kuat.
          </div>
        </div>
      </div>

      {/* Metric Cards */}
      <div className="grid-4 mb-4">
        <div className="metric-card">
          <div className="metric-icon" style={{ background: 'var(--orange-lt)' }}>📊</div>
          <div>
            <div className="metric-val" style={{ color: 'var(--orange)' }}>{progress.literacy_score.toFixed(0)}%</div>
            <div className="metric-lbl">Skor literasi awal</div>
            <div className="metric-sub" style={{ color: 'var(--slate2)' }}>Target: 80%</div>
          </div>
        </div>
        <div className="metric-card">
          <div className="metric-icon" style={{ background: 'var(--blue-lt)' }}>📚</div>
          <div>
            <div className="metric-val" style={{ color: 'var(--blue)' }}>{progress.modules_completed}/5</div>
            <div className="metric-lbl">Modul selesai</div>
            <div className="metric-sub" style={{ color: 'var(--blue)' }}>M1 siap dimulai</div>
          </div>
        </div>
        <div className="metric-card">
          <div className="metric-icon" style={{ background: 'var(--purple-lt)' }}>📈</div>
          <div>
            <div className="metric-val" style={{ color: 'var(--purple)' }}>{progress.n_gain.toFixed(2)}</div>
            <div className="metric-lbl">N-Gain saat ini</div>
            <div className="metric-sub" style={{ color: 'var(--slate2)' }}>Target: ≥0.40</div>
          </div>
        </div>
        <div className="streak-card flex-col items-start px-4 py-3">
          <div className="flex items-center gap-2 mb-1.5">
            <div className="text-xl"><IconFlame className="text-orange-500 fill-orange-500" /></div>
            <div>
              <div className="streak-val text-lg">{progress.streak_days} Hari</div>
              <div className="streak-lbl mt-0">Streak belajar</div>
            </div>
          </div>
          <div className="streak-days mt-1">
            {['S', 'S', 'R', 'K', 'J', 'S', 'M'].map((day, idx) => (
              <div key={idx} className={`streak-day ${idx < progress.streak_days ? 'done' : ''} ${idx === progress.streak_days ? 'today' : ''}`}>
                {day}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Layout Bawah */}
      <div className="grid-2">
        {/* Kolom Kiri: Modul Bencana */}
        <div className="flex flex-col gap-3">
          <div className="card-title"><IconBook size={14} /> Modul Astromitigasi</div>
          
          <Link to="/modul-lms" className="mod-card" style={{textDecoration: 'none'}}>
            <div className="mod-icon" style={{background: 'var(--red-lt)'}}>☀️</div>
            <div className="mod-info">
              <div className="mod-num" style={{color: 'var(--red)'}}>Modul 1</div>
              <div className="mod-title">Cuaca Antariksa</div>
              <div className="mod-sub">Siklus Matahari · Flare & CME · Badai Geomagnetik</div>
              <div className="pbar"><div className="pbar-fill" style={{ width: '0%', background: 'var(--red)' }}></div></div>
            </div>
            <div className="mod-right">
              <span className="badge badge-blue"><IconPlayerPlay size={12} /> Mulai</span>
              <span style={{fontSize: '10px', color: 'var(--slate2)'}}>0%</span>
            </div>
          </Link>

          {[
            { id: 2, icon: '☄️', title: 'Simulasi Kawah Meteor', sub: 'Fisika Tumbukan · Kalkulator Dampak · Overpressure', color: 'blue' },
            { id: 3, icon: '🛰️', title: 'Sampah Antariksa', sub: 'Sindrom Kessler · Orbit LEO', color: 'orange' },
            { id: 4, icon: '🌊', title: 'Tsunami Tumbukan', sub: 'Gelombang Laut · Megatsunami Asteroid', color: 'teal' },
            { id: 5, icon: '🔭', title: 'Observasi NEO', sub: 'Astrometri · Teleskop · Lintas Batas', color: 'green' },
          ].map((mod) => (
            <div key={mod.id} className="mod-card locked">
              <div className="mod-icon" style={{background: `var(--${mod.color}-lt)`}}>{mod.icon}</div>
              <div className="mod-info">
                <div className="mod-num" style={{color: `var(--${mod.color})`}}>Modul {mod.id}</div>
                <div className="mod-title">{mod.title}</div>
                <div className="mod-sub">{mod.sub}</div>
              </div>
              <div className="mod-right">
                <IconLock size={16} style={{color: 'var(--slate)'}} />
              </div>
            </div>
          ))}
        </div>

        {/* Kolom Kanan: Profil & Aktivitas */}
        <div className="flex flex-col gap-4">
          <div className="card">
            <div className="card-title"><IconChartBar size={14} /> Profil Literasi Awal</div>
            <div className="flex flex-col gap-2 mt-4">
              {[
                { name: 'Umum', score: 55, color: '#7C3AED' },
                { name: 'Cuaca Antariksa', score: 48, color: 'var(--red)' },
                { name: 'Kawah Meteor', score: 42, color: 'var(--blue)' },
                { name: 'Sampah Antariksa', score: 38, color: 'var(--orange)' },
                { name: 'Tsunami Asteroid', score: 35, color: 'var(--teal)' },
                { name: 'Observasi NEO', score: 30, color: 'var(--green)' },
              ].map((topic, i) => {
                const backendScore = topicScores.find(t => t.topic === topic.name)?.score;
                const finalScore = backendScore !== undefined ? backendScore : topic.score;
                return (
                  <div key={i} className="topic-row">
                    <div className="topic-name">{topic.name}</div>
                    <div className="topic-bar">
                      <div className="topic-fill" style={{ width: `${finalScore}%`, background: topic.color }}></div>
                    </div>
                    <div className="topic-score" style={{ color: topic.color }}>{finalScore}%</div>
                  </div>
                );
              })}
            </div>
            <div className="text-[10px] text-slate-400 mt-4 text-center bg-slate-50 p-2 rounded">
              Grafik diperbarui otomatis setelah post-test setiap modul.
            </div>
          </div>

          <div className="card flex-1">
            <div className="card-title"><IconClock size={14} /> Aktivitas Terbaru</div>
            <div className="mt-2">
              {activities.length > 0 ? (
                activities.map((act, idx) => {
                  const colors = ['var(--green-lt)', 'var(--blue-lt)', 'var(--purple-lt)', 'var(--orange-lt)'];
                  const icons = ['✅', '📋', '🚀', '👤'];
                  return (
                  <div key={act.id} className="activity-item">
                    <div className="activity-icon" style={{background: colors[idx % colors.length]}}>
                      {act.icon || icons[idx % icons.length]}
                    </div>
                    <div className="activity-text">
                      <div className="activity-main">{act.action}</div>
                      {act.description && <div className="activity-time">{act.description}</div>}
                      <div className="activity-time">{new Date(act.created_at).toLocaleDateString()}</div>
                    </div>
                  </div>
                  )
                })
              ) : (
                <div className="activity-item">
                  <div className="activity-icon" style={{background: 'var(--green-lt)'}}>✅</div>
                  <div className="activity-text">
                    <div className="activity-main">Akun terdaftar dan terverifikasi</div>
                    <div className="activity-time">Hari ini</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
