import { Button } from "@mui/material";
import { Action } from "./types";

type Props = {
  action: Action;
  responseOnClick: () => void;
}
// TO DO
const ActionButton = ({ action, responseOnClick }: Props) => {
  return (
    <Button variant="contained" className="actionButton" onClick={responseOnClick} >
      {action}
    </Button >
  );
}

export default ActionButton;