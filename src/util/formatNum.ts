/**
 * Formats a number to a string, with a maximum of 6 characters
 * @param n The number to format
 * @returns A string representation of the number
 */
export function formatNum(n: number): string {
  //if the number is an int
  if (n % 1 === 0 && n < 10000) {
    return n.toString();
  }

  //if the number is between -10 and 10
  if (n > -10 && n < 10) {
    return n.toFixed(2);
  }

  //if the number is larger than 10000, we want to use scientific notation
  if (n > 10000) {
    return n.toExponential(2);
  }

  //if not, just truncate to 6 chars
  return n.toPrecision(6);
}
