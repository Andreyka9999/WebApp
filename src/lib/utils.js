// Utility function to combine conditional classNames into a single string
export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}
