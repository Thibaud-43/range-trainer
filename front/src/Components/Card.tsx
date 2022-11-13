import { Box } from "@mui/system";
import { Card as CardType } from "./types";

type Props = {
  cardValue: CardType;
}
// TO DO

const Card = ({ cardValue }: Props) => {

  return (
    <Box className="card">
      {cardValue}
    </Box>
  );
}

export default Card;