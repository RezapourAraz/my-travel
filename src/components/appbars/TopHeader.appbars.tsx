import React from "react";

// mui
import {
  AppBar,
  Box,
  Grid,
  Typography,
  Divider,
  IconButton,
  Button,
} from "@mui/material";

// icons
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import { useRouter } from "next/router";

const TopHeaderAppbar = () => {
  // router
  const router = useRouter();

  return (
    <Grid
      container
      sx={{
        px: 3,
        py: 2,
        justifyContent: "space-between",
        borderBottom: 1,
        borderColor: "grey.700",
      }}
    >
      <Grid
        container
        item
        md={2}
        sx={{ justifyContent: "space-between", alignItems: "center" }}
      >
        <Typography
          variant="subtitle2"
          color={
            router.pathname === "/booking" || router.route === "/tours/[tourId]"
              ? "grey.800"
              : "grey.200"
          }
        >
          +98-987-987-9876
        </Typography>
        <Divider variant="middle" orientation="vertical" flexItem />
        <Typography
          variant="subtitle2"
          color={
            router.pathname === "/booking" || router.route === "/tours/[tourId]"
              ? "grey.800"
              : "grey.200"
          }
        >
          info@mytravel.com
        </Typography>
      </Grid>
      <Grid container item md={4} justifyContent="flex-end">
        <Box sx={{ mx: 1 }}>
          <IconButton
            sx={{
              color:
                router.pathname === "/booking" ||
                router.route === "/tours/[tourId]"
                  ? "grey.800"
                  : "grey.200",
            }}
          >
            <FacebookOutlinedIcon />
          </IconButton>
          <IconButton
            sx={{
              color:
                router.pathname === "/booking" ||
                router.route === "/tours/[tourId]"
                  ? "grey.800"
                  : "grey.200",
            }}
          >
            <TwitterIcon />
          </IconButton>
          <IconButton
            sx={{
              color:
                router.pathname === "/booking" ||
                router.route === "/tours/[tourId]"
                  ? "grey.800"
                  : "grey.200",
            }}
          >
            <InstagramIcon />
          </IconButton>
          <IconButton
            sx={{
              color:
                router.pathname === "/booking" ||
                router.route === "/tours/[tourId]"
                  ? "grey.800"
                  : "grey.200",
            }}
          >
            <TelegramIcon />
          </IconButton>
        </Box>
        <Divider variant="middle" orientation="vertical" flexItem />

        <Box sx={{ mx: 1 }}>
          <Button
            startIcon={<PermIdentityOutlinedIcon />}
            sx={{
              color:
                router.pathname === "/booking" ||
                router.route === "/tours/[tourId]"
                  ? "grey.800"
                  : "grey.200",
            }}
          >
            Sign in or Register
          </Button>
        </Box>
        <Divider variant="middle" orientation="vertical" flexItem />
        <Box sx={{ mx: 1 }}>
          <Button
            sx={{
              color:
                router.pathname === "/booking" ||
                router.route === "/tours/[tourId]"
                  ? "grey.800"
                  : "grey.200",
            }}
          >
            USD
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default TopHeaderAppbar;
