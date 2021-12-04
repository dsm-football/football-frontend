import React from "react";
import { Switch, Route } from "react-router-dom";
import {
  ClubManagementContainer,
  MatchingRegistrationContainer,
  SignupContainer,
  ClubEstblContainer,
  ChattingContainer,
  ChattingContentContainer,
  MatchResultContainer,
} from "../containers";

import { Login, MainPage, MyPage, List, Match } from "../components";
import DetailClubContainer from "../containers/detailClub";

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
        <Route exact path="/clublist" component={List} />
        <Route exact path="/MatchDetail" component={Match} />
        <Route
          exact
          path="/match/registration"
          component={MatchingRegistrationContainer}
        />
        <Route exact path="/club/:id" component={DetailClubContainer} />
        <Route exact path="/chatting" component={ChattingContainer} />
        <Route
          exact
          path="/chatting/content"
          component={ChattingContentContainer}
        />
      </Switch>
    </>
  );
};

export default MainRouter;
