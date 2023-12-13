import React, { FC } from "react";

// mui
import { Button, Grid, Rating, Typography } from "@mui/material";

// icons
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

type ITopHeaderBody = {
  data: any;
};

const TopHeaderBody: FC<ITopHeaderBody> = ({ data }) => {
  return (
    <Grid
      container
      sx={{
        alignItems: "center",
        borderBottom: 1,
        pb: 2,
        borderColor: "grey.200",
      }}
    >
      <LocationOnOutlinedIcon sx={{ color: "grey.500" }} />
      <Typography variant="body2" color="grey.500">
        {data?.location}-
      </Typography>
      <Button sx={{ fontSize: 12 }}>View on Map</Button>
      <Rating value={data?.rating} sx={{ color: "success.light" }} />
      <Typography variant="body2" sx={{ color: "grey.500" }}>
        ({data?.review} review)
      </Typography>
    </Grid>
  );
};

export default TopHeaderBody;
