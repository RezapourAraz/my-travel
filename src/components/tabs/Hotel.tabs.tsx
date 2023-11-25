import React from "react";

// mui
import { Button, Grid, TextField, Typography } from "@mui/material";

// icons
import SearchIcon from "@mui/icons-material/Search";

const HotelTab = () => {
  return (
    <Grid container justifyContent="space-between" p={1} alignItems="center">
      <Grid item md={3}>
        <Typography variant="h6" sx={{ fontSize: 16, color: "grey.700" }}>
          Destination or Hotel Name
        </Typography>
        <TextField variant="standard" placeholder="Where are you going?" />
      </Grid>
      <Grid item md={3}>
        <Typography variant="h6" sx={{ fontSize: 16, color: "grey.700" }}>
          Check In - Out
        </Typography>
        <TextField variant="standard" placeholder="Where are you going?" />
      </Grid>
      <Grid item md={3}>
        <Typography variant="h6" sx={{ fontSize: 16, color: "grey.700" }}>
          Rooms and Guests
        </Typography>
        <TextField variant="standard" placeholder="Where are you going?" />
      </Grid>
      <Grid item md={2}>
        <Button
          fullWidth
          variant="contained"
          startIcon={<SearchIcon />}
          sx={{ p: 1 }}
        >
          Search
        </Button>
      </Grid>
    </Grid>
  );
};

export default HotelTab;
