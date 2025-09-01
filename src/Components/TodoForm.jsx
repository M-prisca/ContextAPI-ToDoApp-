import React, { useState } from "react";
import { useTodos } from "../context/TodoContext";

const TodoForm = () => {
  const [task, setTask] = useState("");
  const { addTodo } = useTodos();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTodo(task);
      setTask("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter new task..."
        className="flex-1 p-2 border rounded"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-gray-500 text-white rounded"
      >
        Add
      </button>
    </form>
  );
};

export default TodoForm;
