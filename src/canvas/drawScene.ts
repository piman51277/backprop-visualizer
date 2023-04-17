import { drawBiasNeuron } from "./drawBiasNeuron";
import { drawNeuron } from "./drawNeuron";
import { drawWeight } from "./drawWeight";

/**
 * Draws the neural network
 * @param ctx Rendering context
 * @param neurons Neural network output
 * @param weights Weights of the neural network
 * @param biases Biases of the neural network
 */
export function drawScene(
  ctx: CanvasRenderingContext2D,
  neurons: number[][],
  weights: number[][],
  biases: number[][]
) {

  //layer 0 to layer 1 weights
  drawWeight(ctx, 40, 90, 180, 40, weights[0][0]);
  drawWeight(ctx, 40, 90, 180, 140, weights[0][1]);
  drawWeight(ctx, 40, 90, 180, 240, weights[0][2]);
  drawWeight(ctx, 40, 190, 180, 40, weights[0][3]);
  drawWeight(ctx, 40, 190, 180, 140, weights[0][4]);
  drawWeight(ctx, 40, 190, 180, 240, weights[0][5]);

  //layer 1 to layer 2 weights
  drawWeight(ctx, 180, 40, 320, 140, weights[1][0]);
  drawWeight(ctx, 180, 140, 320, 140, weights[1][1]);
  drawWeight(ctx, 180, 240, 320, 140, weights[1][2]);

  //layer 0 to layer 1 bias weights
  drawWeight(ctx, 40, 360, 180, 40, biases[0][0]);
  drawWeight(ctx, 40, 360, 180, 140, biases[0][1]);
  drawWeight(ctx, 40, 360, 180, 240, biases[0][2]);

  //layer 1 to layer 2 bias weights
  drawWeight(ctx, 180, 360, 320, 140, biases[1][0]);

  //neurons are in a 2-3-1 configuration, centered around y = 140

  //draw the neurons

  //layer 0
  drawNeuron(ctx, 40, 90, neurons[0][0]);
  drawNeuron(ctx, 40, 190, neurons[0][1]);

  //layer 1
  drawNeuron(ctx, 180, 40, neurons[1][0]);
  drawNeuron(ctx, 180, 140, neurons[1][1]);
  drawNeuron(ctx, 180, 240, neurons[1][2]);

  //layer 2
  drawNeuron(ctx, 320, 140, neurons[1][1]);

  //draw the bias neurons
  drawBiasNeuron(ctx, 40, 360);
  drawBiasNeuron(ctx, 180, 360);
}
