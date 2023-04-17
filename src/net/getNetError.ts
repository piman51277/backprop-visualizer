import { Net } from "@piman51277/backprop";
import { xorTest } from "./xorTest";
export function getNetError(net: Net): number[] {
  const errors: number[] = [];
  for (const entry of xorTest) {
    errors.push(net.error(entry[0], entry[1]));
  }
  return errors;
}
