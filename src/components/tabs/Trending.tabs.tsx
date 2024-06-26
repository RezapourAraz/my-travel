import React, { useState } from "react";

// mui
import { Grid, Typography } from "@mui/material";
import { tourData } from "@/dummy/dummyData";
import TourCard from "../cards/Tour.cards";

const routes = [
  {
    id: 1,
    name: "Tour",
    value: "tour",
  },
  {
    id: 2,
    name: "Hotel",
    value: "hotel",
  },
  {
    id: 3,
    name: "Activity",
    value: "activity",
  },
  {
    id: 4,
    name: "Rental",
    value: "rental",
  },

  {
    id: 5,
    name: "Car",
    value: "car",
  },
  {
    id: 6,
    name: "Yacht",
    value: "yacht",
  },
];

const TrendingTab = () => {
  // states
  const [selectedTab, setSelectedTab] = useState("tour");

  return (
    <Grid
      container
      sx={{
        justifyContent: "center",
      }}
    >
      {routes.map((route) => (
        <Grid mx={2} onClick={() => setSelectedTab(route.value)}>
          <Typography
            sx={{
              bgcolor:
                selectedTab === route.value ? "primary.main" : "transparent",
              px: 2,
              py: 0.5,
              borderRadius: 50,
              color:
                selectedTab === route.value ? "common.white" : "common.black",
              cursor: "pointer",
            }}
          >
            {route.name}
          </Typography>
        </Grid>
      ))}
      <Grid item container md={12} my={2} gap={1}>
        {selectedTab === "tour" &&
          tourData.map((tour) => (
            <Grid
              item
              md={2.9}
              xs={12}
              key={tour.id}
              sx={{ justifyContent: "center" }}
            >
              <TourCard tour={tour} />
            </Grid>
          ))}
      </Grid>
    </Grid>
  );
};

export default TrendingTab;
