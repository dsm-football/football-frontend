import React from "react";
import { Switch, Route } from "react-router-dom";
import { Login, MainPage } from "../components";
import {
  ClubManagementContainer,
  SignupContainer,
  ClubEstblContainer,
} from "../containers";

const MainRouter = () => {
  return (
    <>
      <Switch>
        <Route
          exact
          path="/club/management"
          component={ClubManagementContainer}
        />
        <Route exact path="/clubEstbl" component={ClubEstblContainer} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={MainPage} />
        <Route exact path="/signup" component={SignupContainer} />
      </Switch>
    </>
  );
};

export default MainRouter;
