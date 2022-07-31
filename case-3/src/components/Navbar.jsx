import React from "react";
import { AppBar, Container, Toolbar, Typography, Link } from "@mui/material";
import LocalDiningIcon from "@mui/icons-material/LocalDining";

export default function Navbar({
  scrollToReviewHandler,
  scrollToMenuHandler,
  scrolltoHome,
}) {
  return (
    <AppBar
      position="fixed"
      sx={{
        height: "8vh",
        backgroundColor: "#B1464A",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Container maxWidth={false}>
        <Toolbar disableGutters>
          <LocalDiningIcon sx={{ mr: 1, fontSize: "3rem", color: "#F6E1C6" }} />
          <Typography
            onClick={scrolltoHome}
            sx={{
              mr: 2,
              fontSize: "2.2rem",
              fontWeight: 900,
              letterSpacing: ".2rem",
              marginRight: "2rem",
              color: "#F6E1C6",
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            AYAM GEPREK
          </Typography>
          <Link
            onClick={scrolltoHome}
            underline="none"
            variant="h6"
            sx={{
              mr: 2,
              color: "#FFFFFF",
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            HOME
          </Link>
          <Link
            onClick={scrollToMenuHandler}
            underline="none"
            variant="h6"
            sx={{
              mr: 2,
              color: "#FFFFFF",
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            MENU
          </Link>
          <Link
            onClick={scrollToReviewHandler}
            underline="none"
            variant="h6"
            sx={{
              mr: 2,
              color: "#FFFFFF",
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            REVIEW
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
