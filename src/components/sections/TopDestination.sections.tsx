import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import DestinationCard from "../cards/Destination.cards";

const TopDestinationSection = () => {
  return (
    <Container maxWidth="lg">
      <Grid container sx={{ my: 7 }}>
        <Grid
          item
          md={12}
          sx={{ alignItems: "center", textAlign: "center", p: 1, mb: 4 }}
        >
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            Top Destination
          </Typography>
        </Grid>
        <Grid container item md={12} justifyContent="space-between">
          <Grid item md={5.9}>
            <DestinationCard img="img2-1.jpeg" alt="United Kingdom" />
          </Grid>
          <Grid item md={5.9}>
            <DestinationCard img="img2-2.jpeg" alt="Turkey" />
          </Grid>
        </Grid>

        <Grid container item md={12} justifyContent="space-between" mt={2}>
          <Grid container item md={5.9} justifyContent="space-between">
            <Grid item md={5.8}>
              <DestinationCard img="img3.jpeg" alt="United States" />
            </Grid>
            <Grid item md={5.8}>
              <DestinationCard img="img3-2.jpeg" alt="Ukraine" />
            </Grid>
          </Grid>

          <Grid container item md={5.9} justifyContent="space-between">
            <Grid item md={5.8}>
              <DestinationCard img="img4-1.jpeg" alt="France" />
            </Grid>
            <Grid item md={5.8}>
              <DestinationCard img="img6.jpeg" alt="India" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default TopDestinationSection;
