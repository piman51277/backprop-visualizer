import { formatNum } from "./formatNum";

/**
 * Updates the results panel with the given results
 * @param results an array of numbers to be displayed in the results panel. Order is 1,0 0,1 0,0 1,1
 */
export function updateResultsPanel(results: number[]): void {
  document.getElementById("result-10")!.innerHTML = formatNum(results[0]);
  document.getElementById("result-01")!.innerHTML = formatNum(results[1]);
  document.getElementById("result-00")!.innerHTML = formatNum(results[2]);
  document.getElementById("result-11")!.innerHTML = formatNum(results[3]);
}
