import React, { useState } from "react";

// mui
import { Box, Container, Grid, Button } from "@mui/material";
import { mainTab } from "@/dummy/dummyData";
import HotelTab from "../tabs/Hotel.tabs";
import TourTab from "../tabs/Tour.tabs";
import ActivityTab from "../tabs/Activity.tabs";
import RentalTab from "../tabs/Rental.tabs";
import CarTab from "../tabs/Car.tabs";
import YachtTab from "../tabs/Yacht.tabs";

const MainTabSection = () => {
  // states
  const [selectedTab, setSelectedTab] = useState("Hotel");

  return (
    <Container maxWidth="lg">
      <Grid container justifyContent="space-between" p={1}>
        {mainTab.map((tab) => (
          <Grid item md={1} key={tab.id}>
            <Button
              startIcon={tab.icon}
              sx={{
                color: selectedTab === tab.name ? "primary.main" : "grey.200",
              }}
              onClick={() => setSelectedTab(tab.name)}
            >
              {tab.name}
            </Button>
          </Grid>
        ))}
      </Grid>
      <Grid
        container
        p={2}
        sx={{ borderRadius: 1, boxShadow: 2 }}
        bgcolor="common.white"
      >
        {selectedTab === "Hotel" && <HotelTab />}
        {selectedTab === "Tours" && <TourTab />}
        {selectedTab === "Activity" && <ActivityTab />}
        {selectedTab === "Rental" && <RentalTab />}
        {selectedTab === "Car" && <CarTab />}
        {selectedTab === "Yacht" && <YachtTab />}
      </Grid>
    </Container>
  );
};

export default MainTabSection;
