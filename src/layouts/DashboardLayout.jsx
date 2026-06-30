import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { DashboardTopbar } from './DashboardTopbar';
import { useAuth } from '../contexts/AuthContext';
import { AstroAIAssistant } from '../components/AstroAIAssistant';

export function DashboardLayout() {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-brand-bg">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-brand-blue"></div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="flex h-screen overflow-hidden bg-brand-bg font-sans text-brand-navy antialiased">
      <Sidebar />
      <div className="flex-1 min-w-0 flex flex-col overflow-hidden relative">
        <DashboardTopbar />
        <main className="flex-1 overflow-y-auto p-5" role="main">
          <Outlet />
        </main>
        <AstroAIAssistant />
      </div>
    </div>
  );
}
