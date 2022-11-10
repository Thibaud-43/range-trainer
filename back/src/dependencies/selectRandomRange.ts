import { Range } from "../../ranges/openRanges/types";
import { randomIntFromInterval } from "./utils";

export const selectRandomRange = (ranges: Range[]): Range =>
  ranges[randomIntFromInterval({ min: 0, max: ranges.length - 1 })];
