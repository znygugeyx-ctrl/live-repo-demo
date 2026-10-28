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
  const s = String(text);
  if (s.length <= max) return s;
  return s.slice(0, Math.max(0, max - 1)) + '…';
}

/** Count words, treating any run of whitespace as one separator. */
export function wordCount(text) {
  const s = String(text).trim();
  return s ? s.split(/\s+/).length : 0;
}

/** Upper-case the first letter of every word. */
export function capitalize(text) {
  return String(text).replace(/(^|\s)(\p{L})/gu, (_, sp, ch) => sp + ch.toUpperCase());
}
