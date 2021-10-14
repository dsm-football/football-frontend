import React from "react";
import { Switch, Route } from "react-router-dom";
import { ClubEstbl, Login, MainPage, MyPage } from "../components";
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
        <Route exact path="/" component={MainPage} />
        <Route exact path="/Mypage" component={MyPage} />
      </Switch>
    </>
  );
};

export default MainRouter;
