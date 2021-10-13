import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Layout from "./components/Layout";

import Incomes from "./pages/Incomes";
import Home from "./pages/Home";
import Expenses from "./pages/Expenses";
import Analytics from "./pages/Analytics";

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path='/'>
            <Home />
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
  );
}

export default App;
