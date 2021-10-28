import React from "react";
import { Switch, Route } from "react-router-dom";
import {
  ClubManagementContainer,
  SignupContainer,
  ClubEstblContainer,
} from "../containers";
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
      </Switch>
    </>
  );
};

export default MainRouter;
