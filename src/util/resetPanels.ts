import { updateEpochErrorPanel } from "./updateEpochErrorPanel";
import { updateResultsPanel } from "./updateResultsPanel";

/**
 * Resets the epoch and error panel and the results panel
 */
export function resetPanels(): void {
  updateEpochErrorPanel(0, 0);
  updateResultsPanel([0, 0, 0, 0]);
}
