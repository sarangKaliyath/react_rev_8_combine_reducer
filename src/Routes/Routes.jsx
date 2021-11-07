import React from "react";
import { Switch, Route } from "react-router-dom";
import { LoginPage } from "../Pages/LoginPage";
import { Todo } from "../Components/Todo";

export const Routes = () => {
  return (
    <>
      <Switch>
        <Route path="/home">
          <Todo />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
      </Switch>
    </>
  );
};
