import * as React from "react";
import { styled } from "@mui/material/styles";

import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Link as RouterLink } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import MoneyOffIcon from "@mui/icons-material/MoneyOff";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import FlagIcon from "@mui/icons-material/Flag";
import AnalyticsIcon from "@mui/icons-material/Analytics";

const drawerWidth = 240;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const DashboardDrawer = (props) => {
  const pages = [
    {
      title: "Dashboard",
      path: "./app",
      icon: <DashboardIcon />,
    },
    {
      title: "Expenses",
      path: "./expenses",
      icon: <MoneyOffIcon />,
    },
    {
      title: "Incomes",
      path: "./incomes",
      icon: <AttachMoneyIcon />,
    },
    {
      title: "Goals",
      path: "./goals",
      icon: <FlagIcon />,
    },
    {
      title: "Analytics",
      path: "./analytics",
      icon: <AnalyticsIcon />,
    },
  ];
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant='persistent'
      anchor='left'
      open={props.open}
    >
      <DrawerHeader>
        <IconButton onClick={props.onDrawerClose}>
          <ChevronLeftIcon />
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        {pages.map((page, index) => (
          <ListItem
            component={RouterLink}
            to={page.path}
            button
            key={page.title}
          >
            <ListItemIcon>{page.icon}</ListItemIcon>
            <ListItemText primary={page.title} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </Drawer>
  );
};

export default DashboardDrawer;
