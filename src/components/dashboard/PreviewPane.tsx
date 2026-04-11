import ReactMarkdown from 'react-markdown';

type PreviewPaneProps = {
  content: string;
};

export default function PreviewPane({ content }: PreviewPaneProps) {
  return (
    <section className="flex min-w-[250px] flex-1 flex-col overflow-hidden bg-white transition-colors dark:bg-zinc-950/20">
      <div className="flex h-9 shrink-0 items-center border-b border-slate-200 bg-slate-50 px-4 transition-colors dark:border-zinc-800/50 dark:bg-zinc-900/50">
        <span className="text-xs font-medium text-slate-500 dark:text-zinc-400">Reading View</span>
      </div>
      <div className="h-full overflow-y-auto p-8">
        <div className="markdown-preview mx-auto max-w-2xl transition-colors">
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
      </div>
    </section>
  );
}
