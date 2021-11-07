import { saveData, loadData } from "../../Utils/localStorage";
import { LOGIN_ERROR, LOGIN_SUCCESS, LOGIN_REQUEST } from "./actionType";

const initialState = {
  isAuth: false,
  errorMessage: "",
  token: loadData("token") || "",
  isLoading: false,
};

export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case LOGIN_SUCCESS:
      saveData("token", payload);
      return {
        ...state,
        isLoading: false,
        isAuth: true,
        token: payload,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        isLoading: false,
        isAuth: false,
        errorMessage: payload,
      };
    default:
      return state;
  }
};
