import React from "react";

function TodoList(props) {
  const { todos, handleComplete } = props;

  return (
    <div>
      <h2>Child Component</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.key}>
            <label>{todo.label}</label>
            {todo.completed ? null : (
              <button onClick={() => handleComplete(todo.key)}>Complete</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
