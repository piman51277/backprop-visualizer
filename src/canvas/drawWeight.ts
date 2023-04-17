import { colorScale } from "../util/colorScale";

/**
 * Draws a line between two points with a color based on the value
 * @param ctx Rendering context
 * @param x1 X coordinate of first point
 * @param y1 Y coordinate of first point
 * @param x2 X coordinate of second point
 * @param y2 Y coordinate of second point
 * @param value value to convert to color
 */
export function drawWeight(
  ctx: CanvasRenderingContext2D,
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  value: number
): void {
  //stroke color
  ctx.strokeStyle = colorScale(value);

  //line is 4px wide
  ctx.lineWidth = 4;

  //draw line
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
}
