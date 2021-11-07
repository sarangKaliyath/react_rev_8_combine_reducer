import React from "react";
import { TodoInput } from "./TodoInput";
import { useDispatch } from "react-redux";
import { addTodo } from "../Redux/Todos/action";
import { TodoList } from "./TodoList";

export const Todo = () => {
  const dispatch = useDispatch();

  const handleClick = (payload) => {
    dispatch(addTodo(payload));
  };
  return (
    <div>
      <h1>Todo's</h1>

      <TodoInput handleClick={handleClick} />
      <TodoList />
    </div>
  );
};
