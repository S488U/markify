type EditorPaneProps = {
  width: number;
  value: string;
  onChange: (value: string) => void;
};

export default function EditorPane({ width, value, onChange }: EditorPaneProps) {
  return (
    <section style={{ width }} className="flex shrink-0 flex-col overflow-hidden bg-white transition-colors dark:bg-zinc-900">
      <div className="flex h-9 shrink-0 items-center border-b border-slate-200 bg-slate-50/50 px-4 transition-colors dark:border-zinc-800/50 dark:bg-zinc-900/50">
        <span className="text-xs font-medium text-slate-500 dark:text-zinc-400">Editor</span>
      </div>
      <textarea
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Start typing..."
        spellCheck={false}
        className="h-full w-full resize-none bg-transparent p-6 font-mono text-sm leading-relaxed text-slate-800 outline-none placeholder:text-slate-400 focus:ring-0 dark:text-zinc-300 dark:placeholder:text-zinc-600"
      />
    </section>
  );
}
