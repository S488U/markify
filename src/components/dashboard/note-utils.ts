export const EMPTY_NOTE_CONTENT = '# Untitled\n\nStart writing in markdown...';

export function deriveTitle(content: string) {
  const firstMeaningfulLine = content
    .split('\n')
    .map((line) => line.trim())
    .find(Boolean);

  if (!firstMeaningfulLine) return 'Untitled';

  return (
    firstMeaningfulLine
      .replace(/^[#>*\-\d.\s`~_]+/, '')
      .replace(/\[(.*?)\]\((.*?)\)/g, '$1')
      .replace(/[*_`~]/g, '')
      .trim() || 'Untitled'
  );
}
