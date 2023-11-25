import React, { useState } from "react";

// mui
import { Box, Container, Grid, Button } from "@mui/material";
import { mainTab } from "@/dummy/dummyData";
import HotelTab from "../tabs/Hotel.tabs";

const MainTabSection = () => {
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
        sx={{ borderRadius: 1, height: 100, boxShadow: 2 }}
        bgcolor="common.white"
      >
        {selectedTab === "Hotel" && <HotelTab />}
      </Grid>
    </Container>
  );
};

export default MainTabSection;
