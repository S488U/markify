'use client';

import { useEffect, useRef, useState } from 'react';

export function useResizablePanels() {
  const sidebarWidthRef = useRef(260);
  const [sidebarWidth, setSidebarWidth] = useState(260);
  const editorWidthRef = useRef(500);
  const [editorWidth, setEditorWidth] = useState(500);
  const isDraggingSidebar = useRef(false);
  const isDraggingEditor = useRef(false);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (isDraggingSidebar.current) {
        const newWidth = Math.max(180, Math.min(event.clientX, 450));
        sidebarWidthRef.current = newWidth;
        setSidebarWidth(newWidth);
      } else if (isDraggingEditor.current) {
        const newWidth = Math.max(
          250,
          Math.min(event.clientX - sidebarWidthRef.current, window.innerWidth - sidebarWidthRef.current - 250),
        );
        editorWidthRef.current = newWidth;
        setEditorWidth(newWidth);
      }
    };

    const handleMouseUp = () => {
      if (isDraggingSidebar.current || isDraggingEditor.current) {
        isDraggingSidebar.current = false;
        isDraggingEditor.current = false;
        document.body.style.cursor = 'default';
        document.body.style.userSelect = 'auto';
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  function startSidebarDrag() {
    isDraggingSidebar.current = true;
    document.body.style.cursor = 'col-resize';
    document.body.style.userSelect = 'none';
  }

  function startEditorDrag() {
    isDraggingEditor.current = true;
    document.body.style.cursor = 'col-resize';
    document.body.style.userSelect = 'none';
  }

  return {
    sidebarWidth,
    editorWidth,
    startSidebarDrag,
    startEditorDrag,
  };
}
