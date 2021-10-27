import { useState, Fragment } from "react";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import HomeIcon from "@mui/icons-material/Home";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import RemoveIcon from "@mui/icons-material/Remove";
import { useHistory } from "react-router";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { format } from "date-fns";
import Button from "@mui/material/Button";
import { Avatar } from "@mui/material";
import { logout } from "../../features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";

import SideDrawer from "./Drawer";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const Layout = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawerHandler = () => setIsDrawerOpen((prevState) => !prevState);

  const logoutHandler = () => {
    setIsDrawerOpen(false);
    dispatch(logout());
  };

  const menuItems = [
    {
      text: "Home",
      path: "/",
      icon: <HomeIcon />,
    },
    {
      text: "Expenses",
      path: "/expenses",
      icon: <ControlPointIcon />,
    },
    {
      text: "Incomes",
      path: "/incomes",
      icon: <RemoveIcon />,
    },
    {
      text: "Analytics",
      path: "/analytics",
      icon: <AnalyticsIcon />,
    },
  ];
  return (
    <Fragment>
      {!isLoggedIn && <Header />}
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        {isLoggedIn && (
          <SideDrawer
            isDrawerOpen={isDrawerOpen}
            onToggleDrawer={toggleDrawerHandler}
          />
        )}
        <Main open={isDrawerOpen}>
          {isLoggedIn && (
            <Box
              sx={{
                height: "65px",
                display: "flex",
                alignItems: "center",
                p: "25px",
                mb: "25px",
                backgroundColor: "#3f51b5",
                color: "#f4f4f4",
              }}
            >
              <IconButton
                color='inherit'
                aria-label='open drawer'
                onClick={toggleDrawerHandler}
                edge='start'
                sx={{ mr: 2, ...(isDrawerOpen && { display: "none" }) }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant='h1' sx={{ flexGrow: 1, fontSize: "28px" }}>
                Expense Tracker
              </Typography>
              <Typography>
                Today is the {format(new Date(), "do MMMM Y")}
              </Typography>
            </Box>
          )}
          {props.children}
        </Main>
      </Box>
    </Fragment>
  );
};

export default Layout;
