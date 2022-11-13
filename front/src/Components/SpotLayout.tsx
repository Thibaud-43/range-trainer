import { Box, Grid } from "@mui/material";
import React from "react";

type Props = {
    firstCard: React.ReactNode
    secondCard: React.ReactNode
    actionButtons: React.ReactNode[]
    generateSpotButton: React.ReactNode | undefined
}

// NOTE POUR DOV : le rôle du layout est le placement des composant uniquement.
// il reçoit les composants à placer du container.
const SpotLayout = ({firstCard, secondCard, actionButtons, generateSpotButton} :Props) => {
    return (
        <Box   display="flex" justifyContent="center"
        alignItems="center" minHeight="100vh">
            <Grid container justifyContent="center"
        alignItems="center" >
                <Grid item xs={6} border={1}>
                   { firstCard}
                </Grid>
                <Grid item xs={6} border={1}>
                   {secondCard }
                </Grid>
                <Grid item xs={12} border={1}>
                    {actionButtons}
                </Grid>
                <Grid container item xs={12} border={1} marginTop={20} justifyContent="center" >
                    {generateSpotButton}
                </Grid>
            </Grid>
        </Box>
    );
  }

export default SpotLayout;