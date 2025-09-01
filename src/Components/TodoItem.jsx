import React, { useState } from "react";
import { useTodos } from "../context/TodoContext";

const TodoItem = ({ todo }) => {
  const { editTodo, toggleTodo, removeTodo } = useTodos();
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleEdit = () => {
    if (isEditing && newText.trim()) {
      editTodo(todo.id, newText);
    }
    setIsEditing(!isEditing);
  };

  return (
    <tr className="border-b">
      <td className="px-4 py-2">
        {isEditing ? (
          <input
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            className="border p-1 rounded"
          />
        ) : (
          <span className={todo.completed ? "line-through text-gray-500" : ""}>
            {todo.text}
          </span>
        )}
      </td>
      <td className="px-4 py-2 flex justify-end gap-2">
        <button onClick={handleEdit} className="px-2 py-1 bg-gray-400 rounded">
          {isEditing ? "Save" : "Edit"}
        </button>
        <button
          onClick={() => toggleTodo(todo.id)}
          className="px-2 py-1 bg-gray-500 text-white rounded"
        >
          {todo.completed ? "Undo" : "Complete"}
        </button>
        <button
          onClick={() => removeTodo(todo.id)}
          className="px-2 py-1 bg-gray-600 text-white rounded"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default TodoItem;
