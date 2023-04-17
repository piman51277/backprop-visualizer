/**
 * Updates the results panel with the given results
 * @param results an array of numbers to be displayed in the results panel. Order is 1,0 0,1 0,0 1,1
 */
export function updateResultsPanel(results: number[]): void {
  document.getElementById("result-10")!.innerHTML = results[0].toString();
  document.getElementById("result-01")!.innerHTML = results[1].toString();
  document.getElementById("result-00")!.innerHTML = results[2].toString();
  document.getElementById("result-11")!.innerHTML = results[3].toString();
}
