import {
  AppBar,
  makeStyles,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@material-ui/core";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import HomeIcon from "@mui/icons-material/Home";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import RemoveIcon from "@mui/icons-material/Remove";
import { useHistory, useLocation } from "react-router";
import { format } from "date-fns";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => {
  return {
    page: {
      backgroundColor: "#f9f9f9",
      width: "100%",
      padding: theme.spacing(3),
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
      padding: theme.spacing(2),
    },
    appbar: {
      width: `calc(100% - ${drawerWidth}px)`,
      backgroundColor: "#f4f4f4",
      color: "#212121",
    },
    toolbar: theme.mixins.toolbar,
    date: {
      flexGrow: 1,
    },
    avatar: {
      marginLeft: theme.spacing(2),
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
    <div className={classes.root}>
      <AppBar elevation={0} className={classes.appbar}>
        <Toolbar>
          <Typography className={classes.date}>
            Today is the {format(new Date(), "do MMMM Y")}
          </Typography>
          <Typography>Mario</Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        classes={{ paper: classes.drawerPaper }}
        className={classes.drawer}
        variant='permanent'
        anchor='left'
      >
        <div>
          <Typography className={classes.title}>Expense Tracker</Typography>
        </div>
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
      <div className={classes.page}>
        <div className={classes.toolbar}></div>
        {props.children}
      </div>
    </div>
  );
};

export default Layout;
