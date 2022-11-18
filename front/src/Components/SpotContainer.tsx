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

const useSpotAnswer = () =>{
  const [spotAnswer, setSpotAnswer] = useState<Action>();

  const answerToSpot = (action?: Action)=>()=>setSpotAnswer(action);
  return {
    spotAnswer,
    answerToSpot,
    resetAnswer: ()=>setSpotAnswer(undefined)
  }
}

const useCheckAnswer = ( spotAnswer: Action | undefined, generateSpotOnClick:()=>void,resetAnswer: () => void, spot?:Spot) =>{
  const [isWrongAnswer, setIsWrongAnswer] = useState<boolean>(false);
  useEffect(() => {
    if (!spot || !spotAnswer){
      return;
    }
    if (spotAnswer === spot?.actionByPosition.action){
      setIsWrongAnswer(false)
      resetAnswer();
      generateSpotOnClick();
    }
    else {
      resetAnswer();
      setIsWrongAnswer(true);
    }
  }, [spotAnswer,generateSpotOnClick,spot,resetAnswer])

  return {isWrongAnswer, resetWrongAnswer: ()=>setIsWrongAnswer(false)}
}

const useSetCardsColor = (spot?:Spot)=>{
  const [cardOneColor, setCardOneColor] = useState<CardColor>();
  const [cardTwoColor, setCardTwoColor] = useState<CardColor>(); 
  useEffect(() => {
    const {cardOneColor, cardTwoColor} = generateCardColor(spot?.hand.suited)
    setCardOneColor(cardOneColor);
    setCardTwoColor(cardTwoColor);
  }, [spot])

  return {cardOneColor, cardTwoColor}
}

const SpotContainer = ({ fetchSpot, spot, loading, error }: Props) => {
  const generateSpotOnClick = useCallback(async () => {
    await fetchSpot("open"); 
  },[fetchSpot]);
  const {spotAnswer, answerToSpot, resetAnswer} = useSpotAnswer();
  const {isWrongAnswer, resetWrongAnswer} = useCheckAnswer(spotAnswer, generateSpotOnClick, resetAnswer, spot);
  const {cardOneColor, cardTwoColor} = useSetCardsColor(spot);
  const actions: Action[] = ["open", "call", "fold"];

  const retryOnClick = ()=>{
    resetAnswer();
    resetWrongAnswer();
    generateSpotOnClick();
  }

  return (
    <Box className="App">
      <SpotLayout
        position={spot && <Position position={spot.actionByPosition.position}/>}
        wrongAnswer={isWrongAnswer && <WrongAnswer onClick={retryOnClick}/>}
        firstCard={spot && cardOneColor && <Card cardValue={spot.hand.firstCard} cardColor={cardOneColor}/>}
        secondCard={spot && cardTwoColor && <Card cardValue={spot.hand.secondCard} cardColor={cardTwoColor}/>}
        actionButtons={isWrongAnswer ? [] : actions.map((action, index) => <ActionButton key={index} action={action} responseOnClick={answerToSpot(action)} />)}
        generateSpotButton={
          !spot && <GenerateSpotButton generateSpotOnClick={generateSpotOnClick} />
        }
      />
    </Box>
  );
};

export default SpotContainer;
