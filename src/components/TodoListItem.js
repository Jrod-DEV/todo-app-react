import React from 'react';

export const TodoListItem = ({ todo, index, handleDelete, handleToggle }) => {

  return (
    <li key={todo.id} className="list-group-item">
      <p
        className={`${todo.done && 'completed'}`}
        onClick={() => handleToggle(todo.id)}
      >
        {index + 1}. {todo.description}
      </p>
      <button className="btn btn-danger" onClick={() => handleDelete(todo.id)}>
        Delete
      </button>
    </li>
  );
};
