import React, { useState } from 'react';
import axios from "axios";
import { Position, RangeType, Spot } from './types';


const useFetchSpot = () =>{
    const [error, setError] = useState<string>()
    const [data, setData] = useState<Spot>()
    const [loading, setLoading] = useState<boolean>(false)
    const fetchSpot = async (rangeType: RangeType, position: Position) =>{
        setLoading(true)
        try {
            const data = (await axios
            .get<Spot>(`http://localhost:8000/?rangeType=${rangeType}&position=${position}`)).data
            setData(data);
            setLoading(false);
        }
        catch(e) {
            setError(undefined)
            setLoading(false)
        }
    }
    const fetchSpotResult = {
        data,
        error,
        loading,
    };
    return {fetchSpot, fetchSpotResult}
}

export type FetchSpot = (rangeType: RangeType, position: Position) => Promise<void>;

type Props = {
  children: (fetchSpot: FetchSpot, spot: Spot | undefined, loading: boolean, error?: string )=>React.ReactNode
}

const SpotDataLoader = ({children}:Props) => {
    const {fetchSpot, fetchSpotResult}= useFetchSpot();
    const {data, error, loading} = fetchSpotResult;
    return (
      <div className="App">
       {children(fetchSpot, data, loading, error)}
      </div>
    );
  }

export default SpotDataLoader;