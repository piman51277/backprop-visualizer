/**
 * Draws a bias neuron
 * @param ctx Rendering context
 * @param x X coordinate of center
 * @param y Y coordinate of center
 */
export function drawBiasNeuron(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number
): void {
  const rad = 40;

  //fill style
  ctx.fillStyle = "#FCFF76";

  //border is black
  ctx.strokeStyle = "black";

  //border is 2px wide
  ctx.lineWidth = 2;

  //draw circle
  ctx.beginPath();
  ctx.arc(x, y, rad, 0, 2 * Math.PI);
  ctx.fill();
  ctx.stroke();

  //the text is black
  ctx.fillStyle = "black";
  ctx.font = "bold 24px Arial";
  ctx.textAlign = "center";
  ctx.fillText("BIAS", x, y + 8);
}
