import React from "react";

const TodoList = ({ todos, onComplete }) => {
  return (
    <div className="todo-list">
      <h2>Child component</h2>
      {todos.length === 0 ? (
        <p>No todos available</p>
      ) : (
        <ul>
          {todos.map(todo => (
            <li key={todo.id} className={todo.completed ? 'completed' : ''}>
              <span className="todo-text">{todo.text}</span>
             
              {!todo.completed && (
                <button 
                  onClick={() => onComplete(todo.id)}
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