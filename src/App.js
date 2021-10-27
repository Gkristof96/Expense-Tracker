import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useSelector } from "react-redux";
import Layout from "./components/Layout/Layout";

import Incomes from "./pages/Incomes";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Expenses from "./pages/Expenses";
import Analytics from "./pages/Analytics";
import Authentication from "./pages/Authentication";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  palette: {
    secondary: {
      main: "#357a38",
    },
  },
  typography: {
    fontFamily: "Oswald",
    fontWeightLight: 400,
  },
});

function App() {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Switch>
            <Route exact path='/'>
              {isLoggedIn ? <Dashboard /> : <Home />}
            </Route>
            <Route path='/expenses'>
              {isLoggedIn ? <Expenses /> : <Redirect to='/' />}
            </Route>
            <Route path='/incomes'>
              {isLoggedIn ? <Incomes /> : <Redirect to='/' />}
            </Route>
            <Route path='/auth'>
              {!isLoggedIn ? <Authentication /> : <Redirect to='/' />}
            </Route>
          </Switch>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
