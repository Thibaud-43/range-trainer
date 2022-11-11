import { Button } from "@mui/material";
import { Position, RangeType, Spot } from "./types";

type Props = {
    fetchSpot:(rangeType: RangeType, position: Position) => Promise<void>;
    spot?: Spot;
    loading: boolean;
    error?:string;
}
const SpotContainer = ({fetchSpot, spot, loading, error}:Props) => {
    return (
      <div className="App">
        {spot && <div>{JSON.stringify(spot)}</div>}
        {loading && <div>loading ...</div>}
        {error && !loading && <div>error</div>}
        <Button onClick={()=>fetchSpot("open", "button")}>New Spot</Button>
      </div>
    );
  }

export default SpotContainer;