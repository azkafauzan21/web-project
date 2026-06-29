import React from 'react';
import { Outlet } from 'react-router-dom';
import { Topbar } from './Topbar';
import { AstroAIAssistant } from '../components/AstroAIAssistant';

export function MainLayout() {
  return (
    <div className="flex flex-col h-screen overflow-hidden bg-slate-900">
      <Topbar />
      <main className="flex-1 overflow-y-auto bg-slate-50 dark:bg-slate-900 relative">
        <Outlet />
      </main>
      <AstroAIAssistant />
    </div>
  );
}
