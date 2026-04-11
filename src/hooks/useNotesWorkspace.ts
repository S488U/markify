'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { EMPTY_NOTE_CONTENT, deriveTitle } from '@/src/components/dashboard/note-utils';
import type { ApiResponse, Note } from '@/src/components/dashboard/types';

export function useNotesWorkspace() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [selectedNoteId, setSelectedNoteId] = useState<string | null>(null);
  const [draftContent, setDraftContent] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [statusMessage, setStatusMessage] = useState('Initializing workspace...');
  const saveTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hydratedRef = useRef(false);
  const lastSavedContentRef = useRef('');

  const selectedNote = useMemo(
    () => notes.find((note) => note._id === selectedNoteId) ?? null,
    [notes, selectedNoteId],
  );

  useEffect(() => {
    let cancelled = false;

    async function loadNotes() {
      try {
        const response = await fetch('/api/notes', { credentials: 'include' });
        const data: ApiResponse = await response.json();

        if (cancelled) return;

        if (response.status === 401) {
          setStatusMessage('Authentication required.');
          setIsLoading(false);
          return;
        }

        const loadedNotes = data.notes ?? [];
        setNotes(loadedNotes);

        if (loadedNotes.length > 0) {
          setSelectedNoteId(loadedNotes[0]._id);
          setDraftContent(loadedNotes[0].content ?? '');
          lastSavedContentRef.current = loadedNotes[0].content ?? '';
        }

        setStatusMessage(loadedNotes.length ? 'Workspace ready.' : 'No files in vault.');
      } catch {
        if (!cancelled) setStatusMessage('System error: Unable to load notes.');
      } finally {
        if (!cancelled) {
          setIsLoading(false);
          hydratedRef.current = true;
        }
      }
    }

    void loadNotes();

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (!hydratedRef.current || !selectedNote || draftContent === lastSavedContentRef.current) return;

    setStatusMessage('Saving...');
    if (saveTimerRef.current) clearTimeout(saveTimerRef.current);

    saveTimerRef.current = setTimeout(() => {
      void saveNote(selectedNote._id, draftContent);
    }, 500);

    return () => {
      if (saveTimerRef.current) clearTimeout(saveTimerRef.current);
    };
  }, [draftContent, selectedNote]);

  async function saveNote(noteId: string, content: string) {
    const title = deriveTitle(content);
    setIsSaving(true);

    try {
      const response = await fetch(`/api/notes/${noteId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ title, content }),
      });

      const data: ApiResponse = await response.json();
      if (!response.ok || !data.success || !data.note) throw new Error('Save failed');

      lastSavedContentRef.current = content;
      setNotes((prev) =>
        prev.map((note) => (note._id === noteId ? { ...note, ...data.note, title, content } : note)),
      );
      setStatusMessage('All changes saved.');
    } catch {
      setStatusMessage('Error: Failed to sync changes.');
    } finally {
      setIsSaving(false);
    }
  }

  async function createNote() {
    const tempId = crypto.randomUUID();
    const tempNote: Note = { _id: tempId, title: 'Untitled', content: EMPTY_NOTE_CONTENT };
    const previousNotes = notes;

    setNotes((prev) => [tempNote, ...prev]);
    setSelectedNoteId(tempId);
    setDraftContent(EMPTY_NOTE_CONTENT);
    lastSavedContentRef.current = EMPTY_NOTE_CONTENT;
    setStatusMessage('Creating new note...');

    try {
      const response = await fetch('/api/notes/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ title: 'Untitled', content: EMPTY_NOTE_CONTENT }),
      });

      const data: ApiResponse = await response.json();
      if (!response.ok || !data.success || !data.note) throw new Error('Failed to create');

      setNotes((prev) => prev.map((note) => (note._id === tempId ? (data.note as Note) : note)));
      setSelectedNoteId(data.note._id);
      setStatusMessage('New note created.');
    } catch {
      setNotes(previousNotes);

      if (previousNotes.length > 0) {
        setSelectedNoteId(previousNotes[0]._id);
        setDraftContent(previousNotes[0].content ?? '');
        lastSavedContentRef.current = previousNotes[0].content ?? '';
      } else {
        setSelectedNoteId(null);
        setDraftContent('');
        lastSavedContentRef.current = '';
      }

      setStatusMessage('System error: Unable to create note.');
    }
  }

  async function deleteNote(noteId: string) {
    const previousNotes = notes;
    const nextNotes = previousNotes.filter((note) => note._id !== noteId);

    setNotes(nextNotes);

    if (selectedNoteId === noteId) {
      const replacement = nextNotes[0] ?? null;
      setSelectedNoteId(replacement?._id ?? null);
      setDraftContent(replacement?.content ?? '');
      lastSavedContentRef.current = replacement?.content ?? '';
    }

    try {
      const response = await fetch(`/api/notes/${noteId}`, { method: 'DELETE', credentials: 'include' });
      const data: ApiResponse = await response.json();
      if (!response.ok || !data.success) throw new Error('Deletion failed');

      setStatusMessage('Note deleted.');
    } catch {
      setNotes(previousNotes);

      const restoredSelection =
        previousNotes.find((note) => note._id === noteId) ??
        previousNotes[0] ??
        null;

      setSelectedNoteId(restoredSelection?._id ?? null);
      setDraftContent(restoredSelection?.content ?? '');
      lastSavedContentRef.current = restoredSelection?.content ?? '';
      setStatusMessage('Error: Unable to delete note.');
    }
  }

  function selectNote(note: Note) {
    setSelectedNoteId(note._id);
    setDraftContent(note.content ?? '');
    lastSavedContentRef.current = note.content ?? '';
    setStatusMessage(`Opened ${note.title || 'Untitled'}`);
  }

  function updateDraft(content: string) {
    if (!selectedNote) return;

    setDraftContent(content);
    const title = deriveTitle(content);
    setNotes((prev) =>
      prev.map((note) => (note._id === selectedNote._id ? { ...note, title, content } : note)),
    );
  }

  async function logout() {
    setStatusMessage('Signing out...');

    try {
      await fetch('/api/auth/logout', { method: 'POST' });
      window.location.href = '/';
    } catch {
      setStatusMessage('Error: Failed to sign out.');
    }
  }

  return {
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
  };
}
