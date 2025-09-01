import React, { createContext, useContext, useReducer } from "react";

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
  const [todos, dispatch] = useReducer(todoReducer, initialState);

  const addTodo = (text) => dispatch({ type: "ADD", payload: text });
  const editTodo = (id, text) =>
    dispatch({ type: "EDIT", payload: { id, text } });
  const toggleTodo = (id) => dispatch({ type: "TOGGLE", payload: id });
  const removeTodo = (id) => dispatch({ type: "REMOvE", payload: id });
};

return;
<TodoContext.Provider
  value={{ todos, addTodo, editTodo, toggleTodo, removeTodo }}
>
  {children}
</TodoContext.Provider>;

export const useTodos = () => useContext(TodoContext);
