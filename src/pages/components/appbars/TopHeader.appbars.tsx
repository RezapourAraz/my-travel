import React from "react";

// mui
import { AppBar, Box, Grid, Typography, Divider } from "@mui/material";

const TopHeaderAppbar = () => {
  return (
    <Grid container sx={{ px: 3, py: 3, bgcolor: "blue" }}>
      <Grid
        container
        item
        md={2}
        sx={{ justifyContent: "space-between", alignItems: "center" }}
      >
        <Typography variant="subtitle2">+98-987-987-9876</Typography>
        <Divider variant="middle" orientation="vertical" flexItem />
        <Typography variant="subtitle2">info@mytravel.com</Typography>
      </Grid>
    </Grid>
  );
};

export default TopHeaderAppbar;
