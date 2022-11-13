import ActionButton from "./ActionButton";
import Card from "./Card";
import SpotLayout from "./SpotLayout";
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
        <SpotLayout firstCard={<Card/>} secondCard={<Card/>} actionButtons={[<ActionButton/>, <ActionButton/>]}/>
      </div>
    );
  }

export default SpotContainer;