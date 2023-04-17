/**
 * Generates a color scale from -1 to 1
 * @param value value to convert to color
 * @returns rgb() style color string
 */
export function colorScale(value: number): string {
  //applies from -1 to 1
  //-1 to 0 is blue to black
  //0 to 1 is black to red

  if (value < 0) {
    //blue to black
    const r = 0;
    const g = 0;
    const b = Math.floor(255 * Math.abs(value * 1.2));
    return `rgb(${r}, ${g}, ${b})`;
  } else if (value > 0) {
    //black to red
    const r = Math.floor(255 * (value * 1.2));
    const g = 0;
    const b = 0;
    return `rgb(${r}, ${g}, ${b})`;
  } else {
    //black
    return `rgb(0, 0, 0)`;
  }
}
