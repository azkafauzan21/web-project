import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { MainLayout } from './layouts/MainLayout';
import { Home } from './pages/Home';
import { SpaceWeather } from './pages/SpaceWeather';
import { AsteroidTracker } from './pages/AsteroidTracker';
import { SpaceDebris } from './pages/SpaceDebris';
import { Login } from './pages/Login';
import { Dashboard } from './pages/Dashboard';
import { OnePageScroll } from './pages/OnePageScroll';

function App() {
  return (
    <>
      <Toaster position="top-right" />
      <BrowserRouter basename="/web-project">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<MainLayout />}>
            <Route index element={<OnePageScroll />} />
            <Route path="tentang" element={<OnePageScroll />} />
            <Route path="modul" element={<OnePageScroll />} />
            <Route path="galeri" element={<OnePageScroll />} />
            <Route path="kontak" element={<OnePageScroll />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="space-weather" element={<SpaceWeather />} />
            <Route path="tracker" element={<AsteroidTracker />} />
            <Route path="space-debris" element={<SpaceDebris />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
