import { Box } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import ActionButton from "./ActionButton";
import Card from "./Card";
import GenerateSpotButton from "./GenerateSpotButton";
import Position from "./Position";
import SpotLayout from "./SpotLayout";
import { Action, RangeType, Spot,Position as PositionType, CardColor } from "./types";
import WrongAnswer from "./WrongAnswer";

type Props = {
  fetchSpot: (rangeType: RangeType, position?: PositionType) => Promise<void>;
  spot?: Spot;
  loading: boolean;
  error?: string;
};


export const randomIntFromInterval = ({
  min,
  max,
}: {
  min: number;
  max: number;
}): number => {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const generateCardColor = (suited?: boolean)=>{
  const CARD_COLOR_MAPPER: CardColor[] = [
    "spades",
    "clubs",
    "hearts",
    "diamonds",
  ]

  if (suited){
    const cardColor = CARD_COLOR_MAPPER[randomIntFromInterval({min:0, max:3})];
    return {cardOneColor:cardColor, cardTwoColor:cardColor};
  }
  else{
    const randomNumberOne = randomIntFromInterval({min:0, max:3});
    const cardOneColor = CARD_COLOR_MAPPER[randomNumberOne];
    CARD_COLOR_MAPPER.splice(randomNumberOne, 1);
    const randomNumberTwo = randomIntFromInterval({min:0, max:2});
    const cardTwoColor = CARD_COLOR_MAPPER[randomNumberTwo];
    return {cardOneColor, cardTwoColor};
  }
}
// NOTE POUR DOV : les props de ce composant viennent du data loader qui fait le call API
// et qui fournit les données au container.
// Le rôle du container est de contenir la logique du composant.
const SpotContainer = ({ fetchSpot, spot, loading, error }: Props) => {
  const generateSpotOnClick = useCallback(async () => {
    await fetchSpot("open"); // TODO: 2 TextField from buttons
  },[fetchSpot]);

  const [response, setResponse] = useState<Action>();
  const [wrongAnswer, setWrongAnswer] = useState<boolean>(false);

  const actions: Action[] = ["open", "call", "fold"]; // selon le rangeType
  const responseOnClick = (action: Action) => () => {
    return setResponse(action);
  };

  useEffect(() => {
    if (!spot || !response){
      return;
    }
    setWrongAnswer(false)
    if (response === spot?.actionByPosition.action){
      setResponse(undefined);
      setWrongAnswer(false);
      generateSpotOnClick();
    }
    else {
      setResponse(undefined);
      setWrongAnswer(true);
    }
  }, [response,generateSpotOnClick,spot])

  const {cardOneColor, cardTwoColor} = generateCardColor(spot?.hand.suited)

  const retryOnClick = ()=>{
    setResponse(undefined);
    setWrongAnswer(false);
    generateSpotOnClick();
  }

  return (
    <Box className="App">
      <SpotLayout
        position={spot && <Position position={spot.actionByPosition.position}/>}
        wrongAnswer={wrongAnswer && <WrongAnswer onClick={retryOnClick}/>}
        firstCard={spot && <Card cardValue={spot.hand.firstCard} cardColor={cardOneColor}/>}
        secondCard={spot && <Card cardValue={spot.hand.secondCard} cardColor={cardTwoColor}/>}
        actionButtons={wrongAnswer ? [] : actions.map((action, index) => <ActionButton key={index} action={action} responseOnClick={responseOnClick(action)} />)}
        generateSpotButton={
          !spot && <GenerateSpotButton generateSpotOnClick={generateSpotOnClick} />
        }
      />
    </Box>
  );
};

export default SpotContainer;
