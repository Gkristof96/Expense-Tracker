import React from "react";
import { Container, Typography, Button, Box } from "@mui/material";
import { styled } from "@mui/material";
import { useNavigate } from "react-router-dom";

const HEADER_DEKSTOP = 80;

const HeaderStyle = styled("header")(({ theme }) => ({
  height: HEADER_DEKSTOP,
}));

const Header = () => {
  const navigate = useNavigate();

  const navigateToLogin = () => {
    navigate("/login");
  };

  const navigateToRegister = () => {
    navigate("/register");
  };

  return (
    <HeaderStyle>
      <Container sx={{ height: "80px", display: "flex", alignItems: "center" }}>
        <Box
          sx={{
            display: "flex",
            flexGrow: 1,
            alignItems: "center",
          }}
        >
          <img src='logo.png' alt='logo' />
          <Typography
            variant='h1'
            sx={{ ml: "10px", mt: "10px", fontSize: "28px" }}
          >
            Expense Tracker
          </Typography>
        </Box>

        <Box>
          <Button onClick={navigateToLogin}>Sign In</Button>
          <Button onClick={navigateToRegister}>Sign Up</Button>
        </Box>
      </Container>
    </HeaderStyle>
  );
};

export default Header;
