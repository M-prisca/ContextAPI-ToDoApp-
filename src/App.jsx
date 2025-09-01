import React from "react";
import TodoForm from "./Components/TodoForm";
import TodoList from "./Components/TodoList";
import { TodoProvider } from "./context/TodoContext";

const App = () => {
  return (
    <TodoProvider>
      <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded shadow">
        <h1 className="text-2xl font-bold mb-4 text-center">
          ToDo App (Context API)
        </h1>
        <TodoForm />
        <TodoList />
      </div>
    </TodoProvider>
  );
};

export default App;
