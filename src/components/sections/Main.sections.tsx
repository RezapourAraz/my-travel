import React, { FC } from "react";

// mui
import { Box } from "@mui/material";

type IMainSectionProps = {
  image?: string;
};

const MainSection: FC<IMainSectionProps> = ({ image }) => {
  return (
    <Box
      sx={{
        backgroundImage: image ? `url(${image})` : "url(img1-2.jpeg)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: { md: 800, xs: 1050 },
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
