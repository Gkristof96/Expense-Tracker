import { useState, Fragment } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { format } from "date-fns";
import { useSelector } from "react-redux";
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
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawerHandler = () => setIsDrawerOpen((prevState) => !prevState);

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
          <h1>Fasz</h1>
          {props.children}
        </Main>
      </Box>
    </Fragment>
  );
};

export default Layout;
