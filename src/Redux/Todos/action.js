import { ADD_TODO } from "./actionType";

export const addTodo = (data) => {
  return { type: ADD_TODO, payload: data };
};
