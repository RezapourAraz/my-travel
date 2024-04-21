import React from "react";

// mui
import {
  Button,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";

// icons
import SearchIcon from "@mui/icons-material/Search";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

const HotelTab = () => {
  return (
    <Grid container justifyContent="space-between" p={1} alignItems="center">
      <Grid item md={3} xs={12}>
        <Typography
          variant="h6"
          sx={{ fontSize: 16, color: "grey.700", mb: 1 }}
        >
          Destination or Hotel Name
        </Typography>
        <TextField
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LocationOnOutlinedIcon />
              </InputAdornment>
            ),
          }}
          variant="standard"
          placeholder="Where are you going?"
        />
      </Grid>
      <Grid item md={3} xs={12}>
        <Typography
          variant="h6"
          sx={{ fontSize: 16, color: "grey.700", mb: 1 }}
        >
          Check In - Out
        </Typography>
        <TextField
          fullWidth
          variant="standard"
          placeholder="Where are you going?"
        />
      </Grid>
      <Grid item md={3} xs={12}>
        <Typography
          variant="h6"
          sx={{ fontSize: 16, color: "grey.700", mb: 1 }}
        >
          Rooms and Guests
        </Typography>
        <TextField
          fullWidth
          variant="standard"
          placeholder="Where are you going?"
        />
      </Grid>
      <Grid item md={2} xs={12} sx={{ mt: { md: 0, xs: 2 } }}>
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
