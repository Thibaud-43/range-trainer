export type Position =
  | "lo-jack"
  | "hi-jack"
  | "cut-off"
  | "button"
  | "small-blind"
  | "big-blind";

type Action = "open" | "call" | "fold";

type ActionByPosition = {
  action: Action;
  position: Position;
};

type Card =
  | "A"
  | "K"
  | "Q"
  | "J"
  | "10"
  | "9"
  | "8"
  | "7"
  | "6"
  | "5"
  | "4"
  | "3"
  | "2";

type Hand = {
  firstCard: Card;
  secondCard: Card;
  suited: boolean;
};

type Spot = {
  hand: Hand;
  actionByPosition: ActionByPosition;
};

export type Range = {
  hand: Hand;
  actionsByPositions: ActionByPosition[];
};
