import { Net } from "@piman51277/backprop";

/**
 * Creates a new net of the correct size
 * @returns The new net
 */
export function newNet(): Net {
  return Net.create(2, 1, 3, 1);
}
