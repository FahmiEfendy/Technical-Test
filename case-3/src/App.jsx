import { useRef, useEffect } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Menu from "./components/menu/Menu";
import Footer from "./components/Footer";
import Review from "./components/review/Review";

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "Poppins",
    },
    h1: {
      color: "#F6E1C6",
    },
    h2: {
      fontSize: "4.4rem",
    },
    h3: {
      fontSize: "4.5rem",
      fontWeight: "600",
    },
    h4: {
      fontSize: "2.7rem",
      color: "#F6E1C6",
    },
    h5: {
      fontSize: "1.7rem",
    },
    h6: {
      fontSize: "1.5rem",
      letterSpacing: "0.2rem",
    },
    body1: {
      fontSize: "2rem",
    },
    body2: {
      fontSize: "1.3rem",
      lineHeight: 1.5,
      color: "#F6E1C6",
    },
  },
});

function App() {
  const menuRef = useRef(null);
  const reviewRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToMenuHandler = () => menuRef.current.scrollIntoView();

  const scrollToReviewHandler = () => reviewRef.current.scrollIntoView();

  const scrollToHome = () => {
    window.scrollTo(0, 0);
  };

  return (
    <ThemeProvider theme={theme}>
      <Navbar
        scrollToMenuHandler={scrollToMenuHandler}
        scrollToReviewHandler={scrollToReviewHandler}
        scrolltoHome={scrollToHome}
      />
      <Home />
      <Menu refs={menuRef} />
      <Review refs={reviewRef} />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
