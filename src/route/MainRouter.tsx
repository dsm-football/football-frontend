import React from "react";
import { Switch, Route } from "react-router-dom";
import { ClubEstbl, Login, MainPage } from "../components";
import { ClubManagementContainer, DetailClubContainer } from "../containers";

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
        <Route exact path="/" component={MainPage} />
        <Route exact path="/detail-club/:id" component={DetailClubContainer} />
      </Switch>
    </>
  );
};

export default MainRouter;
