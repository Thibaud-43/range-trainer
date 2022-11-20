import { Range } from "../types";

export const three: Range[] = [
  {
    hand: { firstCard: "3", secondCard: "2", suited: false },
    actionsByPositions: [
      {
        position: "button",
        action: "fold",
      },
      {
        position: "cut-off",
        action: "fold",
      },
      {
        position: "hi-jack",
        action: "fold",
      },
      {
        position: "lo-jack",
        action: "fold",
      },
      {
        position: "small-blind",
        action: "call",
      },
    ],
  },
];
