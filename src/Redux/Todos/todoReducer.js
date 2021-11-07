import { ADD_TODO } from "./actionType";
import { loadData, saveData } from "../../Utils/localStorage";

const initialState = {
  todo: loadData("tasks") || [],
};

export const todoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      const updatedTodo = [...state.todo, payload];
      saveData("tasks",updatedTodo);
      return {
        ...state,
        todo: updatedTodo,
      };

    default:
      return state;
  }
};
