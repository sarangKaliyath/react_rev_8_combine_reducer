import React from "react";
import { useState } from "react";
import { nanoid } from "nanoid";

export const TodoInput = ({ handleClick }) => {
  const [task, setTask] = useState("");

  const payload = {
    title: task,
    status: false,
    id: nanoid(4),
  };

  return (
    <div>
      <input
        onChange={(e) => setTask(e.target.value)}
        value={task}
        type="text"
        placeholder="Enter Todo"
      />
      <button
        onClick={() => {
          handleClick(payload);
        }}
      >
        +
      </button>
    </div>
  );
};
