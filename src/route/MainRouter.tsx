import React from "react";
import { Switch, Route } from "react-router-dom";
import { ClubEstbl, Login, MainPage, MyPage } from "../components";
import { ClubManagementContainer, SignupContainer } from "../containers";

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
        <Route exact path="/login" component={Login} />
        <Route exact path="/mypage" component={MyPage} />
        <Route exact path="/" component={MainPage} />
        <Route exact path="/signup" component={SignupContainer} />
      </Switch>
    </>
  );
};

export default MainRouter;
