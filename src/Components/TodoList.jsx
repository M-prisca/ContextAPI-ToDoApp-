import React from "react";
import { useTodos } from "../context/TodoContext";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { todos } = useTodos();

  return (
    <table className="w-full border-collapse border">
      <thead>
        <tr className="bg-gray-200">
          <th className="px-4 py-2 text-left">Task</th>
          <th className="px-4 py-2 text-left">Actions</th>
        </tr>
      </thead>
      <tbody>
        {todos.length > 0 ? (
          todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
        ) : (
          <tr>
            <td colSpan="2" className="text-center py-4 text-gray-500">
              No tasks available
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default TodoList;
