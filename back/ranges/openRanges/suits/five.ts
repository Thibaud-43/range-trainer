import { Range } from "../types";

export const five: Range[] = [
  {
    hand: { firstCard: "5", secondCard: "4", suited: false },
    actionsByPositions: [
      {
        position: "button",
        action: "open",
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
  {
    hand: { firstCard: "5", secondCard: "3", suited: false },
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
  {
    hand: { firstCard: "5", secondCard: "2", suited: false },
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
