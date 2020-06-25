import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Customers from "./customers";
import Rentals from "./rentals";
import Movies from "./movies";
import NotFound from "./notFound";
import MovieForm from "./movieForm";
import LoginForm from "./loginForm";
import Logout from "./logout";
import RegisterForm from "./registerForm";
import ProtectedRoute from "./common/protectedRoute";

const Routes = ({ user }) => {
  return (
    <Switch>
      <Route path="/login" component={LoginForm} />
      <Route path="/logout" component={Logout} />
      <Route path="/register" component={RegisterForm} />
      <ProtectedRoute path="/movies/:id" component={MovieForm} />
      <Route
        path="/movies"
        render={props => <Movies {...props} user={user} />}
      />
      <Route path="/movies/new" component={MovieForm} />
      <Route path="/customers" component={Customers} />
      <Route path="/rental" component={Rentals} />
      <Route path="/not-found" component={NotFound} />
      <Redirect from="/" exact to="/movies" />
      <Redirect to="/not-found" />
    </Switch>
  );
};

export default Routes;
