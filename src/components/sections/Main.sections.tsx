import React from "react";

// mui
import { Box, Typography } from "@mui/material";

const MainSection = () => {
  return (
    <Box
      sx={{
        backgroundImage: "url(img1-2.jpeg)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: 800,
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        zIndex: -5,
      }}
    >
      <Box
        sx={{ bgcolor: "rgba(0,0,0, 0.4)", width: "100%", height: "100%" }}
      />
    </Box>
  );
};

export default MainSection;
