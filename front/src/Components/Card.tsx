import { Box } from "@mui/system";
import { Card as CardType, CardColor } from "./types";

type Props = {
  cardValue: CardType;
  cardColor: CardColor;
}

const CARD_VALUE_MAPPER = {
  "2": "2",
  "3": "3",
  "4": "4",
  "5": "5",
  "6": "6",
  "7": "7",
  "8": "8",
  "9": "9",
  "10": "10",
  "J": "jack",
  "Q": "queen",
  "K": "king",
  "A": "ace",
}

const getImgSrc = (cardValue: CardType, cardColor: CardColor)=>{
  return `PNG-cards/${CARD_VALUE_MAPPER[cardValue]}_of_${cardColor}.png`
}

const Card = ({ cardValue, cardColor }: Props) => {

  return (
    <Box className="card">
      <img src={getImgSrc(cardValue, cardColor)} alt="card1" height={200} width={"auto"}/>
    </Box>
  );
}

export default Card;