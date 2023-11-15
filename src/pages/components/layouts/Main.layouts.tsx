import React, { ReactNode } from "react";

import { Box } from "@mui/material";
import TopHeaderAppbar from "../appbars/TopHeader.appbars";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Box>
      <TopHeaderAppbar />
      <Box component="main">{children}</Box>
    </Box>
  );
};

export default MainLayout;
