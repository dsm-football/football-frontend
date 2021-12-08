import React, { Suspense } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import store from "../modules/redux/store";
import MainRouter from "./MainRouter";

const RootRouter = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route
            path="/"
            render={() => (
              <Suspense fallback={<div>Loading...</div>}>
                <MainRouter />
              </Suspense>
            )}
          />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default RootRouter;
