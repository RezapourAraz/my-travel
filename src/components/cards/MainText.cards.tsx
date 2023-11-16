import React from "react";

// mui
import { Box, Typography } from "@mui/material";

const MainTextCard = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: 500,
        flexDirection: "column",
      }}
    >
      <Typography variant="h2" color="grey.200">
        Let's The World Together!
      </Typography>
      <Typography variant="h6" color="grey.200">
        Find awesome hotel, tour, car and activities in London
      </Typography>
    </Box>
  );
};

export default MainTextCard;
