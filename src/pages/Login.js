import { Grid, CssBaseline, Box, Typography, Link } from "@mui/material";
import React from "react";
import AuthHeader from "../components/authentication/AuthHeader";
import AuthSocial from "../components/authentication/AuthSocial";
import LoginForm from "../components/authentication/LoginForm";

import { Link as RouterLink } from "react-router-dom";

const LoginPage = () => {
  return (
    <Grid component='main' container sx={{ height: "100vh" }}>
      <CssBaseline />

      <AuthHeader>
        Don’t have an account?{" "}
        <Link
          underline='none'
          variant='subtitle2'
          component={RouterLink}
          to='/register'
        >
          Sign Up
        </Link>
      </AuthHeader>

      <Grid
        item
        xs={false}
        sm={5}
        md={5}
        sx={{
          backgroundImage:
            "url(https://images.pexels.com/photos/7063765/pexels-photo-7063765.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)",
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></Grid>
      <Grid
        item
        xs={12}
        sm={7}
        md={7}
        elevation={6}
        square
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box sx={{ height: "60%", width: "50%" }}>
          <Typography variant='h4'>Sign in to Expense Tracker</Typography>
          <Typography variant='h6'>Please fill out the form</Typography>
          <AuthSocial />
          <LoginForm />
        </Box>
      </Grid>
    </Grid>
  );
};

export default LoginPage;
