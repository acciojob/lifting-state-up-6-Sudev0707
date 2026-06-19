
import React from "react";
import './../styles/App.css';
import TodoList from "./TodoList";

const App = () => {

  const [todos, setTodos] = React.useState([
    { id: 1, text: 'Learn React', isCompleted: false },
    { id: 2, text: 'Build a React app', isCompleted: false },
    { id: 3, text: 'Deploy the React app', isCompleted: false }
  ]);

  const handleComplete = (id) => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id
          ? { ...todo, isCompleted: true }
          : todo
      )
    );
  };

  return (
    <div>
        {/* Do not remove the main div */}
        <h1>Parent Component</h1>
        <TodoList todos={todos} handleComplete={handleComplete} />
    </div>
  )
}

export default App
