import React, { useState } from "react";
import { useRouter } from "next/router";

// components
import MainFooter from "@/components/footer/Main.footer";
import MainLayout from "@/components/layouts/Main.layouts";
import TopHeaderBody from "@/components/body/TopHeader.body";
import FastInfoBody from "@/components/body/FastInfo.body";
import DetailsBody from "@/components/body/Details.body";

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
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";

import { tourData } from "@/dummy/dummyData";

const TourDetail = () => {
  // router
  const router = useRouter();
  const breadcrumbs = router.asPath.split("/");

  const findTour = tourData.find(
    (tour) => tour.id === +breadcrumbs[2].split("_")[0]
  );

  // states
  const [showMore, setShowMore] = useState(0);
  const [expanded, setExpanded] = useState(0);

  const showMoreHandler = (arg: number) => {
    if (showMore === arg) {
      setShowMore(0);
    }
    setShowMore(arg);
  };

  const expandHandler = (arg: number) => {
    if (arg === expanded) {
      setExpanded(0);
    } else setExpanded(arg);
  };

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
          <Grid item md={8} xs={12}>
            <Grid>
              <Typography variant="h5">{findTour?.title}</Typography>
            </Grid>
            <TopHeaderBody data={findTour} />
            <FastInfoBody data={findTour} />
            <Grid sx={{ my: 2 }}>
              <Box>
                <Typography variant="h5">Description</Typography>
              </Box>
              <Box sx={{ mt: 2 }}>
                <Typography variant="subtitle1" color="grey.500">
                  {findTour?.desc}
                </Typography>
              </Box>
            </Grid>
            <DetailsBody data={findTour} />
            <Grid
              container
              sx={{ my: 3, borderBottom: 1, pb: 2, borderColor: "grey.200" }}
            >
              <Grid item md={12} xs={12}>
                <Typography variant="h5">What to Expect</Typography>
              </Grid>
              <Grid item md={12} xs={12}>
                <Typography variant="subtitle1" color="grey.500">
                  {findTour?.expect}
                </Typography>
              </Grid>
            </Grid>
            <Grid
              container
              sx={{ my: 3, borderBottom: 1, pb: 2, borderColor: "grey.200" }}
            >
              <Grid item md={12} xs={12}>
                <Typography variant="h5">Itinerary</Typography>
              </Grid>
              <Grid item md={12} xs={12}>
                {findTour?.itinerary.map((item) => (
                  <Box sx={{ mt: 2 }}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        cursor: "pointer",
                      }}
                      key={item.id}
                      onClick={() => showMoreHandler(item.id)}
                    >
                      <CircleOutlinedIcon sx={{ color: "primary.main" }} />
                      <Typography
                        variant="subtitle1"
                        color="primary.main"
                        fontWeight="bold"
                      >
                        Day - {item.day} -
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        fontWeight="bold"
                        color="grey.800"
                      >
                        {item.title}
                      </Typography>
                    </Box>
                    {showMore === item.id && (
                      <Box sx={{ pl: 4, my: 1 }}>
                        <Typography variant="subtitle2" color="grey.500">
                          {item.desc}
                        </Typography>
                      </Box>
                    )}
                  </Box>
                ))}
              </Grid>
            </Grid>
            <Grid container>
              <Grid item md={12} xs={12}>
                <Typography variant="h5">Location</Typography>
              </Grid>
              <Grid item md={12} xs={12} sx={{ my: 2 }}>
                <Box
                  sx={{
                    width: "100%",
                    height: 350,
                    border: 1,
                    borderColor: "grey.100",
                  }}
                ></Box>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item md={12}>
                <Typography variant="h5">FAQ</Typography>
              </Grid>
              {findTour?.faq.map((item) => (
                <>
                  <Grid item md={12} xs={!2} sx={{ my: 2 }} key={item.id}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        cursor: "pointer",
                      }}
                      onClick={() => expandHandler(item.id)}
                    >
                      {/* {expanded === item.id ? <IndeterminateCheckBoxOutlinedIcon > : */}
                      <AddBoxOutlinedIcon
                        sx={{ fontSize: 32, color: "grey.600" }}
                      />
                      {/* } */}
                      <Typography variant="subtitle1" color="grey.800">
                        {item.question}
                      </Typography>
                    </Box>
                  </Grid>
                  {expanded === item.id && (
                    <Box>
                      <Typography variant="subtitle2">{item.answer}</Typography>
                    </Box>
                  )}
                </>
              ))}
            </Grid>
          </Grid>
          <Grid item md={3} xs={12}>
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
