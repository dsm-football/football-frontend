import React from "react";
import { Switch, Route } from "react-router-dom";
import { ClubEstbl, Login } from "../components";
import { ClubManagementContainer } from "../containers";

const MainRouter = () => {
  return (
    <>
      <Switch>
        <Route
          exact
          path="/club/management"
          component={ClubManagementContainer}
        />
        <Route exact path="/clubEstbl" component={ClubEstbl} />
        <Route exact path="/Login" component={Login} />
      </Switch>
    </>
  );
};

export default MainRouter;
