import { Range } from "../types";

export const four: Range[] = [
  {
    hand: { firstCard: "4", secondCard: "3", suited: false },
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
        action: "fold",
      },
    ],
  },
  {
    hand: { firstCard: "4", secondCard: "2", suited: false },
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
        action: "fold",
      },
    ],
  },
];
