import React, { FC } from "react";

// mui
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  InputBase,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import MainLayout from "@/components/layouts/Main.layouts";
import { tourData } from "@/dummy/dummyData";
import TourCard from "@/components/cards/Tour.cards";
import PaginationCard from "@/components/cards/Pagination.cards";

const filters = [
  {
    id: 1,
    name: "Popularity",
  },
  {
    id: 2,
    name: "Guest rating",
  },
  {
    id: 3,
    name: "Latest",
  },
  {
    id: 4,
    name: "Price: low to hight",
  },
  {
    id: 5,
    name: "Price: hight to low",
  },
];

const Booking = () => {
  // router
  const router = useRouter();

  const { query } = router.query;

  return (
    <MainLayout>
      <Container maxWidth="lg">
        <Grid container sx={{ my: 5, justifyContent: "space-between" }}>
          <Grid item md={3}>
            <Box
              sx={{ p: 3, border: 1, borderColor: "grey.200", borderRadius: 1 }}
            >
              <Typography variant="body1" sx={{ color: "grey.700" }}>
                Destination or Hotel Name
              </Typography>
              <Box sx={{ borderBottom: 2, borderColor: "grey.400", py: 1 }}>
                <InputBase placeholder="search ..." />
              </Box>
              <Box mt={2}>
                <Button variant="contained" fullWidth sx={{ p: 1.5 }}>
                  Search
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid container item md={8.5}>
            <Box>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                {query}: 21 results found
              </Typography>
            </Box>
            <Grid
              container
              item
              md={12}
              sx={{
                justifyContent: "space-between",
                border: 1,
                px: 2,
                alignItems: "center",
                height: 50,
                borderRadius: 1,
                borderColor: "grey.200",
              }}
            >
              {filters.map((filter, idx) => (
                <>
                  <Box
                    key={filter.id}
                    sx={{
                      display: "flex",
                      cursor: "pointer",
                      p: 1,
                    }}
                  >
                    <Typography>{filter.name}</Typography>
                  </Box>
                  {idx < filters.length - 1 && (
                    <Divider orientation="vertical" flexItem />
                  )}
                </>
              ))}
            </Grid>
            <Grid item container md={12} my={2} gap={1}>
              {tourData.map((tour) => (
                <Grid
                  item
                  md={3.9}
                  key={tour.id}
                  sx={{ justifyContent: "center" }}
                >
                  <TourCard tour={tour} />
                </Grid>
              ))}
              {tourData.map((tour) => (
                <Grid
                  item
                  md={3.9}
                  key={tour.id}
                  sx={{ justifyContent: "center" }}
                >
                  <TourCard tour={tour} />
                </Grid>
              ))}
              {tourData.map((tour) => (
                <Grid
                  item
                  md={3.9}
                  key={tour.id}
                  sx={{ justifyContent: "center" }}
                >
                  <TourCard tour={tour} />
                </Grid>
              ))}
              {tourData.map((tour) => (
                <Grid
                  item
                  md={3.9}
                  key={tour.id}
                  sx={{ justifyContent: "center" }}
                >
                  <TourCard tour={tour} />
                </Grid>
              ))}
            </Grid>
            <Grid item md={12} sx={{ my: 2 }}>
              <PaginationCard length={100} start={1} end={10} />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MainLayout>
  );
};

export default Booking;
