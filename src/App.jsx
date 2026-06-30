import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { MainLayout } from './layouts/MainLayout';
import { DashboardLayout } from './layouts/DashboardLayout';
import { Home } from './pages/Home';
import { SpaceWeather } from './pages/SpaceWeather';
import { AsteroidTracker } from './pages/AsteroidTracker';
import { SpaceDebris } from './pages/SpaceDebris';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Dashboard } from './pages/Dashboard';
import { ModulHub } from './pages/ModulHub';
import { SimulasiHub } from './pages/SimulasiHub';
import { ProgressSaya } from './pages/ProgressSaya';
import { DataCenter } from './pages/DataCenter';
import { ProjectGallery } from './pages/ProjectGallery';
import { ForumDiskusi } from './pages/ForumDiskusi';
import { OnePageScroll } from './pages/OnePageScroll';
import { ImpactCalculator } from './pages/ImpactCalculator';
import { TsunamiSimulator } from './pages/TsunamiSimulator';
import { Pencapaian } from './pages/Pencapaian';
import { ProfilSaya } from './pages/ProfilSaya';
import { Onboarding } from './pages/Onboarding';
import { ModuleLayout } from './layouts/ModuleLayout';
import { PhaseEngage, PhaseDiscover, PhaseReason, PhaseApply, PhaseReflect, PhaseAssess } from './components/ModulePhases';
import { AuthProvider } from './contexts/AuthContext';
import { Navigate } from 'react-router-dom';
function App() {
  return (
    <AuthProvider>
      <Toaster position="top-right" />
      <BrowserRouter basename="/web-project">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/onboarding" element={<Onboarding />} />
          
          {/* Public Routes - Landing Page */}
          <Route path="/" element={<MainLayout />}>
            <Route index element={<OnePageScroll />} />
            <Route path="tentang" element={<OnePageScroll />} />
            <Route path="modul" element={<OnePageScroll />} />
            <Route path="galeri" element={<OnePageScroll />} />
            <Route path="kontak" element={<OnePageScroll />} />
          </Route>

          {/* Private Routes - Dashboard/Module Apps */}
          <Route element={<DashboardLayout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="space-weather" element={<SpaceWeather />} />
            <Route path="tracker" element={<AsteroidTracker />} />
            <Route path="space-debris" element={<SpaceDebris />} />
            <Route path="impact-calculator" element={<ImpactCalculator />} />
            <Route path="tsunami-simulator" element={<TsunamiSimulator />} />
            <Route path="modul-lms" element={<ModulHub />} /> {/* Pusat Komando Modul */}
            <Route path="simulasi" element={<SimulasiHub />} />
            <Route path="progress" element={<ProgressSaya />} />
            <Route path="data-center" element={<DataCenter />} />
            <Route path="gallery" element={<ProjectGallery />} />
            <Route path="forum" element={<ForumDiskusi />} />
            <Route path="pencapaian" element={<Pencapaian />} />
            <Route path="profil" element={<ProfilSaya />} />
          </Route>

          {/* Fullscreen Module Route */}
          <Route path="/modul-lms/belajar" element={<ModuleLayout />}>
            <Route index element={<Navigate to="engage" replace />} />
            <Route path="engage" element={<PhaseEngage nextPhase="discover" />} />
            <Route path="discover" element={<PhaseDiscover prevPhase="engage" nextPhase="reason" />} />
            <Route path="reason" element={<PhaseReason prevPhase="discover" nextPhase="apply" />} />
            <Route path="apply" element={<PhaseApply prevPhase="reason" nextPhase="reflect" />} />
            <Route path="reflect" element={<PhaseReflect prevPhase="apply" nextPhase="assess" />} />
            <Route path="assess" element={<PhaseAssess prevPhase="reflect" />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
