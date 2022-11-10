import { generateSpot } from "../generateSpot";
import { Position, RangeType, Spot } from "../types";

const dependencies = {
  fetchAllRangesForGivenType: jest.fn(),
  selectRandomRange: jest.fn(),
  selectRandomActionByPosition: jest.fn(),
};
describe("first", () => {
  test("should first", () => {
    // GIVEN
    const position: Position = "button";
    const rangeType: RangeType = "open";

    dependencies.fetchAllRangesForGivenType.mockReturnValueOnce([
      {
        hand: { firstCard: "2", secondCard: "2", suited: false },
        actionsByPositions: [
          {
            position: "button",
            action: "open",
          },
          {
            position: "cut-off",
            action: "open",
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
    ]);
    dependencies.selectRandomRange.mockReturnValueOnce({
      hand: { firstCard: "2", secondCard: "2", suited: false },
      actionsByPositions: [
        {
          position: "button",
          action: "open",
        },
        {
          position: "cut-off",
          action: "open",
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
    });
    dependencies.selectRandomActionByPosition.mockReturnValueOnce({
      position: "button",
      action: "open",
    });
    // WHEN
    const actual = generateSpot(dependencies)({ position, rangeType });

    // THEN
    const expected: Spot = {
      hand: {
        firstCard: "2",
        secondCard: "2",
        suited: false,
      },
      actionByPosition: { action: "open", position: "button" },
    };

    expect(actual).toEqual(expected);
  });
});
