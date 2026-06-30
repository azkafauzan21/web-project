import React, { useState } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import './ModuleLayout.css';
import { IconPlanet, IconHome, IconBooks, IconArrowLeft, IconRobot, IconChevronRight, IconBolt } from '@tabler/icons-react';

export function ModuleLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const [aiOpen, setAiOpen] = useState(false);

  // In a real implementation, we'd read this from state/store
  const activePhase = location.pathname.split('/').pop() || 'engage';

  const toggleAI = () => setAiOpen(!aiOpen);

  return (
    <div className="flex h-screen overflow-hidden bg-slate-50 text-slate-900 w-full font-sans module-layout">
      {/* SIDEBAR */}
      <aside className="sidebar" aria-label="Navigasi modul">
        <div className="sidebar-logo">
          <div className="sidebar-logo-mark"><IconPlanet className="w-5 h-5 text-white" /></div>
          <div>
            <div className="sidebar-logo-text"><span>DLLS</span> · GEMA</div>
            <div className="sidebar-logo-sub">Modul 1 — Cuaca Antariksa</div>
          </div>
        </div>
        
        <div className="phase-stepper-side">
          <div className="phase-stepper-title">Alur E-DRA</div>
          
          <button className={`phase-step ${activePhase === 'engage' ? 'active' : ''}`} type="button" onClick={() => navigate('/modul-lms/belajar/engage')}>
            <div className="phase-dot">E</div><div className="phase-step-label">Engage</div><div className="phase-step-lit">Risk</div>
          </button>
          
          <button className={`phase-step ${activePhase === 'discover' ? 'active' : ''}`} type="button" onClick={() => navigate('/modul-lms/belajar/discover')}>
            <div className="phase-dot">D</div><div className="phase-step-label">Discover</div><div className="phase-step-lit">Know</div>
          </button>
          
          <button className={`phase-step ${activePhase === 'reason' ? 'active' : ''}`} type="button" onClick={() => navigate('/modul-lms/belajar/reason')}>
            <div className="phase-dot">R</div><div className="phase-step-label">Reason</div><div className="phase-step-lit">Critical</div>
          </button>
          
          <button className={`phase-step ${activePhase === 'apply' ? 'active' : ''}`} type="button" onClick={() => navigate('/modul-lms/belajar/apply')}>
            <div className="phase-dot">A</div><div className="phase-step-label">Apply</div><div className="phase-step-lit">Action</div>
          </button>
          
          <button className={`phase-step ${activePhase === 'reflect' ? 'active' : ''}`} type="button" onClick={() => navigate('/modul-lms/belajar/reflect')}>
            <div className="phase-dot">R</div><div className="phase-step-label">Reflection</div><div className="phase-step-lit">Aware</div>
          </button>
          
          <button className={`phase-step ${activePhase === 'assess' ? 'active' : ''}`} type="button" onClick={() => navigate('/modul-lms/belajar/assess')}>
            <div className="phase-dot">A</div><div className="phase-step-label">Assessment</div><div className="phase-step-lit">N-Gain</div>
          </button>
        </div>
        
        <div className="sidebar-nav-bottom">
          <button className="nav-item-sm" onClick={() => navigate('/dashboard')} type="button"><IconHome className="w-4 h-4" /> Dashboard</button>
          <button className="nav-item-sm" onClick={() => navigate('/modul-lms')} type="button"><IconBooks className="w-4 h-4" /> Semua Modul</button>
          <button className="nav-item-sm" onClick={() => navigate('/modul-lms')} type="button"><IconArrowLeft className="w-4 h-4" /> Kembali</button>
          <button className="nav-item-sm" onClick={toggleAI} type="button"><IconRobot className="w-4 h-4" /> AI Assistant</button>
        </div>
        
        <div className="sidebar-user">
          <div className="user-avatar">AM</div>
          <div><div className="user-name">Astro Member</div><div className="user-role">Siswa · Astromitigasi</div></div>
        </div>
      </aside>

      {/* MAIN AREA */}
      <div className="main-area">
        <header className="topbar">
          <div className="topbar-breadcrumb">
            <a onClick={() => navigate('/dashboard')} className="cursor-pointer">Dashboard</a>
            <IconChevronRight className="w-3.5 h-3.5 mx-1" />
            <a onClick={() => navigate('/modul-lms')} className="cursor-pointer">Modul</a>
            <IconChevronRight className="w-3.5 h-3.5 mx-1" />
            <span className="current">M1 — Cuaca Antariksa</span>
          </div>
          <div className="topbar-actions">
            <div className="progress-chip">
              <span id="progress-text">0%</span>
              <div className="progress-chip-bar"><div className="progress-chip-fill" style={{ width: '0%' }}></div></div>
            </div>
            <button className="topbar-btn" onClick={toggleAI} type="button" aria-label="AI Assistant"><IconRobot className="w-4 h-4" /></button>
            <button className="topbar-btn" onClick={() => navigate('/dashboard')} type="button" aria-label="Dashboard"><IconHome className="w-4 h-4" /></button>
          </div>
        </header>

        <nav className="phase-header-bar" aria-label="Fase pembelajaran">
          <div className={`phase-pill ${activePhase === 'engage' ? 'active' : ''}`} onClick={() => navigate('/modul-lms/belajar/engage')} role="button">
            <IconBolt className="w-4 h-4" /> Engage
          </div>
          <IconChevronRight className="w-4 h-4 phase-arrow" />
          
          <div className={`phase-pill ${activePhase === 'discover' ? 'active' : ''}`} onClick={() => navigate('/modul-lms/belajar/discover')} role="button">
            Discover
          </div>
          <IconChevronRight className="w-4 h-4 phase-arrow" />
          
          <div className={`phase-pill ${activePhase === 'reason' ? 'active' : ''}`} onClick={() => navigate('/modul-lms/belajar/reason')} role="button">
            Reason
          </div>
          <IconChevronRight className="w-4 h-4 phase-arrow" />
          
          <div className={`phase-pill ${activePhase === 'apply' ? 'active' : ''}`} onClick={() => navigate('/modul-lms/belajar/apply')} role="button">
            Apply
          </div>
          <IconChevronRight className="w-4 h-4 phase-arrow" />
          
          <div className={`phase-pill ${activePhase === 'reflect' ? 'active' : ''}`} onClick={() => navigate('/modul-lms/belajar/reflect')} role="button">
            Reflect
          </div>
          <IconChevronRight className="w-4 h-4 phase-arrow" />
          
          <div className={`phase-pill ${activePhase === 'assess' ? 'active' : ''}`} onClick={() => navigate('/modul-lms/belajar/assess')} role="button">
            Assess
          </div>
        </nav>

        <main className="modul-main relative">
          <div className="phase-body relative min-h-full">
            <Outlet />
          </div>
        </main>
      </div>

      {/* AI Floating Action Button & Panel */}
      <button className="ai-fab" onClick={toggleAI} aria-label="Buka AI Assistant">
        <IconRobot className="w-6 h-6 text-white" />
        <div className="ai-fab-dot"></div>
      </button>

      <div className={`ai-panel ${aiOpen ? 'open' : ''}`}>
        <div className="ai-panel-head">
          <div className="ai-panel-title">
            <div className="ai-status-dot"></div> GEMA-AI
            <span className="ai-ctx-tag">Modul</span>
          </div>
          <button className="ai-close-btn" onClick={toggleAI}>×</button>
        </div>
        <div className="ai-messages">
          <div className="ai-msg bot">Halo! Saya GEMA-AI. Ada yang bisa saya bantu terkait modul ini?</div>
        </div>
        <div className="ai-input-row">
          <input type="text" className="ai-input" placeholder="Tanya GEMA-AI..." />
          <button className="ai-send-btn"><IconChevronRight className="w-4 h-4" /></button>
        </div>
      </div>
    </div>
  );
}
