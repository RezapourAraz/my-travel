import React from "react";
import { useRouter } from "next/router";

// components
import MainFooter from "@/components/footer/Main.footer";
import MainLayout from "@/components/layouts/Main.layouts";

// mui
import {
  Box,
  Breadcrumbs,
  Button,
  Container,
  Grid,
  Rating,
  Typography,
} from "@mui/material";

// icons
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import MainSection from "@/components/sections/Main.sections";
import { tourData } from "@/dummy/dummyData";

// icons
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import PinDropOutlinedIcon from "@mui/icons-material/PinDropOutlined";
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

const TourDetail = () => {
  // router
  const router = useRouter();

  const breadcrumbs = router.asPath.split("/");

  const findTour = tourData.find(
    (tour) => tour.id === +breadcrumbs[2].split("_")[0]
  );

  return (
    <MainLayout>
      <Container maxWidth="lg">
        <Box p={2}>
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            {breadcrumbs.map((breadcrumb) => (
              <Typography
                key={breadcrumb}
                color="text.primary"
                sx={{ cursor: "pointer" }}
              >
                {breadcrumb === ""
                  ? "home"
                  : breadcrumb === "tours"
                  ? breadcrumb
                  : breadcrumb.split("_")[1]?.replaceAll("%20", " ")}
              </Typography>
            ))}
          </Breadcrumbs>
        </Box>
      </Container>
      <Box
        sx={{
          backgroundImage: `url(${findTour?.image})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: 600,
        }}
      />
      <Container maxWidth="lg" sx={{ my: 3 }}>
        <Grid container justifyContent="space-between">
          <Grid item md={8}>
            <Grid>
              <Typography variant="h5">{findTour?.title}</Typography>
            </Grid>
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
                {findTour?.location}-
              </Typography>
              <Button sx={{ fontSize: 12 }}>View on Map</Button>
              <Rating
                value={findTour?.rating}
                sx={{ color: "success.light" }}
              />
              <Typography variant="body2" sx={{ color: "grey.500" }}>
                ({findTour?.review} review)
              </Typography>
            </Grid>
            <Grid
              container
              sx={{ borderBottom: 1, pb: 2, borderColor: "grey.200" }}
            >
              <Grid container item md={4} gap={1} my={2}>
                <AccessTimeIcon sx={{ color: "primary.main" }} />
                <Typography sx={{ color: "grey.500" }}>
                  {findTour?.day} Days
                </Typography>
              </Grid>
              <Grid container item md={4} gap={1} my={2}>
                <PeopleAltOutlinedIcon sx={{ color: "primary.main" }} />
                <Typography sx={{ color: "grey.500" }}>
                  MAx People : {findTour?.maxPeople}
                </Typography>
              </Grid>
              <Grid container item md={4} my={2} gap={1}>
                <DateRangeOutlinedIcon sx={{ color: "primary.main" }} />
                <Typography sx={{ color: "grey.500" }}>
                  {findTour?.date}
                </Typography>
              </Grid>
              <Grid container item md={4} gap={1} my={2}>
                <PermIdentityOutlinedIcon sx={{ color: "primary.main" }} />
                <Typography sx={{ color: "grey.500" }}>
                  Min Age : {findTour?.minAge}
                </Typography>
              </Grid>
              <Grid container item md={4} gap={1} my={2}>
                <PinDropOutlinedIcon sx={{ color: "primary.main" }} />
                <Typography sx={{ color: "grey.500" }}>
                  Pickup : {findTour?.pickup}
                </Typography>
              </Grid>
            </Grid>
            <Grid sx={{ my: 2 }}>
              <Box>
                <Typography variant="subtitle1" sx={{ fontSize: 20 }}>
                  Description
                </Typography>
              </Box>
              <Box sx={{ mt: 2 }}>
                <Typography variant="subtitle1" color="grey.500">
                  {findTour?.desc}
                </Typography>
              </Box>
            </Grid>
            <Grid container>
              <Grid item md={6} my={1}>
                <Typography>Highlights</Typography>
                <Typography variant="subtitle1" sx={{ color: "grey.500" }}>
                  {findTour?.highlights}
                </Typography>
              </Grid>
              <Grid item md={6} my={1}>
                <Typography>Bedroom</Typography>
                <Typography variant="subtitle1" sx={{ color: "grey.500" }}>
                  {findTour?.bedrooms} Bedrooms
                </Typography>
              </Grid>
              <Grid item md={6} my={1}>
                <Typography>Departure Time</Typography>
                <Typography variant="subtitle1" sx={{ color: "grey.500" }}>
                  {findTour?.departureTime}
                </Typography>
              </Grid>
              <Grid item md={6} my={1}>
                <Typography>Bathroom</Typography>
                <Typography variant="subtitle1" sx={{ color: "grey.500" }}>
                  {findTour?.bathroom} Bathrooms
                </Typography>
              </Grid>
              <Grid item md={6} my={1}>
                <Typography mb={2}>Price Includes</Typography>
                {findTour?.includes.map((item) => (
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
                {findTour?.excludes.map((item) => (
                  <Grid container gap={1} mt={0.5}>
                    <CloseOutlinedIcon sx={{ color: "primary.main" }} />
                    <Typography variant="subtitle1" sx={{ color: "grey.500" }}>
                      {item}
                    </Typography>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={3}>
            <Grid
              sx={{ border: 1, borderColor: "grey.200", p: 2, borderRadius: 1 }}
            >
              <Box
                display="flex"
                alignItems="center"
                gap={1}
                sx={{ borderBottom: 1, borderColor: "grey.200", pb: 3 }}
              >
                <Typography variant="body2" color="grey.800">
                  From
                </Typography>
                <Typography variant="h5">
                  ${findTour?.price.toFixed(2)}
                </Typography>
              </Box>
              <Box my={2}>
                <Typography variant="body2" color="grey.800">
                  Date
                </Typography>
                <Typography my={1} variant="body1" color="grey.800">
                  {findTour?.date}
                </Typography>
              </Box>
              <Box>
                <Button fullWidth variant="contained">
                  Add To Cart
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Container>

      <MainFooter />
    </MainLayout>
  );
};

export default TourDetail;
