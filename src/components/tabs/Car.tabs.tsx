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

const CarTab = () => {
  return (
    <Grid container justifyContent="space-between" alignItems="center">
      <Grid item md={9} xs={12}>
        <Typography
          variant="h6"
          sx={{ fontSize: 16, color: "grey.700", mb: 1 }}
        >
          One Way / Round Trip / Airport Transfers
        </Typography>
        <TextField
          fullWidth
          variant="standard"
          placeholder="Where are you going?"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LocationOnOutlinedIcon />
              </InputAdornment>
            ),
          }}
        />
      </Grid>
      <Grid item md={2.5} xs={12} sx={{ mt: { md: 0, xs: 2 } }}>
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

export default CarTab;
