import React from "react";

// mui
import {
  Box,
  Button,
  Container,
  Grid,
  InputBase,
  Typography,
} from "@mui/material";

// icons
import CallIcon from "@mui/icons-material/Call";
import Link from "next/link";

const MainFooter = () => {
  return (
    <Container maxWidth="lg">
      <Grid
        container
        py={5}
        my={5}
        sx={{ borderTop: 1, borderBottom: 1, borderColor: "grey.200" }}
      >
        <Grid item md={3}>
          <Typography variant="h6" sx={{ fontSize: 18 }}>
            Need My Travel Help?
          </Typography>
          <Grid container mt={2} sx={{ alignItems: "center" }}>
            <Grid md={2}>
              <CallIcon sx={{ fontSize: 42, color: "primary.main" }} />
            </Grid>
            <Grid md={10}>
              <Typography variant="body1" sx={{ color: "grey.600" }}>
                Got Questions? Call us 24/7!
              </Typography>
              <Typography variant="body1" sx={{ color: "grey.600" }}>
                Call Us: (888) 1234 56789
              </Typography>
            </Grid>
          </Grid>
          <Typography variant="body1" mt={2.5}>
            Contact Info
          </Typography>
          <Typography variant="body1" sx={{ color: "grey.600" }} mt={1}>
            PO Box CT16122 Collins Street West, Victoria 8007,Australia.
          </Typography>
        </Grid>
        <Grid item md={2}>
          <Typography variant="h6" sx={{ fontSize: 18 }}>
            Company
          </Typography>
          <Typography variant="body1" sx={{ mt: 2, color: "grey.600" }}>
            About us
          </Typography>
          <Typography variant="body1" sx={{ mt: 1, color: "grey.600" }}>
            Careers
          </Typography>
          <Typography variant="body1" sx={{ mt: 1, color: "grey.600" }}>
            Terms of Use
          </Typography>
          <Typography variant="body1" sx={{ mt: 1, color: "grey.600" }}>
            Privacy Statement
          </Typography>
          <Typography variant="body1" sx={{ mt: 1, color: "grey.600" }}>
            Give Us Feedbacks
          </Typography>
        </Grid>
        <Grid item md={2}>
          <Typography variant="h6" sx={{ fontSize: 18 }}>
            Other Services
          </Typography>
          <Typography variant="body1" sx={{ mt: 2, color: "grey.600" }}>
            Investor Relations
          </Typography>
          <Typography variant="body1" sx={{ mt: 1, color: "grey.600" }}>
            Rewards Program
          </Typography>
          <Typography variant="body1" sx={{ mt: 1, color: "grey.600" }}>
            PointsPLUS
          </Typography>
          <Typography variant="body1" sx={{ mt: 1, color: "grey.600" }}>
            Partners
          </Typography>
          <Typography variant="body1" sx={{ mt: 1, color: "grey.600" }}>
            List My Hotel
          </Typography>
        </Grid>
        <Grid item md={2}>
          <Typography variant="h6" sx={{ fontSize: 18 }}>
            support
          </Typography>
          <Typography variant="body1" sx={{ mt: 2, color: "grey.600" }}>
            Account
          </Typography>
          <Typography variant="body1" sx={{ mt: 1, color: "grey.600" }}>
            Legal
          </Typography>
          <Typography variant="body1" sx={{ mt: 1, color: "grey.600" }}>
            Contact
          </Typography>
          <Typography variant="body1" sx={{ mt: 1, color: "grey.600" }}>
            Affiliate Program
          </Typography>
          <Typography variant="body1" sx={{ mt: 1, color: "grey.600" }}>
            Privacy Policy
          </Typography>
        </Grid>
        <Grid item md={3}>
          <Typography variant="h6" sx={{ fontSize: 18 }}>
            Mailing List
          </Typography>
          <Typography variant="body1" sx={{ mt: 2, color: "grey.600" }}>
            Sign up for our mailing list to get latest updates and offers.
          </Typography>
          <Grid
            container
            mt={1}
            alignItems="center"
            justifyContent="space-between"
          >
            <Grid item md={7}>
              <InputBase
                fullWidth
                placeholder="Your Email"
                sx={{
                  border: 1,
                  px: 1,
                  py: 0.5,
                  borderRadius: 2,
                  borderColor: "grey.300",
                }}
              />
            </Grid>
            <Grid item md={4.5}>
              <Button variant="contained" fullWidth sx={{ p: 1, fontSize: 13 }}>
                Subscribe
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid pb={4} sx={{ borderBottom: 1, borderColor: "grey.200" }}>
        <Typography variant="h5">My Travel</Typography>
      </Grid>
      <Grid
        container
        py={2}
        sx={{
          borderBottom: 1,
          borderColor: "grey.200",
          justifyContent: "space-between",
        }}
      >
        <Grid item md={3}>
          <Typography variant="body2">
            © 2022 MyTravel. All rights reserved
          </Typography>
        </Grid>
        <Grid item md={5} container justifyContent="space-between">
          <Link
            href="/"
            style={{
              fontSize: "18px",
              color: "black",
              textDecoration: "none",
            }}
          >
            Home
          </Link>
          <Link
            href="/hotel"
            style={{
              fontSize: "18px",
              color: "black",
              textDecoration: "none",
            }}
          >
            Hotel
          </Link>
          <Link
            href="/tour"
            style={{
              fontSize: "18px",
              color: "black",
              textDecoration: "none",
            }}
          >
            Tour
          </Link>
          <Link
            href="/activity"
            style={{
              fontSize: "18px",
              color: "black",
              textDecoration: "none",
            }}
          >
            Activity
          </Link>
          <Link
            href="/rental"
            style={{
              fontSize: "18px",
              color: "black",
              textDecoration: "none",
            }}
          >
            Rental
          </Link>
          <Link
            href="/"
            style={{
              fontSize: "18px",
              color: "black",
              textDecoration: "none",
            }}
          >
            Car
          </Link>
          <Link
            href="/yacht"
            style={{
              fontSize: "18px",
              color: "black",
              textDecoration: "none",
            }}
          >
            Yacht
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
};

export default MainFooter;
