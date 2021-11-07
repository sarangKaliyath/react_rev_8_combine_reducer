import { createStore, combineReducers } from "redux";
import { todoReducer } from "./Todos/todoReducer";
import { authReducer } from "./Login/authReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  app: todoReducer,
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
