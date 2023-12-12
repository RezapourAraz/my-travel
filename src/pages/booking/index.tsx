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
import BookingAccordion from "@/components/accordion/Booking.accordion";

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

const filtersData = [
  {
    id: 1,
    name: "Star Rating",
    options: [
      { id: 1, name: "1 star" },
      { id: 2, name: "2 star" },
      { id: 3, name: "3 star" },
      { id: 4, name: "4 star" },
      { id: 5, name: "5 star" },
    ],
  },
  {
    id: 2,
    name: "Meals",
    options: [
      { id: 1, name: "All-inclusive" },
      { id: 2, name: "Breakfast & dinner included" },
      { id: 3, name: "Breakfast Included" },
      { id: 4, name: "Kitchen facilities" },
    ],
  },
  {
    id: 3,
    name: "Facilities",
    options: [
      { id: 1, name: "Gucci" },
      { id: 2, name: "Mango" },
      { id: 3, name: "Parking" },
      { id: 4, name: "Pet friendly" },
      { id: 5, name: "Wifi" },
      { id: 6, name: "Restaurant" },
      { id: 7, name: "Room service" },
    ],
  },
  {
    id: 4,
    name: "Property Type",
    options: [
      { id: 1, name: "Apartments" },
      { id: 2, name: "Bed and Breakfasts" },
      { id: 3, name: "Gucci" },
      { id: 4, name: "Hotels" },
      { id: 5, name: "Mango" },
      { id: 6, name: "Resorts" },
    ],
  },
  {
    id: 5,
    name: "Duration",
    options: [
      { id: 1, name: "0-3 Hours" },
      { id: 2, name: "3-5 Hours" },
      { id: 3, name: "5-7 Hours" },
      { id: 4, name: "Full day (7+ hours)" },
    ],
  },
  {
    id: 5,
    name: "Language",
    options: [
      { id: 1, name: "English" },
      { id: 2, name: "Espanol" },
      { id: 3, name: "Japanese" },
      { id: 4, name: "Turkish" },
    ],
  },
  {
    id: 5,
    name: "Categories",
    options: [
      { id: 1, name: "Boat" },
      { id: 2, name: "Canoe" },
      { id: 3, name: "Convertibles" },
      { id: 4, name: "Coupes" },
      { id: 5, name: "Sailboat" },
      { id: 6, name: "Sedan" },
      { id: 7, name: "SUV" },
      { id: 8, name: "Yacht" },
    ],
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
            <Box
              sx={{
                border: 1,
                borderColor: "grey.100",
                my: 3,
                height: 200,
                width: "100%",
              }}
            ></Box>
            {filtersData.map((filter) => (
              <BookingAccordion
                key={filter.id}
                title={filter.name}
                options={filter.options}
              />
            ))}
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
