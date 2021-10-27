import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Layout from "./components/Layout";

import Incomes from "./pages/Incomes";
import Home from "./pages/Home";
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
              {isLoggedIn ? <Home /> : <Authentication />}
            </Route>
            <Router path='/expenses'>
              <Expenses />
            </Router>
            <Router path='/incomes'>
              <Incomes />
            </Router>
            <Router path='/analytics'>
              <Analytics />
            </Router>
          </Switch>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
