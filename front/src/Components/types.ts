export type Position =
  | "lo-jack"
  | "hi-jack"
  | "cut-off"
  | "button"
  | "small-blind"
  | "big-blind";

export type RangeType = "open" | "call";

export type Action = "open" | "call" | "fold";

export type ActionByPosition = {
  action: Action;
  position: Position;
};

export type Card =
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

export type Hand = {
  firstCard: Card;
  secondCard: Card;
  suited: boolean;
};

export type Spot = {
  hand: Hand;
  actionByPosition: ActionByPosition;
};

export type CardColor = "clubs" | "diamonds" | "spades" | "hearts";
