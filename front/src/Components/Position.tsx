import { Chip } from "@mui/material";
import {Position as PositionType} from "./types"
type Props = {
  position: PositionType;
}

const Position = ({ position }: Props) => {

  return (
    <Chip className="postion" label={position}/>
  );
}

export default Position;