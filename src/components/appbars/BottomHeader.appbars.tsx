import React from "react";

// mui
import { Grid, Typography, Box, Button, IconButton } from "@mui/material";

// icons
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MenuIcon from "@mui/icons-material/Menu";

// data
import { routes } from "@/dummy/dummyData";
import { useRouter } from "next/router";

const BottomHeaderAppbar = () => {
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
        borderColor: "grey.600",
        alignItems: "center",
      }}
    >
      <Grid item md={2} xs={5}>
        <Typography
          component="h5"
          variant="h5"
          sx={{
            color:
              router.pathname === "/booking" ||
              router.route === "/tours/[tourId]"
                ? "grey.800"
                : "grey.200",
          }}
        >
          My Travel
        </Typography>
      </Grid>
      <Grid
        container
        item
        md={6}
        xs={7}
        justifyContent="flex-end"
        alignItems="center"
      >
        <Grid
          container
          item
          md={6}
          justifyContent="flex-end"
          sx={{ display: { xs: "none", md: "flex" } }}
        >
          {routes.map((route) => (
            <Box key={route.id}>
              <Button
                onClick={() => {}}
                sx={{
                  color:
                    router.pathname === "/booking" ||
                    router.route === "/tours/[tourId]"
                      ? "grey.800"
                      : "grey.200",
                }}
              >
                {route.name}
              </Button>
            </Box>
          ))}
        </Grid>
        <Grid item>
          <IconButton>
            <ShoppingBagOutlinedIcon
              sx={{
                color:
                  router.pathname === "/booking" ||
                  router.route === "/tours/[tourId]"
                    ? "grey.800"
                    : "grey.200",
                display: { md: "block", xs: "none" },
              }}
            />
          </IconButton>

          <IconButton>
            <PermIdentityIcon
              sx={{
                color:
                  router.pathname === "/booking" ||
                  router.route === "/tours/[tourId]"
                    ? "grey.800"
                    : "grey.200",
                display: { md: "none", xs: "block" },
              }}
            />
          </IconButton>
          <IconButton>
            <MenuIcon
              sx={{
                color:
                  router.pathname === "/booking" ||
                  router.route === "/tours/[tourId]"
                    ? "grey.800"
                    : "grey.200",
                display: { md: "none", xs: "block" },
              }}
            />
          </IconButton>
        </Grid>
        <Grid
          container
          item
          md={3}
          justifyContent="flex-end"
          sx={{ display: { md: "flex", xs: "none" } }}
        >
          <Button
            variant="contained"
            sx={{
              color:
                router.pathname === "/booking" ||
                router.route === "/tours/[tourId]"
                  ? "grey.200"
                  : "grey.900",
              bgcolor:
                router.pathname === "/booking" ||
                router.route === "/tours/[tourId]"
                  ? "grey.800"
                  : "grey.200",
              ":hover": {
                color: "common.white",
              },
            }}
          >
            Become a expert
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default BottomHeaderAppbar;
