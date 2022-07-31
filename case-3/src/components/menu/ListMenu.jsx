import React from "react";
import { Box, Typography } from "@mui/material";

export default function ListMenu({
  img,
  menuName,
  menuDescription,
  menuPrice,
}) {
  return (
    <Box
      sx={{
        margin: "0 4.5rem",
        width: "30%",
        borderRadius: "1.5rem",
      }}
    >
      <Box
        component="img"
        src={img}
        alt=""
        sx={{ width: "100%", height: "55%", borderRadius: "1.2rem" }}
      />
      <Typography
        variant="body1"
        sx={{ marginTop: "0.8rem", fontWeight: "600" }}
      >
        {menuName}
      </Typography>
      <Typography
        sx={{ marginTop: "0.2rem", fontSize: "1.2rem", lineHeight: 1.8 }}
      >
        {menuDescription}
      </Typography>
      <Typography
        sx={{ marginTop: "1rem", fontWeight: "600", fontSize: "2.2rem" }}
      >
        {menuPrice}
      </Typography>
    </Box>
  );
}
