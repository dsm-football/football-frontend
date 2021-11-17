import React from "react";
import { Switch, Route } from "react-router-dom";
import {
  ClubManagementContainer,
  MatchingRegistrationContainer,
  SignupContainer,
  ClubEstblContainer,
} from "../containers";
import { Login, MainPage, MyPage, SideBar } from "../components";
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
        <Route exact path="/mypage" component={MyPage} />
        <Route exact path="/signup" component={SignupContainer} />
        <Route exact path="/sidebar" component={SideBar} />
        <Route
          exact
          path="/match/registration"
          component={MatchingRegistrationContainer}
        />
      </Switch>
    </>
  );
};

export default MainRouter;
