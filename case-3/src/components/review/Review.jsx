import React from "react";
import { Container, Box, Typography } from "@mui/material";
import { listReview } from "../../ListMenu";
import ListReview from "./ListReview";

export default function Review(props) {
  return (
    <Container
      ref={props.refs}
      maxWidth={false}
      disableGutters
      sx={{
        height: "100vh",
        backgroundColor: "#F6E1C6",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box sx={{ marginTop: "5rem" }}>
        <Typography variant="h3">WHAT THEY SAY ABOUT US</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          marginTop: "4rem",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {listReview.map((item) => (
          <ListReview
            key={item.id}
            reviewerImg={item.reviewerImg}
            reviewer={item.reviewer}
            reviewJob={item.reviewJob}
            review={item.review}
          />
        ))}
      </Box>
    </Container>
  );
}
