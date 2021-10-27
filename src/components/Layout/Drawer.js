import { useState } from "react";
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
import Drawer from "@mui/material/Drawer";
import { Avatar } from "@mui/material";
import { logout } from "../../features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";

const drawerWidth = 240;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const SideDrawer = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const logoutHandler = () => {
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
  ];
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boySizing: "border-box",
        },
      }}
      variant='persistent'
      anchor='left'
      open={props.isDrawerOpen}
    >
      <DrawerHeader>
        <IconButton onClick={props.onToggleDrawer}>
          <CloseIcon />
        </IconButton>
      </DrawerHeader>
      <Divider />
      <Box
        sx={{
          height: drawerWidth,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Avatar
          src='trainer_2.jpg'
          sx={{ width: 100, height: 100, mb: "25px" }}
        />
        <Typography>Samantha</Typography>
      </Box>
      <List>
        {menuItems.map((item) => (
          <ListItem
            key={item.text}
            button
            onClick={() => history.push(item.path)}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
      <Button onClick={logoutHandler}>Logout</Button>
    </Drawer>
  );
};

export default SideDrawer;
