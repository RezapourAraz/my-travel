import React, { ReactNode } from "react";

import { Box } from "@mui/material";
import TopHeaderAppbar from "../appbars/TopHeader.appbars";
import BottomHeaderAppbar from "../appbars/BottomHeader.appbars";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Box>
      <TopHeaderAppbar />
      <BottomHeaderAppbar />
      <Box component="main">{children}</Box>
    </Box>
  );
};

export default MainLayout;
