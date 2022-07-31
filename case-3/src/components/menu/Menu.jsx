import React from "react";
import { Container, Box, Typography } from "@mui/material";
import { listMenu } from "../../ListMenu";
import ListMenu from "./ListMenu";

function Menu(props) {
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
      <Box sx={{ paddingTop: "5rem" }}>
        <Typography variant="h3">OUR MENU</Typography>
      </Box>
      <Box sx={{ display: "flex", marginTop: "4rem" }}>
        {listMenu.map((item) => (
          <ListMenu
            key={item.id}
            img={item.img}
            menuName={item.menuName}
            menuDescription={item.menuDescription}
            menuPrice={item.menuPrice}
          />
        ))}
      </Box>
    </Container>
  );
}

export default Menu;
