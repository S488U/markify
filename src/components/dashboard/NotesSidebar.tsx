import { DashboardIcons } from './icons';
import type { Note } from './types';

type NotesSidebarProps = {
  isLoading: boolean;
  notes: Note[];
  selectedNoteId: string | null;
  width: number;
  onCreateNote: () => void;
  onSelectNote: (note: Note) => void;
  onDeleteNote: (event: React.MouseEvent, noteId: string) => void;
};

export default function NotesSidebar({
  isLoading,
  notes,
  selectedNoteId,
  width,
  onCreateNote,
  onSelectNote,
  onDeleteNote,
}: NotesSidebarProps) {
  return (
    <aside style={{ width }} className="flex shrink-0 flex-col overflow-hidden bg-slate-50/50 dark:bg-zinc-950/50">
      <div className="flex items-center justify-between px-4 py-3">
        <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 dark:text-zinc-500">Explorer</span>
        <button onClick={onCreateNote} className="cursor-pointer text-slate-500 transition-colors hover:text-slate-900 dark:text-zinc-400 dark:hover:text-zinc-100">
          <DashboardIcons.Plus />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto px-2 pb-2">
        {!isLoading && notes.length === 0 ? (
          <div className="px-2 py-4 text-center text-xs text-slate-500 dark:text-zinc-600">No files in vault.</div>
        ) : (
          notes.map((note) => {
            const isActive = note._id === selectedNoteId;

            return (
              <div
                key={note._id}
                onClick={() => onSelectNote(note)}
                className={`group flex cursor-pointer items-center justify-between rounded-md px-2 py-1.5 text-sm transition-colors ${
                  isActive
                    ? 'bg-slate-200/80 text-slate-900 dark:bg-zinc-800/60 dark:text-zinc-100'
                    : 'text-slate-600 hover:bg-slate-100 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-zinc-200'
                }`}
              >
                <div className="flex min-w-0 items-center gap-2">
                  <DashboardIcons.File />
                  <span className="truncate">{note.title || 'Untitled'}</span>
                </div>
                <button
                  onClick={(event) => onDeleteNote(event, note._id)}
                  className={`cursor-pointer text-slate-400 opacity-0 transition-opacity hover:text-red-500 group-hover:opacity-100 dark:text-zinc-500 dark:hover:text-red-400 ${
                    isActive ? 'opacity-100' : ''
                  }`}
                >
                  <DashboardIcons.Trash />
                </button>
              </div>
            );
          })
        )}
      </div>
    </aside>
  );
}
