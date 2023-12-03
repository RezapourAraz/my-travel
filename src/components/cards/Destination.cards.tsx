import React, { FC } from "react";

// mui
import { Box, Typography } from "@mui/material";

type IDestinationCardProps = {
  img: string;
  alt: string;
};

const DestinationCard: FC<IDestinationCardProps> = ({ img, alt }) => {
  return (
    <Box
      sx={{
        position: "relative",
        "&:hover": {
          ".backdrop": {
            display: "flex",
            transition: "all .5s ease-in-out",
          },
          ".image-options": {
            display: "flex",
            transition: "all .5s ease-in-out",
            zIndex: 10,
          },
          transform: "translateY(-5px)",
          transition: "all .5s ease-in-out",
        },
      }}
    >
      <Box
        className="backdrop "
        sx={{
          position: "absolute",
          bgcolor: "rgba(0, 0 ,0, 0.3)",
          height: "100%",
          width: "100%",
          display: "none",
        }}
      />
      <Box sx={{ position: "absolute", top: 10, left: 10 }}>
        <Typography
          variant="h6"
          color="common.white"
          sx={{ p: 1, borderBottom: 1 }}
        >
          {alt}
        </Typography>
        <Typography
          className="image-options"
          variant="subtitle1"
          sx={{
            display: "none",
            color: "common.white",
            cursor: "pointer",
            "&:hover": { color: "grey.500" },
          }}
        >
          30 Hotel
        </Typography>
        <Typography
          className="image-options"
          variant="subtitle1"
          sx={{
            display: "none",
            color: "common.white",
            cursor: "pointer",
            "&:hover": { color: "grey.500" },
          }}
        >
          42 Tours
        </Typography>
        <Typography
          className="image-options"
          variant="subtitle1"
          sx={{
            display: "none",
            color: "common.white",
            cursor: "pointer",
            "&:hover": { color: "grey.500" },
          }}
        >
          20 Activity
        </Typography>
        <Typography
          className="image-options"
          variant="subtitle1"
          sx={{
            display: "none",
            color: "common.white",
            cursor: "pointer",
            "&:hover": { color: "grey.500" },
          }}
        >
          32 Yacht
        </Typography>
      </Box>
      <img src={img} alt={alt} width="100%" height="100%" />
    </Box>
  );
};

export default DestinationCard;
