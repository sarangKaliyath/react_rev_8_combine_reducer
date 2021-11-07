import React from "react";
import axios from "axios";
import { Login } from "../Components/Login";
import { useDispatch, useSelector } from "react-redux";
import { loginReq, loginSuccess, loginError } from "../Redux/Login/action";
import { Redirect } from "react-router-dom";

export const LoginPage = () => {
  const dispatch = useDispatch();
  const { isAuth, isLoading, errorMessage, token } = useSelector(
    (state) => state.auth
  );

  const handleLogin = (email, password) => {
    dispatch(loginReq());
    axios
      .post("https://reqres.in/api/login", {
        email,
        password,
      })
      .then((res) => {
        dispatch(loginSuccess(res.data.token));
        console.log(res.data.token);
      })
      .catch((err) => {
        dispatch(loginError("Wrong Credentials"));
      });
  };

  if (isAuth) {
   return <Redirect to="/home" />;
  }
  return (
    <div>
      <Login handleLogin={handleLogin} />
    </div>
  );
};
