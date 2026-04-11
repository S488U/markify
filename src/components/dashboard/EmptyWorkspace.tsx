import { DashboardIcons } from './icons';

export default function EmptyWorkspace() {
  return (
    <div className="flex flex-1 items-center justify-center text-slate-400 dark:text-zinc-500">
      <div className="text-center">
        <DashboardIcons.Sidebar />
        <p className="mt-2 text-sm">Select a file to start writing</p>
      </div>
    </div>
  );
}
