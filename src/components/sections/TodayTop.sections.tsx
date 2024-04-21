import React, { useEffect, useState } from "react";

// mui
import { Box, Container, Grid, Typography } from "@mui/material";

// swiper
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import "./styles.css";

// required modules
import { Navigation } from "swiper/modules";

// dummy data
import { todayTopDeals } from "@/dummy/dummyData";

const TodayTopSection = () => {
  // states

  const [width, setWidth] = useState<any>();

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Container maxWidth="lg">
      <Grid container>
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
            Today Top Deals
          </Typography>
        </Grid>
        <Swiper
          slidesPerView={width < 700 ? 1 : 3}
          spaceBetween={30}
          className="mySwiper"
        >
          {todayTopDeals.map((item) => (
            <Grid key={item.id}>
              <SwiperSlide
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Grid>
                  <Box>
                    <img
                      src={item.image}
                      alt={item.title}
                      width="100%"
                      height="100%"
                    />
                  </Box>

                  <Typography variant="h5" sx={{ fontSize: 20, my: 1 }}>
                    {item.title}
                  </Typography>
                  <Typography variant="h6" sx={{ fontSize: 14 }}>
                    {item.desc}
                  </Typography>
                </Grid>
              </SwiperSlide>
            </Grid>
          ))}
        </Swiper>
      </Grid>
    </Container>
  );
};

export default TodayTopSection;
