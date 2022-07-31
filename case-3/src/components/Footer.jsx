import React from "react";
import { Container, Typography, Box } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

export default function Footer() {
  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        height: "50vh",
        backgroundColor: "#B1464A",
        display: "flex",
        alignItems: "space-between",
      }}
    >
      <Box sx={{ flex: 2, margin: "3rem" }}>
        <Typography variant="h1">
          GET READY TO FEEL THE TASTE OF EVERYONE'S FAVOURITE
        </Typography>
      </Box>
      <Box
        sx={{
          flex: 1,
          margin: "4rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "70%",
        }}
      >
        <Typography variant="h4">OUR LOCATION</Typography>
        <Typography variant="body2">
          Jl Raya Wonokromo 37-A, Surabaya
          <br /> Jawa Timur, 60242
          <br /> 031-841-6445
        </Typography>
        <Typography variant="body2">
          Jl Pintu Air Raya 58-64, Jakarta
          <br /> DKI Jakarta, 10710
          <br /> 021-351-1559
        </Typography>
        <Typography variant="body2">
          Jl Balongsari Tama Bl 3 A/33, Surabaya
          <br /> Jawa Timur, 60186
          <br /> 031-740-5184
        </Typography>
      </Box>
      <Box
        sx={{
          flex: 1,
          margin: "4rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "70%",
        }}
      >
        <Typography variant="h4">OPEN HOURS</Typography>
        <Typography variant="body2">
          Monday - Friday
          <br />
          08.00 - 22.00
        </Typography>
        <Typography variant="body2">
          Saturday - Sunday
          <br />
          08.00 - 24.00
        </Typography>
        <Typography variant="h4" sx={{ marginTop: "2rem" }}>
          SOCIAL MEDIA
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "40%",
          }}
        >
          <FacebookIcon fontSize="large" sx={{ color: "#F6E1C6" }} />
          <InstagramIcon fontSize="large" sx={{ color: "#F6E1C6" }} />
          <TwitterIcon fontSize="large" sx={{ color: "#F6E1C6" }} />
        </Box>
      </Box>
    </Container>
  );
}
