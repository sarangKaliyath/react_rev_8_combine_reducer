import React from "react";
import { useSelector } from "react-redux";

export const TodoList = () => {
  const todo = useSelector((state) => state.app.todo);

  return (
    <div>
      {todo &&
        todo.map(({ title }, index) => {
          return <h3 key={index}>{title}</h3>;
        })}
    </div>
  );
};
