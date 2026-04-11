'use client';

import { useTheme } from 'next-themes';
import { useSyncExternalStore } from 'react';
import { DashboardIcons } from './icons';

type DashboardHeaderProps = {
  isSaving: boolean;
  onLogout: () => void;
};

export default function DashboardHeader({ isSaving, onLogout }: DashboardHeaderProps) {
  const { theme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );

  return (
    <header className="flex h-10 shrink-0 items-center justify-between border-b border-slate-200 bg-slate-50 px-4 transition-colors dark:border-zinc-800/80 dark:bg-zinc-950">
      <div className="flex items-center gap-2">
        <DashboardIcons.Sidebar />
        <span className="text-xs font-semibold tracking-wide text-slate-900 dark:text-zinc-200">Markify Vault</span>
      </div>
      <div className="flex items-center gap-5">
        <span className="text-xs text-slate-500 dark:text-zinc-500">{isSaving ? 'Syncing...' : 'Synced'}</span>
        <div className="h-4 w-px bg-slate-300 dark:bg-zinc-800" />

        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="flex cursor-pointer items-center text-slate-500 transition-colors hover:text-slate-900 dark:text-zinc-400 dark:hover:text-zinc-100"
          title="Toggle Theme"
        >
          {mounted && theme === 'dark' ? <DashboardIcons.Sun /> : <DashboardIcons.Moon />}
        </button>

        <button
          onClick={onLogout}
          className="flex cursor-pointer items-center gap-1.5 text-xs font-medium text-slate-500 transition-colors hover:text-slate-900 dark:text-zinc-400 dark:hover:text-zinc-100"
          title="Sign out"
        >
          <DashboardIcons.Logout />
          <span className="sr-only sm:not-sr-only">Sign out</span>
        </button>
      </div>
    </header>
  );
}
