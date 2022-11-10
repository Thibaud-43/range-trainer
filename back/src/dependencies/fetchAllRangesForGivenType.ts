import openRanges from "../../ranges/openRanges/openRanges";
import { Range } from "../../ranges/openRanges/types";
import { RangeType } from "../domain/types";

export const fetchAllRangesForGivenType = (rangeType: RangeType): Range[] => {
  if (rangeType === "open") return openRanges;
  return [];
};
