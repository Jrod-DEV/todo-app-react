import React from 'react';
import { useForm } from '../../hooks/useForm,';

export const TodoAdd = ({ handleAddTodo }) => {
  const [{ description }, handleInputChange, reset] = useForm({
    description: '',
  });

  const handleAddSubmit = (e) => {
    e.preventDefault();
    // Validamos que si no hay datos en el input, no agregue tareas vacías.
    if (description.trim().length <= 1) {
      return;
    }
    const newTodo = {
      id: new Date().getTime(),
      description: description,
      done: false,
    };
    handleAddTodo(newTodo);
    reset();
  };

  return (
    <>
      <h4>Add ToDo</h4>
      <hr />
      <form onSubmit={handleAddSubmit}>
        <input
          className="form-control"
          type="text"
          name="description"
          placeholder="Learn..."
          autoComplete="off"
          value={description}
          onChange={handleInputChange}
        />
        <button className="add-btn btn btn-outline-primary mt-1 btn-block">
          Add
        </button>
      </form>
    </>
  );
};
