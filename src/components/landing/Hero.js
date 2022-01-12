import { Container, Grid, Typography } from "@mui/material";
import React from "react";

const Hero = () => {
  return (
    <Container>
      <Grid
        container
        sx={{
          height: "calc(100vh - 80px)",
          alignItems: "center",
        }}
      >
        <Grid item xs={6}>
          <Typography> Hello there</Typography>
          <Typography> My name is app</Typography>
          <Typography> AAAAAAAAAAAAAAAAGGGGGGGHHHHH</Typography>
        </Grid>
        <Grid item xs={6}></Grid>
      </Grid>
    </Container>
  );
};

export default Hero;
