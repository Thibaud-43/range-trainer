import { generateSpot, Position, RangeType, Spot } from "../generateHand";

describe("first", () => {
  test("should first", () => {
    // GIVEN
    const position: Position = "button";
    const spot: RangeType = "open";
    // WHEN
    const actual = generateSpot({ position, spot });

    // THEN
    const expected: Spot = {
      hand: {
        firstCard: "A",
        secondCard: "A",
        suited: false,
      },
      actionByPosition: { action: "open", position: "button" },
    };

    expect(actual).toEqual(expected);
  });
});
