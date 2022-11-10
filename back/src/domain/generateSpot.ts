import { Dependencies } from "../dependencies/types";
import { Position, Range } from "../../ranges/openRanges/types";
import { RangeType, Spot } from "./types";

const selectActionByPosition =
  (
    selectRandomActionByPosition: Dependencies["selectRandomActionByPosition"]
  ) =>
  (range: Range, position?: Position) => {
    if (!position) {
      return selectRandomActionByPosition(range.actionsByPositions);
    }
    const ActionOfSpecificPosition = range.actionsByPositions.filter(
      (actionByPosition) => actionByPosition.position === position
    );
    return selectRandomActionByPosition(ActionOfSpecificPosition);
  };

export const generateSpot =
  ({
    fetchAllRangesForGivenType,
    selectRandomRange,
    selectRandomActionByPosition,
  }: Dependencies) =>
  ({
    position,
    rangeType,
  }: {
    position?: Position;
    rangeType: RangeType;
  }): Spot => {
    const allRanges = fetchAllRangesForGivenType(rangeType);
    const randomRange = selectRandomRange(allRanges);
    const actionByPosition = selectActionByPosition(
      selectRandomActionByPosition
    )(randomRange, position);
    const spot = {
      hand: randomRange.hand,
      actionByPosition,
    };
    return spot;
  };
