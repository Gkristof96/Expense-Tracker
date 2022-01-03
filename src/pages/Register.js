import { CssBaseline, Grid, Link, Typography } from "@mui/material";
import React from "react";
import AuthHeader from "../components/authentication/AuthHeader";
import { Link as RouterLink } from "react-router-dom";
import { Box } from "@mui/system";

import RegisterForm from "../components/authentication/RegisterForm";

const RegisterPage = () => {
  return (
    <Grid component='main' container sx={{ height: "100vh" }}>
      <CssBaseline />
      <AuthHeader>
        You have an account?{" "}
        <Link
          underline='none'
          variant='subtitle2'
          component={RouterLink}
          to='/login'
        >
          Sign In
        </Link>
      </AuthHeader>

      <Grid
        item
        xs={false}
        sm={5}
        md={5}
        sx={{
          backgroundImage:
            "url(https://images.pexels.com/photos/5668839/pexels-photo-5668839.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)",
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
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box sx={{ height: "60%", width: "50%" }}>
          <Typography variant='h4'>Sign Up</Typography>
          <Typography variant='h6' sx={{ mb: "25px" }}>
            Fill the form, and start to use our application
          </Typography>
          <RegisterForm />
          <Typography
            variant='body2'
            align='center'
            sx={{ color: "text.secondary", mt: 3 }}
          >
            By registering, I agree to Minimal&nbsp;
            <Link underline='always' sx={{ color: "text.primary" }}>
              Terms of Service
            </Link>
            &nbsp;and&nbsp;
            <Link underline='always' sx={{ color: "text.primary" }}>
              Privacy Policy
            </Link>
            .
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default RegisterPage;
