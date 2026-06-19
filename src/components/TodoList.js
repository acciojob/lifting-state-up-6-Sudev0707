import React from "react";

const TodoList = ({ todos, handleComplete }) => {
  return (
    <div className="todo-list">
      <h2>Child Component</h2>
      {todos.length === 0 ? (
        <p>No todos available</p>
      ) : (
        <ul>
          {todos.map(todo => (
            <li key={todo.id} className={todo.isCompleted ? 'completed' : ''}>
              <span className="todo-text">{todo.text}</span>
              {!todo.isCompleted && (
                <button
                  onClick={() => handleComplete(todo.id)}
                  className="complete-btn"
                >
                  Complete
                </button>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoList;
