import React, { FC } from "react";

// mui
import { Grid, Typography } from "@mui/material";

// icons
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
type IDetailsBodyProps = {
  data: any;
};

const DetailsBody: FC<IDetailsBodyProps> = ({ data }) => {
  return (
    <Grid container sx={{ borderBottom: 1, pb: 2, borderColor: "grey.200" }}>
      <Grid item md={6} my={1}>
        <Typography>Highlights</Typography>
        <Typography variant="subtitle1" sx={{ color: "grey.500" }}>
          {data?.highlights}
        </Typography>
      </Grid>
      <Grid item md={6} my={1}>
        <Typography>Bedroom</Typography>
        <Typography variant="subtitle1" sx={{ color: "grey.500" }}>
          {data?.bedrooms} Bedrooms
        </Typography>
      </Grid>
      <Grid item md={6} my={1}>
        <Typography>Departure Time</Typography>
        <Typography variant="subtitle1" sx={{ color: "grey.500" }}>
          {data?.departureTime}
        </Typography>
      </Grid>
      <Grid item md={6} my={1}>
        <Typography>Bathroom</Typography>
        <Typography variant="subtitle1" sx={{ color: "grey.500" }}>
          {data?.bathroom} Bathrooms
        </Typography>
      </Grid>
      <Grid item md={6} my={1}>
        <Typography mb={2}>Price Includes</Typography>
        {data?.includes.map((item: any) => (
          <Grid container gap={1} mt={0.5}>
            <CheckOutlinedIcon sx={{ color: "primary.main" }} />
            <Typography variant="subtitle1" sx={{ color: "grey.500" }}>
              {item}
            </Typography>
          </Grid>
        ))}
      </Grid>
      <Grid item md={6} my={1}>
        <Typography mb={2}>Price Excludes</Typography>
        {data?.excludes.map((item: any) => (
          <Grid container gap={1} mt={0.5}>
            <CloseOutlinedIcon sx={{ color: "primary.main" }} />
            <Typography variant="subtitle1" sx={{ color: "grey.500" }}>
              {item}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default DetailsBody;
