import React from "react";
import { styled } from "@mui/material/styles";
import { Link as RouterLink } from "react-router-dom";
// material
import { Typography } from "@mui/material";

const HeaderStyle = styled("div")(({ theme }) => ({
  top: 0,
  zIndex: 9,
  width: "100%",
  display: "flex",
  alignItems: "center",
  position: "absolute",
  padding: theme.spacing(3),
  justifyContent: "space-between",
}));

const AuthHeader = (props) => {
  return (
    <HeaderStyle>
      <RouterLink to='/'>
        <img src='logo.png' alt='logo' />
      </RouterLink>

      <Typography
        variant='body2'
        sx={{
          mt: { md: -2 },
        }}
      >
        {props.children}
      </Typography>
    </HeaderStyle>
  );
};

export default AuthHeader;
