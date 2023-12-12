import React, { useState } from "react";

// components
import MainTextCard from "@/components/cards/MainText.cards";
import MainLayout from "@/components/layouts/Main.layouts";
import MainSection from "@/components/sections/Main.sections";
import MainTabSection from "@/components/sections/MainTab.sections";

// mui
import { Box, Container, Grid, Typography } from "@mui/material";
import MainFooter from "@/components/footer/Main.footer";
import TrendingSection from "@/components/sections/Trending.sections";

const DestinationDetail = () => {
  // states
  const [showMore, setShowMore] = useState(false);

  return (
    <MainLayout>
      <MainSection />
      <MainTextCard
        title="London"
        description="is gothic grandeur by the river"
      />
      <MainTabSection />
      <Container maxWidth="lg" sx={{ my: 5 }}>
        <Grid sx={{ textAlign: "center" }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              p: 1,
              borderBottom: 2,
              display: "inline-flex",
              borderColor: "primary.main",
            }}
          >
            Welcome to London
          </Typography>
        </Grid>
        <Grid container justifyContent="center">
          <Grid item md={8} my={3}>
            <Typography variant="h6" sx={{ my: 2, fontWeight: "bold" }}>
              Time Travel
            </Typography>
            <Typography variant="body1">
              Immersed in history, London's rich seams of eye-opening antiquity
              are everywhere. The city's buildings are striking milestones in a
              unique and beguiling biography, and a great many of them – the
              Tower of London, Westminster Abbey, Big Ben – are instantly
              recognizable landmarks. There’s more than enough innovation (the
              Shard, the Tate Modern extension, the Sky Garden) to put a crackle
              in the air, but it never drowns out London’s seasoned,
              centuries-old narrative. Architectural grandeur rises up all
              around you in the West End, ancient remains dot the City and
              charming pubs punctuate the historic quarters, leafy suburbs and
              river banks. Take your pick.
            </Typography>
            {showMore && (
              <Box>
                <Typography>
                  Once inside the historic palace located on the Right Bank of
                  the Seine, see unmissable and iconic sights such as the Mona
                  Lisa and Venus de Milo. Discover masterpieces of the
                  Renaissance and ancient Egyptian relics, along with paintings
                  from the 13th to 20th centuries, prints from the Royal
                  Collection, and much more.
                </Typography>
              </Box>
            )}

            <Box
              onClick={() => setShowMore(!showMore)}
              sx={{
                mt: 3,
                color: "primary.main",
                cursor: "pointer",
                borderBottom: 1,
                borderColor: "primary.main",
                display: "inline-flex",
              }}
            >
              <Typography>{showMore ? "Show less" : "Show more"}</Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <TrendingSection />
      <MainFooter />
    </MainLayout>
  );
};

export default DestinationDetail;
