import React from "react";
import { Switch, Route } from "react-router-dom";
import {
  ClubManagementContainer,
  MatchingRegistrationContainer,
  SignupContainer,
  ClubEstblContainer,
} from "../containers";

import { Login, MainPage, MyPage, List, Match } from "../components";

const MainRouter = () => {
  return (
    <>
      <Switch>
        <Route
          exact
          path="/club/management/:id"
          component={ClubManagementContainer}
        />
        <Route exact path="/clubestbl" component={ClubEstblContainer} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={MainPage} />
      </Switch>
    </>
  );
};

export default MainRouter;
