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
    id: 5,
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

export const tourData = [
  {
    id: 1,
    category: "Tour",
    location: "Istanbul, Turkey",
    lat: "",
    log: "",
    name: "Cultural Tours ",
    time: "3:45",
    title: "5-Day Oahu Tour: Honolulu, Pearl Harbor, & Diamond Head",
    rating: 4.3,
    review: 1,
    price: 634,
    newPrice: null,
    day: 5,
    maxPeople: 26,
    date: "Jan 18' - Dec 21'",
    minAge: 10,
    pickup: "Airport",
    img: "https://mytravel.madrasthemes.com/wp-content/uploads/2022/02/img4-2-1536x480.jpeg",
    bedrooms: 4,
    highlights: "John F.K. International Airport (Google Map)",
    bathroom: 6,
    departureTime: 3,
    itinerary: [
      {
        id: 1,
        day: 1,
        title: "Barcelona - Zaragoza - Madrid",
        desc: "We’ll meet at 4 p.m. at our hotel in Luzern (Lucerne) for a “Welcome to Switzerland” meeting. Then we’ll take a meandering evening walk through Switzerland’s most charming lakeside town, and get acquainted with one another over dinner together. Sleep in Luzern (2 nights). No bus. Walking: light.",
      },
      {
        id: 2,
        day: 2,
        title: "Barcelona - Zaragoza - Madrid",
        desc: "We’ll meet at 4 p.m. at our hotel in Luzern (Lucerne) for a “Welcome to Switzerland” meeting. Then we’ll take a meandering evening walk through Switzerland’s most charming lakeside town, and get acquainted with one another over dinner together. Sleep in Luzern (2 nights). No bus. Walking: light.",
      },
      {
        id: 3,
        day: 3,
        title: "Barcelona - Zaragoza - Madrid",
        desc: "We’ll meet at 4 p.m. at our hotel in Luzern (Lucerne) for a “Welcome to Switzerland” meeting. Then we’ll take a meandering evening walk through Switzerland’s most charming lakeside town, and get acquainted with one another over dinner together. Sleep in Luzern (2 nights). No bus. Walking: light.",
      },
    ],
    includes: [
      "Air Fares, 3 Nights Hotel Accommodation",
      "Tour Guide",
      "Entrance Fees",
      "All transportation in destination location",
    ],
    excludes: [
      "Guide Service Fee",
      "Driver Service Fee",
      "Any Private Expenses",
      "Room Service Fees",
    ],
    desc: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents.Lorem Ipsum decided to leave for the far World of Grammar. The Big Oxmox advised her not to do so, because there were thousands of bad Comma wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way. When she reached the first hills of t",
    expect:
      "Curabitur blandit tempus porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Etiam porta sem malesuada magna mollis euismod. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Maecenas sed diam eget risus varius blandit sit amet non magna. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec ullamcorper nulla non metus auctor fringilla.",
  },
  {
    id: 2,
    category: "Tour",
    location: "Greater London, United Kingdom",
    lat: "",
    log: "",
    name: "Attraction Tickets",
    time: "3:45",
    title: "Stonehenge, Windsor Castle, and Bath from London",
    rating: 4.3,
    review: 1,
    price: 465,
    newPrice: 350,
    day: 5,
    maxPeople: 26,
    date: "Jan 18' - Dec 21'",
    minAge: 10,
    pickup: "Airport",
    img: "https://mytravel.madrasthemes.com/wp-content/uploads/2022/03/stone-resize.jpg",
    bedrooms: 4,
    highlights: "John F.K. International Airport (Google Map)",
    bathroom: 6,
    departureTime: 3,
    itinerary: [
      {
        id: 1,
        day: 1,
        title: "Barcelona - Zaragoza - Madrid",
        desc: "We’ll meet at 4 p.m. at our hotel in Luzern (Lucerne) for a “Welcome to Switzerland” meeting. Then we’ll take a meandering evening walk through Switzerland’s most charming lakeside town, and get acquainted with one another over dinner together. Sleep in Luzern (2 nights). No bus. Walking: light.",
      },
      {
        id: 2,
        day: 2,
        title: "Barcelona - Zaragoza - Madrid",
        desc: "We’ll meet at 4 p.m. at our hotel in Luzern (Lucerne) for a “Welcome to Switzerland” meeting. Then we’ll take a meandering evening walk through Switzerland’s most charming lakeside town, and get acquainted with one another over dinner together. Sleep in Luzern (2 nights). No bus. Walking: light.",
      },
      {
        id: 3,
        day: 3,
        title: "Barcelona - Zaragoza - Madrid",
        desc: "We’ll meet at 4 p.m. at our hotel in Luzern (Lucerne) for a “Welcome to Switzerland” meeting. Then we’ll take a meandering evening walk through Switzerland’s most charming lakeside town, and get acquainted with one another over dinner together. Sleep in Luzern (2 nights). No bus. Walking: light.",
      },
    ],
    includes: [
      "Air Fares, 3 Nights Hotel Accommodation",
      "Tour Guide",
      "Entrance Fees",
      "All transportation in destination location",
    ],
    excludes: [
      "Guide Service Fee",
      "Driver Service Fee",
      "Any Private Expenses",
      "Room Service Fees",
    ],
    desc: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents.Lorem Ipsum decided to leave for the far World of Grammar. The Big Oxmox advised her not to do so, because there were thousands of bad Comma wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way. When she reached the first hills of t",
    expect:
      "Curabitur blandit tempus porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Etiam porta sem malesuada magna mollis euismod. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Maecenas sed diam eget risus varius blandit sit amet non magna. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec ullamcorper nulla non metus auctor fringilla.",
  },
  {
    id: 3,
    category: "Tour",
    location: "Amsterdam , Netherlands",
    lat: "",
    log: "",
    name: "Multi-day Tours",
    time: "3:45",
    title: "Bosphorus Strait and Black Sea Half-Day Cruise from Istanbul",
    rating: 4.3,
    review: 1,
    price: 1200,
    newPrice: 899,
    day: 5,
    maxPeople: 26,
    date: "Jan 18' - Dec 21'",
    minAge: 10,
    pickup: "Airport",
    img: "https://mytravel.madrasthemes.com/wp-content/uploads/2021/12/Bridge7-300x225.jpg",
    bedrooms: 4,
    highlights: "John F.K. International Airport (Google Map)",
    bathroom: 6,
    departureTime: 3,
    itinerary: [
      {
        id: 1,
        day: 1,
        title: "Barcelona - Zaragoza - Madrid",
        desc: "We’ll meet at 4 p.m. at our hotel in Luzern (Lucerne) for a “Welcome to Switzerland” meeting. Then we’ll take a meandering evening walk through Switzerland’s most charming lakeside town, and get acquainted with one another over dinner together. Sleep in Luzern (2 nights). No bus. Walking: light.",
      },
      {
        id: 2,
        day: 2,
        title: "Barcelona - Zaragoza - Madrid",
        desc: "We’ll meet at 4 p.m. at our hotel in Luzern (Lucerne) for a “Welcome to Switzerland” meeting. Then we’ll take a meandering evening walk through Switzerland’s most charming lakeside town, and get acquainted with one another over dinner together. Sleep in Luzern (2 nights). No bus. Walking: light.",
      },
      {
        id: 3,
        day: 3,
        title: "Barcelona - Zaragoza - Madrid",
        desc: "We’ll meet at 4 p.m. at our hotel in Luzern (Lucerne) for a “Welcome to Switzerland” meeting. Then we’ll take a meandering evening walk through Switzerland’s most charming lakeside town, and get acquainted with one another over dinner together. Sleep in Luzern (2 nights). No bus. Walking: light.",
      },
    ],
    includes: [
      "Air Fares, 3 Nights Hotel Accommodation",
      "Tour Guide",
      "Entrance Fees",
      "All transportation in destination location",
    ],
    excludes: [
      "Guide Service Fee",
      "Driver Service Fee",
      "Any Private Expenses",
      "Room Service Fees",
    ],
    desc: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents.Lorem Ipsum decided to leave for the far World of Grammar. The Big Oxmox advised her not to do so, because there were thousands of bad Comma wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way. When she reached the first hills of t",
    expect:
      "Curabitur blandit tempus porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Etiam porta sem malesuada magna mollis euismod. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Maecenas sed diam eget risus varius blandit sit amet non magna. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec ullamcorper nulla non metus auctor fringilla.",
  },
  {
    id: 4,
    category: "Tour",
    location: "Amsterdam , Netherlands",
    lat: "",
    log: "",
    name: "Culturals Tours",
    time: "3:45",
    title: "NYC One World Observatory Skip-the-Line Ticket",
    rating: 4.3,
    review: 1,
    price: 590,
    newPrice: null,
    day: 5,
    maxPeople: 26,
    date: "Jan 18' - Dec 21'",
    minAge: 10,
    pickup: "Airport",
    img: "https://mytravel.madrasthemes.com/wp-content/uploads/2021/11/city6-300x225.jpg",
    bedrooms: 4,
    highlights: "John F.K. International Airport (Google Map)",
    bathroom: 6,
    departureTime: 3,
    itinerary: [
      {
        id: 1,
        day: 1,
        title: "Barcelona - Zaragoza - Madrid",
        desc: "We’ll meet at 4 p.m. at our hotel in Luzern (Lucerne) for a “Welcome to Switzerland” meeting. Then we’ll take a meandering evening walk through Switzerland’s most charming lakeside town, and get acquainted with one another over dinner together. Sleep in Luzern (2 nights). No bus. Walking: light.",
      },
      {
        id: 2,
        day: 2,
        title: "Barcelona - Zaragoza - Madrid",
        desc: "We’ll meet at 4 p.m. at our hotel in Luzern (Lucerne) for a “Welcome to Switzerland” meeting. Then we’ll take a meandering evening walk through Switzerland’s most charming lakeside town, and get acquainted with one another over dinner together. Sleep in Luzern (2 nights). No bus. Walking: light.",
      },
      {
        id: 3,
        day: 3,
        title: "Barcelona - Zaragoza - Madrid",
        desc: "We’ll meet at 4 p.m. at our hotel in Luzern (Lucerne) for a “Welcome to Switzerland” meeting. Then we’ll take a meandering evening walk through Switzerland’s most charming lakeside town, and get acquainted with one another over dinner together. Sleep in Luzern (2 nights). No bus. Walking: light.",
      },
    ],
    includes: [
      "Air Fares, 3 Nights Hotel Accommodation",
      "Tour Guide",
      "Entrance Fees",
      "All transportation in destination location",
    ],
    excludes: [
      "Guide Service Fee",
      "Driver Service Fee",
      "Any Private Expenses",
      "Room Service Fees",
    ],
    desc: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents.Lorem Ipsum decided to leave for the far World of Grammar. The Big Oxmox advised her not to do so, because there were thousands of bad Comma wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way. When she reached the first hills of t",
    expect:
      "Curabitur blandit tempus porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Etiam porta sem malesuada magna mollis euismod. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Maecenas sed diam eget risus varius blandit sit amet non magna. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec ullamcorper nulla non metus auctor fringilla.",
  },
];

