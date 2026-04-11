type ResizeHandleProps = {
  onMouseDown: () => void;
};

export default function ResizeHandle({ onMouseDown }: ResizeHandleProps) {
  return (
    <div
      onMouseDown={onMouseDown}
      className="group relative z-10 flex w-1.5 shrink-0 cursor-col-resize items-center justify-center bg-slate-200 transition-colors hover:bg-violet-400 dark:bg-zinc-800/80 dark:hover:bg-violet-500/50"
    >
      <div className="h-6 w-0.5 rounded-full bg-slate-400 transition-colors group-hover:bg-white dark:bg-zinc-600" />
    </div>
  );
}
