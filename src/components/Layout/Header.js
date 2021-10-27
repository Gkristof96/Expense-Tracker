import { Button, Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import LoginIcon from "@mui/icons-material/Login";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../features/user/userSlice";

const Header = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const loginHandler = () => {
    dispatch(login());
  };
  return (
    <Container sx={{ height: "80px", display: "flex", alignItems: "center" }}>
      <Typography
        onClick={() => history.push("/")}
        variant='h1'
        sx={{ flexGrow: 1, fontSize: "28px" }}
      >
        Expense Tracker
      </Typography>
      <Button
        onClick={() => history.push("/auth")}
        variant='contained'
        elevation={0}
        endIcon={<LoginIcon />}
      >
        Sign Up
      </Button>
      <Button onClick={loginHandler}>Login</Button>
    </Container>
  );
};

export default Header;
