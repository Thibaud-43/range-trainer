import { Box, Grid, Stack } from "@mui/material";
import React from "react";

type Props = {
    position: React.ReactNode
    firstCard: React.ReactNode
    wrongAnswer: React.ReactNode
    secondCard: React.ReactNode
    actionButtons: React.ReactNode[]
    generateSpotButton: React.ReactNode | undefined
}

// NOTE POUR DOV : le rôle du layout est le placement des composant uniquement.
// il reçoit les composants à placer du container.
const SpotLayout = ({ firstCard, secondCard, actionButtons, generateSpotButton, position,wrongAnswer }: Props) => {
    return (
        <Box display="flex" justifyContent="center"
            alignItems="center" minHeight="100vh">
            <Grid container justifyContent="center"
                alignItems="center" >

                <Grid container item xs={12} marginBottom={2} justifyContent="center">
                    {position}
                </Grid>
                <Grid container item xs={6} justifyContent="flex-end" paddingRight={2}>
                    {firstCard}
                </Grid>
                <Grid container item xs={6} justifyContent="flex-start" paddingLeft={2}>
                    {secondCard}
                </Grid>
                <Grid container item xs={12} marginTop={2} justifyContent="center">
                    {wrongAnswer}
                </Grid>
                <Grid container item xs={12} marginTop={2} justifyContent="center">
                    <Stack direction="row" spacing={2}>
                        {actionButtons}
                    </Stack>
                </Grid>
                <Grid container item xs={12} marginTop={20} justifyContent="center" >
                    {generateSpotButton}
                </Grid>
            </Grid>
        </Box>
    );
}

export default SpotLayout;