import { Net } from "@piman51277/backprop";

export function newNet(): Net {
  return Net.create(2, 1, 3, 1);
}
