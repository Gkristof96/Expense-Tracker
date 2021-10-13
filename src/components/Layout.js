import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { makeStyles } from "@material-ui/core";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import HomeIcon from "@mui/icons-material/Home";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import RemoveIcon from "@mui/icons-material/Remove";
import { useHistory, useLocation } from "react-router";

const drawerWidth = 240;

const useStyles = makeStyles({
  page: {
    backgroundColor: "#f9f9f9",
    width: "100%",
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
      <div className={classes.page}>{props.children}</div>
    </div>
  );
};

export default Layout;
