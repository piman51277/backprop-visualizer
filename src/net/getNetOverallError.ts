import { Net } from "@piman51277/backprop";
import { xorTest } from "./xorTest";

/**
 * Gets the overall error of the net on the xorTest dataset.
 * @param net The net to get the error of.
 * @returns Error of the net on the xorTest dataset.
 */
export function getNetOverallError(net: Net): number {
  return net.errorDataset(xorTest);
}
