import { getCanvasObjects } from "./canvas/getCanvasObjects";
import { AutoSpeed, Simulation } from "./simulation/Simulation";
import { ready } from "./util/ready";

ready(() => {
  const [canvas, ctx] = getCanvasObjects();

  canvas.width = 360;
  canvas.height = 400;

  const sim = new Simulation(ctx);
  sim.update();

  //handle all the buttons

  //step buttons
  const buttonSuffixes = ["1", "5", "10", "100"];
  const values = [1, 5, 10, 100];
  for (let i = 0; i < buttonSuffixes.length; i++) {
    const fullId = `btn-step-plus${buttonSuffixes[i]}`;
    const button = document.getElementById(fullId);
    button?.addEventListener("click", () => {
      sim.train(values[i]);
      sim.update();
    });
  }

  //auto buttons
  const autoButtonSuffixes = ["1", "10", "max"];
  const autoValues = ["1", "10", "max"];
  for (let i = 0; i < autoButtonSuffixes.length; i++) {
    const fullId = `btn-auto-${autoButtonSuffixes[i]}`;
    const button = document.getElementById(fullId);
    button?.addEventListener("click", () => {
      sim.setAutoSpeed(autoValues[i] as AutoSpeed);
      sim.startAuto();
    });
  }

  //auto stop
  const autoStopButton = document.getElementById("btn-auto-stop");
  autoStopButton?.addEventListener("click", () => {
    sim.stopAuto();
  });

  //next display case
  const nextDisplayCaseButton = document.getElementById("btn-nextcase");
  nextDisplayCaseButton?.addEventListener("click", () => {
    sim.nextDisplayCase();
  });

  //reset
  const resetButton = document.getElementById("btn-reset");
  resetButton?.addEventListener("click", () => {
    sim.reset();
  });
});
