import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HomePage } from "../pages";

export const MainRoutes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
};
