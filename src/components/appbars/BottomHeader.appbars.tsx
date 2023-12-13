import React from "react";

// mui
import { Grid, Typography, Box, Button } from "@mui/material";

// icons
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";

// data
import { routes } from "@/dummy/dummyData";
import { useRouter } from "next/router";

const BottomHeaderAppbar = () => {
  // router
  const router = useRouter();

  console.log(router);

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
      <Grid item md={2}>
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
      <Grid container item md={6} justifyContent="flex-end" alignItems="center">
        <Grid container item md={6} justifyContent="flex-end">
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
          <ShoppingBagOutlinedIcon
            sx={{
              color:
                router.pathname === "/booking" ||
                router.route === "/tours/[tourId]"
                  ? "grey.800"
                  : "grey.200",
            }}
          />
        </Grid>
        <Grid container item md={3} justifyContent="flex-end">
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
