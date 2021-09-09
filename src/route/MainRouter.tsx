import React from "react";
import { Switch, Route } from "react-router-dom";
import {
  ClubManagement,
  ClubEstbl
} from '../components';

const MainRouter = () => {
  return (
    <>
      <Switch>
        <Route exact path="/club/management" component={ClubManagement} />
        <Route exact path="/clubEstbl" component={ClubEstbl} />
      </Switch>
    </>
  );
};

export default MainRouter;