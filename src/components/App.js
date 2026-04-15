
import React from "react";
import './../styles/App.css';
import TodoList from "./TodoList";

const App = () => {

  const [todos, setTodos] = React.useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a todo app', completed: false },
    { id: 3, text: 'Deploy react app', completed: false }
  ]);

const handleComplete = (todoId) => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === todoId
          ? { ...todo, completed: true }
          : todo
      )
    );
  };
  return (
    <div>
        {/* Do not remove the main div */}
          <h1>Parent component</h1>
        <TodoList todos={todos} onComplete={handleComplete}  />
    </div>
  )
}

export default App
