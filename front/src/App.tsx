import { Box } from '@mui/material';
import React from 'react';
import SpotContainer from './Components/SpotContainer';
import SpotDataLoader, { FetchSpot } from './Components/SpotDataLoader';
import { Spot } from './Components/types';

function App() {
  return (
    <Box className="App">
      <SpotDataLoader>
        {(fetchSpot: FetchSpot, spot: Spot | undefined, loading: boolean, error: string | undefined) => (<SpotContainer fetchSpot={fetchSpot} spot={spot} loading={loading} error={error} />)}
      </SpotDataLoader>
    </Box>
  );
}

export default App;
