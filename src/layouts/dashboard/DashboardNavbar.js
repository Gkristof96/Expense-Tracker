import { Avatar, Badge, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";
import { styled, useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import MuiAppBar from "@mui/material/AppBar";
import { auth } from "../../firebase";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  backgroundColor: "#eee",
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DashboardNavbar = (props) => {
  return (
    <AppBar elevation={0} position='fixed' open={props.open}>
      <Toolbar>
        <IconButton
          variant='contained'
          color='primary'
          aria-label='open drawer'
          onClick={props.onDrawerOpen}
          edge='start'
          sx={{ mr: 2, ...(props.open && { display: "none" }) }}
        >
          <MenuIcon />
        </IconButton>

        <Typography
          variant='h6'
          color='GrayText'
          noWrap
          sx={{ flexGrow: 1 }}
          component='div'
        >
          Expense Tracker
        </Typography>
        <Badge
          overlap='circular'
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          badgeContent={<KeyboardArrowDownIcon fontSize='large' color='gray' />}
        >
          <Avatar
            alt={auth.currentUser.displayName}
            src={auth.currentUser.photoURL}
          />
        </Badge>
      </Toolbar>
    </AppBar>
  );
};

export default DashboardNavbar;
