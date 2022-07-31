import React from "react";
import { Box, Typography } from "@mui/material";

export default function ListReview({
  reviewerImg,
  reviewer,
  reviewJob,
  review,
}) {
  return (
    <Box
      sx={{
        display: "flex",
        width: "30%",
        justifyContent: "center",
        margin: "0.5rem",
      }}
    >
      <Box
        component="img"
        src={reviewerImg}
        alt=""
        sx={{ height: "30%", width: "30%" }}
      />
      <Box>
        <Typography sx={{ fontSize: "1.8rem", margin: "0.5rem 1rem" }}>
          {reviewer}
        </Typography>
        <Typography sx={{ fontSize: "1.5rem", margin: "0.5rem 1rem" }}>
          {reviewJob}
        </Typography>
        <Typography sx={{ fontSize: "1.5rem", margin: "0.5rem 1rem" }}>
          {review}
        </Typography>
      </Box>
    </Box>
  );
}
