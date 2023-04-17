import { colorScale } from "../util/colorScale";

/**
 * Draws a neuron with a color based on the value
 * @param ctx Rendering context
 * @param x X coordinate of center
 * @param y Y coordinate of center
 * @param value value to convert to color
 */
export function drawNeuron(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  value: number
): void {
  const rad = 40;

  //fill style
  ctx.fillStyle = colorScale(value);

  //border is black
  ctx.strokeStyle = "black";

  //border is 2px wide
  ctx.lineWidth = 2;

  //draw circle
  ctx.beginPath();
  ctx.arc(x, y, rad, 0, 2 * Math.PI);
  ctx.fill();
  ctx.stroke();

  //the text is white
  ctx.fillStyle = "white";
  ctx.font = "bold 24px Arial";
  ctx.textAlign = "center";
  ctx.fillText(value.toFixed(2), x, y + 8);
}
