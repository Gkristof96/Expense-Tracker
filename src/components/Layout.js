import Avatar from "@mui/material/Avatar";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import HomeIcon from "@mui/icons-material/Home";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import RemoveIcon from "@mui/icons-material/Remove";
import { useHistory, useLocation } from "react-router";
import { format } from "date-fns";
import { Box } from "@mui/system";
import {
  AppBar,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => {
  return {
    page: {
      backgroundColor: "#f9f9f9",
      width: "100%",
      padding: "10px",
    },
    drawer: {
      width: drawerWidth,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    root: {
      display: "flex",
    },
    active: {
      backgroundColor: "#f4f4f4",
    },
    title: {
      padding: "10px",
    },
    appbar: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
    toolbar: { height: "80px" },
    date: {
      flexGrow: 1,
    },
    avatar: {
      marginLeft: "10px",
    },
  };
});

const Layout = (props) => {
  const history = useHistory();
  const location = useLocation();
  const classes = useStyles();

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
    <Box sx={{ display: "flex" }}>
      <Drawer
        classes={{ paper: classes.drawerPaper }}
        className={classes.drawer}
        variant='permanent'
        anchor='left'
      >
        <Box
          sx={{
            width: drawerWidth,
            height: drawerWidth,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Avatar
            alt='Remy Sharp'
            src='trainer_2.jpg'
            sx={{
              width: 70,
              height: 70,
              mb: 1,
            }}
          />
          <Typography variant='h5' component='h2'>
            Salma Hayek
          </Typography>
        </Box>
        <List>
          {menuItems.map((item) => (
            <ListItem
              key={item.text}
              button
              onClick={() => history.push(item.path)}
              className={
                location.pathname === item.path ? classes.active : null
              }
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <AppBar elevation={0} className={classes.appbar}>
        <Toolbar>
          <Typography className={classes.date}>
            Today is the {format(new Date(), "do MMMM Y")}
          </Typography>
          <Typography>Mario</Typography>
        </Toolbar>
      </AppBar>
      <div className={classes.page}>
        <div className={classes.toolbar}></div>
        {props.children}
      </div>
    </Box>
  );
};

export default Layout;
