import React from "react";

// mui
import { Container, Grid, Typography } from "@mui/material";

// icons
import PriceCheckOutlinedIcon from "@mui/icons-material/PriceCheckOutlined";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";

const WhyChooseSection = () => {
  return (
    <Container maxWidth="lg">
      <Grid container sx={{ my: 7 }}>
        <Grid
          item
          md={12}
          xs={12}
          sx={{ alignItems: "center", textAlign: "center", p: 1, mb: 4 }}
        >
          <Typography
            variant="h4"
            component="span"
            sx={{
              fontWeight: "bold",
              p: 1,
              borderBottom: 1,
              borderWidth: 2,
              borderColor: "primary.main",
            }}
          >
            Why Choose
          </Typography>
        </Grid>
        <Grid item md={4} xs={12} sx={{ textAlign: "center", p: 1 }}>
          <PriceCheckOutlinedIcon
            sx={{ fontSize: 58, color: "primary.main", my: 1 }}
          />
          <Typography variant="h6" sx={{ fontSize: 18 }}>
            Competitive Pricing
          </Typography>
          <Typography variant="body1" sx={{ color: "grey.500" }}>
            With 500+ suppliers and the purchasing power of 300 million members,
            mytravel.com can save you more!
          </Typography>
        </Grid>
        <Grid item md={4} xs={12} sx={{ textAlign: "center", p: 1 }}>
          <WorkspacePremiumOutlinedIcon
            sx={{ fontSize: 58, color: "primary.main", my: 1 }}
          />
          <Typography variant="h6" sx={{ fontSize: 18 }}>
            Award-Winning Service
          </Typography>
          <Typography variant="body1" sx={{ color: "grey.500" }}>
            Travel worry-free knowing that we're here if you needus, 24 hours a
            day
          </Typography>
        </Grid>
        <Grid item md={4} xs={12} sx={{ textAlign: "center", p: 1 }}>
          <PublicOutlinedIcon
            sx={{ fontSize: 58, color: "primary.main", my: 1 }}
          />
          <Typography variant="h6" sx={{ fontSize: 18 }}>
            Worldwide Coverage
          </Typography>
          <Typography variant="body1" sx={{ color: "grey.500" }}>
            Over 1,200,000 hotels in more than 200 countries and regions &
            flights to over 5,000 cities
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default WhyChooseSection;
