import React, { createContext } from "react";

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

export default TodoContext;
