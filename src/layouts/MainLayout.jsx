import React from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { Topbar } from './Topbar';
import { AstroAIAssistant } from '../components/AstroAIAssistant';

export function MainLayout() {
  return (
    <div className="flex h-screen overflow-hidden bg-slate-900">
      <Sidebar />
      <div className="flex-1 min-w-0 flex flex-col overflow-hidden relative">
        <Topbar />
        <main className="flex-1 p-4 sm:p-6 overflow-y-auto bg-slate-50 dark:bg-slate-900">
          <Outlet />
        </main>
        <AstroAIAssistant />
      </div>
    </div>
  );
}
