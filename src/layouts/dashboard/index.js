import { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

import DashboardDrawer from "./DashboardDrawer";
import { Outlet } from "react-router";
import DashboardNavbar from "./DashboardNavbar";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
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

const DashboardLayout = () => {
  const [open, setOpen] = useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <DashboardNavbar onDrawerOpen={handleDrawerOpen} open={open} />
      <DashboardDrawer onDrawerClose={handleDrawerClose} open={open} />
      <Main open={open} sx={{ mt: "50px" }}>
        <Outlet />
      </Main>
    </Box>
  );
};

export default DashboardLayout;
