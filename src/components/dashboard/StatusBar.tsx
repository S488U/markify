type StatusBarProps = {
  statusMessage: string;
  noteCount: number;
};

export default function StatusBar({ statusMessage, noteCount }: StatusBarProps) {
  return (
    <footer className="flex h-6 shrink-0 items-center justify-between border-t border-slate-200 bg-slate-50 px-3 text-[11px] text-slate-500 transition-colors dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-500">
      <div>{statusMessage}</div>
      <div className="flex gap-4">
        <span>{noteCount} files</span>
        <span>UTF-8</span>
      </div>
    </footer>
  );
}
