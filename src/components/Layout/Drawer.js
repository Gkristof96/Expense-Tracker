import HomeIcon from "@mui/icons-material/Home";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import RemoveIcon from "@mui/icons-material/Remove";
import { useHistory } from "react-router";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import { Avatar } from "@mui/material";
import { logout } from "../../features/user/userSlice";
import { useDispatch } from "react-redux";
import LogoutIcon from "@mui/icons-material/Logout";
import SettingsIcon from "@mui/icons-material/Settings";

import { signOut } from "firebase/auth";
import { auth } from "../../firebase";

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
    signOut(auth)
      .then(() => {
        dispatch(logout());
      })
      .catch((err) => {
        console.log(err.message);
      });
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
          src={auth.currentUser.photoURL}
          sx={{ width: 100, height: 100, mb: "25px" }}
        />
        <Typography>{auth.currentUser.displayName}</Typography>
      </Box>
      <Box
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
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
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            mb: "25px",
          }}
        >
          <Button endIcon={<SettingsIcon />} sx={{ m: "5px" }}>
            Setting
          </Button>
          <Button
            endIcon={<LogoutIcon />}
            variant='contained'
            elevation={0}
            sx={{ m: "10px", mb: "0" }}
            onClick={logoutHandler}
          >
            Logout
          </Button>
        </Box>
      </Box>
    </Drawer>
  );
};

export default SideDrawer;
