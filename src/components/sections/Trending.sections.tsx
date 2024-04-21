import React from "react";

// mui
import { Container, Grid, Typography, Box } from "@mui/material";
import TrendingTab from "../tabs/Trending.tabs";

const TrendingSection = () => {
  return (
    <Container maxWidth="lg">
      <Grid container sx={{ my: 3 }}>
        <Grid
          item
          md={12}
          xs={12}
          sx={{ alignItems: "center", textAlign: "center", p: 1, mb: 1 }}
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
            Trending
          </Typography>
        </Grid>
        <TrendingTab />
      </Grid>
    </Container>
  );
};

export default TrendingSection;
