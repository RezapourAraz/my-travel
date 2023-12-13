import React, { FC } from "react";

// mui
import { Grid, Typography } from "@mui/material";

// icons
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import PinDropOutlinedIcon from "@mui/icons-material/PinDropOutlined";

type IFastInfoBodyProps = {
  data: any;
};

const FastInfoBody: FC<IFastInfoBodyProps> = ({ data }) => {
  return (
    <Grid container sx={{ borderBottom: 1, pb: 2, borderColor: "grey.200" }}>
      <Grid container item md={4} gap={1} my={2}>
        <AccessTimeIcon sx={{ color: "primary.main" }} />
        <Typography sx={{ color: "grey.500" }}>{data?.day} Days</Typography>
      </Grid>
      <Grid container item md={4} gap={1} my={2}>
        <PeopleAltOutlinedIcon sx={{ color: "primary.main" }} />
        <Typography sx={{ color: "grey.500" }}>
          MAx People : {data?.maxPeople}
        </Typography>
      </Grid>
      <Grid container item md={4} my={2} gap={1}>
        <DateRangeOutlinedIcon sx={{ color: "primary.main" }} />
        <Typography sx={{ color: "grey.500" }}>{data?.date}</Typography>
      </Grid>
      <Grid container item md={4} gap={1} my={2}>
        <PermIdentityOutlinedIcon sx={{ color: "primary.main" }} />
        <Typography sx={{ color: "grey.500" }}>
          Min Age : {data?.minAge}
        </Typography>
      </Grid>
      <Grid container item md={4} gap={1} my={2}>
        <PinDropOutlinedIcon sx={{ color: "primary.main" }} />
        <Typography sx={{ color: "grey.500" }}>
          Pickup : {data?.pickup}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default FastInfoBody;
