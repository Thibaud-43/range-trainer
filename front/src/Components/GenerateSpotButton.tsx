import { Button } from "@mui/material";

type Props = {
  generateSpotOnClick: () => Promise<void>;
}



// TO DO
const GenerateSpotButton = ({ generateSpotOnClick }: Props) => {


  return (
    <Button variant="contained" onClick={generateSpotOnClick}>
      Generate Spot
    </Button>
  );
}

export default GenerateSpotButton;