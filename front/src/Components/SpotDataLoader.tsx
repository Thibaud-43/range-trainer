import React, { useState } from 'react';
import axios from "axios";
import { Position, RangeType, Spot } from './types';
import { Box } from '@mui/material';


const useFetchSpot = () => {
  const [error, setError] = useState<string>()
  const [data, setData] = useState<Spot>()
  const [loading, setLoading] = useState<boolean>(false)
  const fetchSpot = async (rangeType: RangeType, position?: Position) => {
    setLoading(true)
    try {
      const data = (await axios
        .get<Spot>(`/back/?rangeType=${rangeType}${position ? `&position=${position}` : ""}`)).data
      setData(data);
      setLoading(false);
    }
    catch (e) {
      setError(undefined)
      setLoading(false)
    }
  }
  const fetchSpotResult = {
    data,
    error,
    loading,
  };
  return { fetchSpot, fetchSpotResult }
}

export type FetchSpot = (rangeType: RangeType, position?: Position) => Promise<void>;

type Props = {
  children: (fetchSpot: FetchSpot, spot: Spot | undefined, loading: boolean, error?: string) => React.ReactNode
}


// NOTE POUR DOV : le rôle du dataLoader est de faire l'appel à l'api et de transmettre
// les données au composant qu'il recoit des props (il n'appel pas le composant directement
// car dans l'idée un data loader peut être réutiliser pour d'autres composatn qui ont besoin d'une certaine donnée)
const SpotDataLoader = ({ children }: Props) => {
  const { fetchSpot, fetchSpotResult } = useFetchSpot();
  const { data, error, loading } = fetchSpotResult;
  return (
    <Box className="App">
      {children(fetchSpot, data, loading, error)}
    </Box>
  );
}

export default SpotDataLoader;