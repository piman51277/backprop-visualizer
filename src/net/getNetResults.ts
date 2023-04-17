import { Net } from "@piman51277/backprop";
import { xorTest } from "./xorTest";
export function getNetResults(net: Net): number[] {
  const results: number[] = [];
  for (const entry of xorTest) {
    results.push(net.eval(entry[0])[2][0]);
  }

  return results;
}