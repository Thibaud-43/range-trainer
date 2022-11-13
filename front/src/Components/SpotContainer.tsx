import { Box } from "@mui/material";
import ActionButton from "./ActionButton";
import Card from "./Card";
import GenerateSpotButton from "./GeneraterSpotButton";
import SpotLayout from "./SpotLayout";
import { Position, RangeType, Spot } from "./types";

type Props = {
  fetchSpot: (rangeType: RangeType, position: Position) => Promise<void>;
  spot?: Spot;
  loading: boolean;
  error?: string;
};

// NOTE POUR DOV : les props de ce composant viennent du data loader qui fait le call API
// et qui fournit les données au container.
// Le rôle du container est de contenir la logique du composant.
const SpotContainer = ({ fetchSpot, spot, loading, error }: Props) => {
  const generateSpotOnClick = async () => {
    await fetchSpot("open", "button"); // TODO: 2 TextField from buttons
  };

  console.log({ spot, loading, error });

  return (
    <Box className="App">
      <SpotLayout
        firstCard={spot && <Card cardValue={spot.hand.firstCard} />}
        secondCard={spot && <Card cardValue={spot.hand.secondCard} />}
        actionButtons={[<ActionButton />, <ActionButton />]}
        generateSpotButton={
          !spot && <GenerateSpotButton generateSpotOnClick={generateSpotOnClick} />
        }
      />
    </Box>
  );
};

export default SpotContainer;
