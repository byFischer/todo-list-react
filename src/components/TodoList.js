import React from 'react';

const TodoList = ({ todos, onDelete, onToggleComplete }) => {
  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <li key={todo.id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => onToggleComplete(todo.id, !todo.completed)}
          />
          <div className="todo-content">
            <h3>{todo.title}</h3>
            {}
            {todo.description && <p>{todo.description}</p>}
          </div>
          <button onClick={() => onDelete(todo.id)} className="delete-btn">
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;