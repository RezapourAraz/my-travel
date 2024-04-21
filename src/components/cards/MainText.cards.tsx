import React, { FC } from "react";

// mui
import { Box, Typography } from "@mui/material";

type IMainTextCardProps = {
  title: string;
  description: string;
};

const MainTextCard: FC<IMainTextCardProps> = ({ title, description }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: 550,
        flexDirection: "column",
        textAlign: { md: "initial", xs: "center" },
      }}
    >
      <Typography variant="h2" color="grey.200">
        {title}
      </Typography>
      <Typography variant="h6" color="grey.200">
        {description}
      </Typography>
    </Box>
  );
};

export default MainTextCard;
