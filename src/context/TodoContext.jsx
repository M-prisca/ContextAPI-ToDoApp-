import React, { createContext, useContext, useReducer, useState } from "react";

const TodoContext = createContext();
const initialState = [];

function todoReducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        { id: Date.now(), text: action.payload, completed: false },
      ];
    case "EDIT":
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, text: action.payload.text }
          : todo
      );
    case "TOGGLE":
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    case "REMOVE":
      return state.filter(todo.id !== action.payload);
    default:
      return state;
  }
}

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) =>
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  const editTodo = (id, text) =>
    setTodos(todos.map((t) => (t.id === id ? { ...t, text } : t)));
  const toggleTodo = (id) =>
    setTodos(
      todos.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  const removeTodo = (id) => setTodos(todos.filter((t) => t.id !== id));

  return (
    <TodoContext.Provider
      value={{ todos, addTodo, editTodo, toggleTodo, removeTodo }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodos = () => useContext(TodoContext);
