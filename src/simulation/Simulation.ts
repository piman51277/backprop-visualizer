import { xorTest } from "./../net/xorTest";
import { Net } from "@piman51277/backprop";
import { newNet } from "../net/newNet";
import { drawScene } from "../canvas/drawScene";
import { updateEpochErrorPanel } from "../util/updateEpochErrorPanel";
import { getNetOverallError } from "../net/getNetOverallError";
import { updateResultsPanel } from "../util/updateResultsPanel";
import { getNetResults } from "../net/getNetResults";
import { trainConfig } from "../net/trainConfig";

/**
 * The simulation class is responsible for managing the state of the simulation.
 */
export class Simulation {
  currentDisplayCase: number;
  net: Net;
  autoSpeed: "1" | "10" | "max";
  autoEnabled: boolean;
  epoch: number;
  interval: NodeJS.Timer;
  ctx: CanvasRenderingContext2D;

  constructor(ctx: CanvasRenderingContext2D) {
    this.currentDisplayCase = 0;
    this.net = newNet();
    this.autoSpeed = "1";
    this.autoEnabled = false;
    this.epoch = 0;
    this.interval = setInterval(() => null, 100000);
    this.ctx = ctx;
  }

  /**
   * Update the simulation window
   */
  update(): void {
    const { ctx, net, currentDisplayCase } = this;
    const displayCase = xorTest[currentDisplayCase][0];

    drawScene(ctx, net.eval(displayCase), net.weights, net.biases);

    updateEpochErrorPanel(this.epoch, getNetOverallError(net));
    updateResultsPanel(getNetResults(net));
  }

  /**
   * Train the network for a given number of epochs
   * @param epochs The number of epochs to train for
   * @returns void
   */
  train(epochs: number): void {
    this.net.train(xorTest, epochs, trainConfig);
    this.epoch += epochs;
  }

  /**
   * Set the auto speed
   * @param speed The speed to set the auto to
   * @returns void
   */
  setAutoSpeed(speed: "1" | "10" | "max"): void {
    this.autoSpeed = speed;

    //if the auto is on, replace the interval
    if (!this.autoEnabled) return;

    let interval = 0;
    switch (speed) {
      case "1":
        interval = 500;
        break;
      case "10":
        interval = 50;
        break;
      case "max":
        interval = 0;
        break;
    }

    // Clear the old interval
    clearInterval(this.interval);

    // Set the new interval
    this.interval = setInterval(() => {
      this.train(1);
      this.update();
    }, interval);
  }

  /**
   * Start the auto simulation
   */
  startAuto(): void {
    this.autoEnabled = true;
    this.setAutoSpeed(this.autoSpeed);
  }

  /**
   * Stop the auto simulation
   */
  stopAuto(): void {
    clearInterval(this.interval);
    this.autoEnabled = false;
  }

  /**
   * Go to the next display case
   */
  nextDisplayCase(): void {
    this.currentDisplayCase = (this.currentDisplayCase + 1) % xorTest.length;
    this.update();
  }
}
