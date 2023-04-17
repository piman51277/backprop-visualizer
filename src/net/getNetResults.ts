import { Net } from "@piman51277/backprop";
import { xorTest } from "./xorTest";

/**
 * Gets the results of the network for each test case
 * @param net The network to get the results for
 * @returns The results for each test case
 */
export function getNetResults(net: Net): number[] {
  const results: number[] = [];
  for (const entry of xorTest) {
    results.push(net.eval(entry[0])[2][0]);
  }

  return results;
}
