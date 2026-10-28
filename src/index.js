/** Turn a title into a URL slug: lower case, words joined by single dashes. */
export function slugify(text) {
  return String(text)
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/** Cut text to at most `max` characters, ending with an ellipsis when cut. */
export function truncate(text, max) {
  const chars = Array.from(String(text));
  if (chars.length <= max) return chars.join('');
  return chars.slice(0, max).join('') + '…';
}

/** Count words, treating any run of whitespace as one separator. */
export function wordCount(text) {
  const s = String(text).trim();
  return s ? s.split(/\s+/).length : 0;
}
