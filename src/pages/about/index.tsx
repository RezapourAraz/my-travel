import MainTextCard from "@/components/cards/MainText.cards";
import MainFooter from "@/components/footer/Main.footer";
import MainLayout from "@/components/layouts/Main.layouts";
import MainSection from "@/components/sections/Main.sections";
import WhyChooseSection from "@/components/sections/WhyChoose.sections";
import { howItWorkData } from "@/dummy/dummyData";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <MainLayout>
      <MainSection image="https://mytravel.madrasthemes.com/wp-content/uploads/2022/02/img3-7.jpeg" />
      <MainTextCard title="Become Local Expert" description="Home > About" />
      <Container maxWidth="lg">
        <Grid container mt={18}>
          <Grid item md={12} sx={{ textAlign: "center" }}>
            <Typography
              variant="h4"
              sx={{
                borderBottom: 1,
                borderColor: "primary.main",
                display: "inline-flex",
                fontWeight: "bold",
              }}
            >
              How it Works
            </Typography>
          </Grid>
          <Grid item container sx={{ mt: 10 }}>
            {howItWorkData.map((el) => (
              <Grid item md={4} key={el.id} sx={{ p: 1 }}>
                <Box>
                  <img src={el.image} alt={el.title} />
                </Box>
                <Typography variant="h6">{el.title}</Typography>
                <Typography variant="subtitle1" sx={{ color: "grey.500" }}>
                  {el.desc}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Container>
      <WhyChooseSection />
      <Grid container sx={{ justifyContent: "center" }}>
        <Button variant="outlined">Register</Button>
      </Grid>
      <MainFooter />
    </MainLayout>
  );
};

export default About;
