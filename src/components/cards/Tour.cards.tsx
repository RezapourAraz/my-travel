import React, { FC } from "react";

// mui
import { Box, Grid, Typography, Rating, IconButton } from "@mui/material";

// icons
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { useRouter } from "next/router";
import Link from "next/link";

type ITour = {
  id: number;
  category: string;
  location: string;
  lat: string;
  log: string;
  name: string;
  time: string;
  title: string;
  rating: number;
  review: number;
  price: number;
  newPrice: number | null;
  day: number;
  maxPeople: number;
  date: string;
  minAge: number;
  pickup: string;
  img: string;
  bedrooms: number;
  highlights: string;
  bathroom: number;
  departureTime: number;
  itinerary: {
    id: number;
    day: number;
    title: string;
    desc: string;
  }[];
  includes: string[];
  excludes: string[];
  desc: string;
  expect: string;
};

type ITourCardProps = {
  tour: ITour;
};

const TourCard: FC<ITourCardProps> = ({ tour }) => {
  // router
  const router = useRouter();

  return (
    <Grid
      sx={{
        border: 1,
        borderRadius: 1,
        borderColor: "grey.200",
        transition: "transform .3s ease-in-out, box-shadow .3s ease-in-out",
        cursor: "pointer",
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: 1,
        },
        height: 400,
      }}
    >
      <Grid height={200} sx={{ position: "relative" }}>
        <img
          width="100%"
          height="100%"
          src={tour.img}
          alt={tour.location}
          style={{ objectFit: "cover" }}
        />
        <Box sx={{ position: "absolute", bottom: 5, left: 5 }}>
          <Typography variant="h6" sx={{ fontSize: 16, color: "common.white" }}>
            {tour.name}
          </Typography>
          {tour.newPrice ? (
            <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
              <Typography
                variant="h5"
                sx={{
                  fontSize: 18,
                  textDecoration: "line-through",
                  textDecorationColor: "black",
                  color: "grey.300",
                }}
              >
                ${tour.price.toFixed(2)}
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  fontSize: 22,
                  color: "common.white",
                }}
              >
                ${tour.newPrice.toFixed(2)}
              </Typography>
            </Box>
          ) : (
            <Typography
              variant="h5"
              sx={{ fontSize: 24, color: "common.white" }}
            >
              ${tour.price.toFixed(2)}
            </Typography>
          )}
        </Box>
        <Box sx={{ position: "absolute", top: 10, right: 5 }}>
          <IconButton sx={{ color: "common.white" }}>
            <FavoriteBorderOutlinedIcon />
          </IconButton>
        </Box>
      </Grid>

      <Grid sx={{ p: 2, pb: 4 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <FmdGoodOutlinedIcon sx={{ color: "grey.500", fontSize: 20 }} />
          <Typography variant="body2" sx={{ color: "grey.500" }}>
            {tour.location}
          </Typography>
        </Box>
        <Box sx={{ my: 1 }}>
          <Link
            href={`/tours/${tour.id}_${tour.title}`}
            style={{ textDecoration: "none" }}
          >
            <Typography
              variant="body1"
              sx={{ fontWeight: "bold", fontSize: 14, color: "grey.800" }}
            >
              {tour.title}
            </Typography>
          </Link>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Rating
            size="small"
            value={tour.rating}
            // onChange={(event, newValue) => {
            //   setValue(newValue);
            // }}
            sx={{ color: "success.light" }}
          />
          <Typography variant="subtitle2" sx={{ color: "grey.500" }}>
            ({tour.review} review)
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5, mt: 1 }}>
          <AccessTimeOutlinedIcon sx={{ fontSize: 16, color: "grey.500" }} />
          <Typography
            variant="caption"
            sx={{ fontSize: 13, color: "grey.500" }}
          >
            {tour.time.split(":")[0]} Hours
          </Typography>
          <Typography
            variant="caption"
            sx={{ fontSize: 13, color: "grey.500" }}
          >
            {tour.time.split(":")[1]} Minutes
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default TourCard;
