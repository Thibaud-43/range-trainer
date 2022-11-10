import { ActionByPosition, RangeType } from "../domain/types";
import { Range } from "../../ranges/openRanges/types";

export type Dependencies = {
  fetchAllRangesForGivenType: (rangeType: RangeType) => Range[];
  selectRandomRange: (ranges: Range[]) => Range;
  selectRandomActionByPosition: (
    actionsByPositions: ActionByPosition[]
  ) => ActionByPosition;
};
