/**
 * Merges string class names into a single clean spacing-separated class string.
 */
export function cn(...inputs: (string | undefined | null | boolean)[]) {
  return inputs.filter(Boolean).join(' ');
}
