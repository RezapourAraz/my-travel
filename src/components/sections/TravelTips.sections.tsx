import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";

const TravelTipsSection = () => {
  return (
    <Grid
      sx={{
        backgroundImage:
          "url(https://mytravel.madrasthemes.com/wp-content/uploads/2022/02/img11920500.jpeg)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: 500,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h4" sx={{ color: "common.white", mb: 2 }}>
            Travel Tips
          </Typography>
          <Typography
            variant="h6"
            sx={{ width: 600, color: "common.white", my: 3 }}
          >
            Northern Ireland’s is now contingent. Britain is getting a divorce
            Northern Ireland is being offered a trial separation for Britain
            there is a one
          </Typography>
          <Button
            variant="outlined"
            sx={{
              color: "common.white",
              borderColor: "common.white",
              width: 200,
              p: 1.5,
            }}
          >
            Get Inspired
          </Button>
        </Box>
      </Box>
    </Grid>
  );
};

export default TravelTipsSection;
