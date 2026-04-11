'use client';

import DashboardHeader from '@/src/components/dashboard/DashboardHeader';
import EditorPane from '@/src/components/dashboard/EditorPane';
import EmptyWorkspace from '@/src/components/dashboard/EmptyWorkspace';
import NotesSidebar from '@/src/components/dashboard/NotesSidebar';
import PreviewPane from '@/src/components/dashboard/PreviewPane';
import ResizeHandle from '@/src/components/dashboard/ResizeHandle';
import StatusBar from '@/src/components/dashboard/StatusBar';
import { useNotesWorkspace } from '@/src/hooks/useNotesWorkspace';
import { useResizablePanels } from '@/src/hooks/useResizablePanels';

export default function NotesDashboard() {
  const {
    notes,
    selectedNote,
    selectedNoteId,
    draftContent,
    isLoading,
    isSaving,
    statusMessage,
    createNote,
    deleteNote,
    selectNote,
    updateDraft,
    logout,
  } = useNotesWorkspace();

  const {
    sidebarWidth,
    editorWidth,
    startSidebarDrag,
    startEditorDrag,
  } = useResizablePanels();

  function handleDeleteNote(event: React.MouseEvent, noteId: string) {
    event.stopPropagation();
    void deleteNote(noteId);
  }

  return (
    <div className="flex h-screen w-full flex-col overflow-hidden bg-white font-sans text-slate-700 transition-colors duration-200 selection:bg-violet-200 dark:bg-zinc-950 dark:text-zinc-300 dark:selection:bg-zinc-800">
      <DashboardHeader isSaving={isSaving} onLogout={() => void logout()} />

      <main className="flex min-h-0 flex-1">
        <NotesSidebar
          isLoading={isLoading}
          notes={notes}
          selectedNoteId={selectedNoteId}
          width={sidebarWidth}
          onCreateNote={() => void createNote()}
          onSelectNote={selectNote}
          onDeleteNote={handleDeleteNote}
        />

        <ResizeHandle onMouseDown={startSidebarDrag} />

        {selectedNote ? (
          <>
            <EditorPane width={editorWidth} value={draftContent} onChange={updateDraft} />
            <ResizeHandle onMouseDown={startEditorDrag} />
            <PreviewPane content={draftContent} />
          </>
        ) : (
          <EmptyWorkspace />
        )}
      </main>

      <StatusBar statusMessage={statusMessage} noteCount={notes.length} />
    </div>
  );
}
