import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import DestinationCard from "../cards/Destination.cards";

const TopDestinationSection = () => {
  return (
    <Container maxWidth="lg">
      <Grid container sx={{ mt: { md: 7, xs: 25 }, mb: 7 }}>
        <Grid
          item
          md={12}
          sx={{ alignItems: "center", textAlign: "center", p: 1, mb: 4 }}
        >
          <Typography
            variant="h4"
            component="span"
            sx={{
              fontWeight: "bold",
              p: 1,
              borderBottom: 1,
              borderWidth: 2,
              borderColor: "primary.main",
            }}
          >
            Top Destination
          </Typography>
        </Grid>
        <Grid container item md={12} justifyContent="space-between">
          <Grid item md={5.9} xs={12}>
            <DestinationCard id="1" img="img2-1.jpeg" alt="United Kingdom" />
          </Grid>
          <Grid item md={5.9} xs={12}>
            <DestinationCard id="2" img="img2-2.jpeg" alt="Turkey" />
          </Grid>
        </Grid>

        <Grid
          container
          item
          md={12}
          xs={12}
          justifyContent="space-between"
          mt={2}
        >
          <Grid container item md={5.9} xs={12} justifyContent="space-between">
            <Grid item md={5.8} xs={12}>
              <DestinationCard id="3" img="img3.jpeg" alt="United States" />
            </Grid>
            <Grid item md={5.8} xs={12}>
              <DestinationCard id="4" img="img3-2.jpeg" alt="Ukraine" />
            </Grid>
          </Grid>

          <Grid container item md={5.9} justifyContent="space-between">
            <Grid item md={5.8} xs={12}>
              <DestinationCard id="5" img="img4-1.jpeg" alt="France" />
            </Grid>
            <Grid item md={5.8} xs={12}>
              <DestinationCard id="6" img="img6.jpeg" alt="India" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default TopDestinationSection;
