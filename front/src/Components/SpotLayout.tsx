import { Box, Grid } from "@mui/material";

type Props = {
    firstCard: React.ReactNode
    secondCard: React.ReactNode
    actionButtons: React.ReactNode[]
}

// NOTE POUR DOV : le rôle du layout est le placement des composant uniquement.
// il reçoit les composants à placer du container.
const SpotLayout = ({firstCard, secondCard, actionButtons} :Props) => {
    return (
        <Box   display="flex" justifyContent="center"
        alignItems="center" minHeight="100vh">
            <Grid container spacing={2}>
                <Grid item xs={6} border={1}>
                   { firstCard}
                </Grid>
                <Grid item xs={6} border={1}>
                   {secondCard } 
                </Grid>
                <Grid item xs={12} border={1}>
                    {actionButtons} 
                </Grid>
            </Grid>
        </Box>
    );
  }

export default SpotLayout;