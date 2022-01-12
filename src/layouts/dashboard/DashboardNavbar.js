import {
  Avatar,
  Badge,
  Button,
  IconButton,
  Popover,
  Toolbar,
  Typography,
  MenuItem,
} from "@mui/material";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import MuiAppBar from "@mui/material/AppBar";
import { auth } from "../../firebase";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Box } from "@mui/system";
import { signOut } from "firebase/auth";
import { logout } from "../../features/user/userSlice";
import { Link as RouterLink } from "react-router-dom";
import { useDispatch } from "react-redux";

const MENU_OPTIONS = [
  {
    label: "Profile",
    linkTo: "./profile",
  },
  {
    label: "Settings",
    linkTo: "./profile/settings",
  },
];

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
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const dispatch = useDispatch();

  const profileMenuToggleHandler = () => {
    setProfileMenuOpen((prevState) => !prevState);
  };

  const logoutHandler = () => {
    signOut(auth)
      .then(() => {
        dispatch(logout());
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

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
        <IconButton onClick={profileMenuToggleHandler}>
          <Badge
            overlap='circular'
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            badgeContent={
              !profileMenuOpen ? (
                <KeyboardArrowDownIcon fontSize='large' />
              ) : (
                <KeyboardArrowUpIcon fontSize='large' />
              )
            }
          >
            <Avatar
              alt={auth.currentUser.displayName}
              src={auth.currentUser.photoURL}
            />
          </Badge>
        </IconButton>

        <Popover
          open={profileMenuOpen}
          onClose={profileMenuToggleHandler}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          transformOrigin={{ vertical: "top", horizontal: "right" }}
          PaperProps={{
            sx: {
              mt: -12.5,
              ml: -2.5,
              overflow: "inherit",
              border: (theme) => `solid 1px ${theme.palette.grey[500_8]}`,
              width: 200,
            },
          }}
        >
          <Box sx={{ my: 1.5, px: 2.5 }}>
            <Typography variant='subtitle1' noWrap>
              Welcome {auth.currentUser.displayName}
            </Typography>
            <Typography variant='body2' sx={{ color: "text.secondary" }} noWrap>
              {auth.currentUser.email}
            </Typography>
          </Box>
          {MENU_OPTIONS.map((option) => (
            <MenuItem
              key={option.label}
              to={option.linkTo}
              component={RouterLink}
              onClick={profileMenuToggleHandler}
              sx={{ typography: "body2", py: 1, px: 2.5 }}
            >
              {option.label}
            </MenuItem>
          ))}

          <Box sx={{ p: 2, pt: 1.5 }}>
            <Button
              fullWidth
              onClick={logoutHandler}
              color='inherit'
              variant='outlined'
            >
              Logout
            </Button>
          </Box>
        </Popover>
      </Toolbar>
    </AppBar>
  );
};

export default DashboardNavbar;
