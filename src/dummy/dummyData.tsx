import ApartmentOutlinedIcon from "@mui/icons-material/ApartmentOutlined";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
import HikingOutlinedIcon from "@mui/icons-material/HikingOutlined";
import SupervisedUserCircleOutlinedIcon from "@mui/icons-material/SupervisedUserCircleOutlined";
import CarRentalOutlinedIcon from "@mui/icons-material/CarRentalOutlined";
import DirectionsBoatFilledOutlinedIcon from "@mui/icons-material/DirectionsBoatFilledOutlined";

export const routes = [
  {
    id: 1,
    name: "Home",
    route: "/",
  },
  {
    id: 2,
    name: "Hotel",
    route: "/hotel",
  },
  {
    id: 3,
    name: "Tour",
    route: "/tour",
  },
  {
    id: 4,
    name: "Rental",
    route: "/rental",
  },
  {
    id: 4,
    name: "Car",
    route: "/car",
  },
];

export const mainTab = [
  {
    id: 1,
    name: "Hotel",
    icon: <ApartmentOutlinedIcon />,
  },
  {
    id: 2,
    name: "Tours",
    icon: <PublicOutlinedIcon />,
  },
  {
    id: 3,
    name: "Activity",
    icon: <HikingOutlinedIcon />,
  },
  {
    id: 4,
    name: "Rental",
    icon: <SupervisedUserCircleOutlinedIcon />,
  },
  {
    id: 5,
    name: "Car",
    icon: <CarRentalOutlinedIcon />,
  },
  {
    id: 6,
    name: "Yacht",
    icon: <DirectionsBoatFilledOutlinedIcon />,
  },
];
