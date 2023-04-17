/**
 * Calls the given function when the DOM is ready.
 * @param fn Callback function to be called when the DOM is ready
 */
export function ready(fn: () => void): void {
  if (document.readyState !== "loading") {
    fn();
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
}
