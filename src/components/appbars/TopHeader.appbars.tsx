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

const TopHeaderAppbar = () => {
  return (
    <Grid container sx={{ px: 3, py: 2, justifyContent: "space-between" }}>
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
      <Grid container item md={4} justifyContent="flex-end">
        <Box sx={{ mx: 1 }}>
          <IconButton>
            <FacebookOutlinedIcon />
          </IconButton>
          <IconButton>
            <TwitterIcon />
          </IconButton>
          <IconButton>
            <InstagramIcon />
          </IconButton>
          <IconButton>
            <TelegramIcon />
          </IconButton>
        </Box>
        <Divider variant="middle" orientation="vertical" flexItem />

        <Box sx={{ mx: 1 }}>
          <Button startIcon={<PermIdentityOutlinedIcon />}>
            Sign in or Register
          </Button>
        </Box>
        <Divider variant="middle" orientation="vertical" flexItem />
        <Box sx={{ mx: 1 }}>
          <Button>USD</Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default TopHeaderAppbar;
