import React from "react";
import { Switch, Route } from "react-router-dom";
import {
  ClubEstbl
} from '../components';
import { ClubManagementContainer } from "../containers";

const MainRouter = () => {
  return (
    <>
      <Switch>
        <Route exact path="/club/management" component={ClubManagementContainer} />
        <Route exact path="/clubEstbl" component={ClubEstbl} />
      </Switch>
    </>
  );
};

export default MainRouter;