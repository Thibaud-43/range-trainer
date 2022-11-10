import { fetchAllRangesForGivenType } from "../dependencies/fetchAllRangesForGivenType";
import { selectRandomActionByPosition } from "../dependencies/selectRandomActionByPosition";
import { selectRandomRange } from "../dependencies/selectRandomRange";
import { Dependencies } from "../dependencies/types";

export const buildDependencies = (): Dependencies => ({
  fetchAllRangesForGivenType: fetchAllRangesForGivenType,
  selectRandomRange: selectRandomRange,
  selectRandomActionByPosition: selectRandomActionByPosition,
});
