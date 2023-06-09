import { formatNum } from "./formatNum";

/**
 * Updates the epoch and error panel with the given epoch and error.
 * @param epoch Epoch number
 * @param error Error number
 */
export function updateEpochErrorPanel(epoch: number, error: number): void {
  document.getElementById("epoch-count-number")!.innerHTML = formatNum(epoch);
  document.getElementById("epoch-error-number")!.innerHTML = formatNum(error);
}
