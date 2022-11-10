import { ActionByPosition } from "../domain/types";
import { randomIntFromInterval } from "./utils";

export const selectRandomActionByPosition = (
  actionsByPositions: ActionByPosition[]
): ActionByPosition =>
  actionsByPositions[
    randomIntFromInterval({
      min: 0,
      max: actionsByPositions.length - 1,
    })
  ];
