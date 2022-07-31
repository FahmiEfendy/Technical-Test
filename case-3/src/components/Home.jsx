import React from "react";
import { Container, Box, Typography, Button } from "@mui/material";
import ayamGeprek from "../img/ayam-geprek.png";

export default function Home({ scrollToMenuHandler }) {
  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{ marginTop: "6vh", height: "100vh" }}
    >
      <Box sx={{ display: "flex", height: "100%" }}>
        <Box
          sx={{
            flex: 1,
            backgroundColor: "#B1464A",
          }}
        >
          <Box
            sx={{
              height: "90%",
              width: "80%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              marginLeft: "3rem",
            }}
          >
            <Typography variant="h2">
              AFFORDABLE AND SUITABLE SPICY TASTE FOR EVERYONE
            </Typography>
            <Typography variant="h5" sx={{ marginTop: "1.5rem" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
              necessitatibus corporis adipisci blanditiis vel harum ullam
              perspiciatis magni illo animi, esse minima illum dolore dicta id
              veniam laudantium asperiores iusto.
            </Typography>
            <Box sx={{ marginTop: "3rem" }}>
              <Button
                onClick={scrollToMenuHandler}
                variant="contained"
                sx={{
                  fontSize: "1.5rem",
                  backgroundColor: "#D9CCBC",
                  color: "#000000",
                  textTransform: "none",
                  "&:hover": {
                    backgroundColor: "#F9E0BF",
                  },
                }}
              >
                View Menu
              </Button>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            flex: 1,
            backgroundColor: "#F6E1C6",
          }}
        >
          <Box
            sx={{
              clipPath: "circle(39.6% at 95% 55%)",
              backgroundColor: "#B1464A",
              width: "50%",
              height: "100%",
              position: "absolute",
              top: "0%",
            }}
          ></Box>
          <Box
            sx={{
              height: "90%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
            }}
          >
            <img
              src={ayamGeprek}
              alt="ayam geprek"
              sx={{ position: "relative", transform: "skew(30deg, 20deg)" }}
            />
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
