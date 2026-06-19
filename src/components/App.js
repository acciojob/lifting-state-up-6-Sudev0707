import React from "react";
import "./../styles/App.css";
import TodoList from "./TodoList";

const App = () => {
  const [todos, setTodos] = React.useState([
    {
      key: "todo1",
      label: "Learn React",
      completed: false,
    },
    {
      key: "todo2",
      label: "Build a React app",
      completed: false,
    },
    {
      key: "todo3",
      label: "Deploy the React app",
      completed: false,
    },
  ]);

  function handleComplete(key) {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.key === key ? { ...todo, completed: true } : todo
      )
    );
  }

  return (
    <div>
      {/* Do not remove the main div */}
      <h1>Parent Component</h1>
      <TodoList todos={todos} handleComplete={handleComplete} />
    </div>
  );
};

export default App;
