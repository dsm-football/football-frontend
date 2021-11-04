import React from "react";
import { Switch, Route } from "react-router-dom";
import { ClubEstbl, Login, MainPage } from "../components";
import {
  ClubManagementContainer,
  MatchingRegistrationContainer,
  SignupContainer,
} from "../containers";

  ClubEstblContainer,
import { Login, MainPage, MyPage } from "../components";
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
        <Route exact path="/Mypage" component={MyPage} />
        <Route exact path="/signup" component={SignupContainer} />
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
