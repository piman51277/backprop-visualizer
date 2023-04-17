import { Net } from "@piman51277/backprop";
import { xorTest } from "./xorTest";

/**
 * Gets the error of the network for each test case
 * @param net The network to get the error for
 * @returns error for each test case
 */
export function getNetError(net: Net): number[] {
  const errors: number[] = [];
  for (const entry of xorTest) {
    errors.push(net.error(entry[0], entry[1]));
  }
  return errors;
}