export const todayTopDeals = [
  {
    id: 1,
    image:
      "https://mytravel.madrasthemes.com/wp-content/uploads/2022/03/img2-2.jpeg",
    title: "Save big on hotels!",
    desc: "Book and save with Trip.com on your next stay",
  },
  {
    id: 2,
    image:
      "https://mytravel.madrasthemes.com/wp-content/uploads/2022/02/img1410300.jpeg",
    title: "Earning Asiana Club Miles Just Got Easier!",
    desc: "Book Hotels and Earn Asiana Club Miles!",
  },
  {
    id: 3,
    image:
      "https://mytravel.madrasthemes.com/wp-content/uploads/2022/02/img13-3.jpeg",
    title: "Experience Europe Your Way",
    desc: "With up to 30% Off, experience Europe your way!",
  },
  {
    id: 4,
    image:
      "https://mytravel.madrasthemes.com/wp-content/uploads/2022/03/img2-2.jpeg",
    title: "Save big on hotels!",
    desc: "Book and save with Trip.com on your next stay",
  },
  {
    id: 5,
    image:
      "https://mytravel.madrasthemes.com/wp-content/uploads/2022/02/img1410300.jpeg",
    title: "Earning Asiana Club Miles Just Got Easier!",
    desc: "Book Hotels and Earn Asiana Club Miles!",
  },
  {
    id: 6,
    image:
      "https://mytravel.madrasthemes.com/wp-content/uploads/2022/02/img13-3.jpeg",
    title: "Experience Europe Your Way",
    desc: "With up to 30% Off, experience Europe your way!",
  },
];
