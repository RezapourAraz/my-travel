import React, { ReactNode } from "react";

import { Box, Divider } from "@mui/material";
import TopHeaderAppbar from "../appbars/TopHeader.appbars";
import BottomHeaderAppbar from "../appbars/BottomHeader.appbars";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Box>
      <TopHeaderAppbar />
      <Divider sx={{ bgcolor: "grey.700" }} />
      <BottomHeaderAppbar />
      <Box component="main">{children}</Box>
    </Box>
  );
};

export default MainLayout;
