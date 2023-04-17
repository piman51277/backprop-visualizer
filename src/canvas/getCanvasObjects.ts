/**
 * Get the canvas and context from the DOM
 * @returns [canvas, ctx]
 */
export function getCanvasObjects(): [
  HTMLCanvasElement,
  CanvasRenderingContext2D
] {
  const canvas = document.getElementById("nns-canvas") as HTMLCanvasElement;
  const ctx = canvas.getContext("2d")!;
  return [canvas, ctx];
}
