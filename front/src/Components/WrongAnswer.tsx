import { Alert, AlertTitle, Button } from "@mui/material";

type Props = {
    onClick: ()=>void;
}

const WrongAnswer = ({onClick}:Props) => {

  return (
    <Alert severity="error"   action={
        <Button color="inherit" size="small" onClick={onClick}>
          RETRY
        </Button>
      }>
        <AlertTitle>Wrong Answer</AlertTitle>
    </Alert>
  );
}

export default WrongAnswer;