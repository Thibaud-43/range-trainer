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


// NOTE POUR DOV : les props de ce composant viennent du data loader qui fait le call API
// et qui fournit les données au container. 
// Le rôle du container est de contenir la logique du composant.
const SpotContainer = ({fetchSpot, spot, loading, error}:Props) => {
    return (
      <div className="App">
        <SpotLayout firstCard={<Card/>} secondCard={<Card/>} actionButtons={[<ActionButton/>, <ActionButton/>]}/>
      </div>
    );
  }

export default SpotContainer;