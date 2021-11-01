import React, { useReducer, useEffect } from 'react';
import { todoReducer } from './todoReducer';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd.js';
import './styles.css';

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
};

export const TodoApp = () => {
  // reducer es la función
  // initialState es un estado inical que podemos mandar,
  // es usado como una función para inicializar el state en caso de que ese state haga varias acciones o sea procesado.
  // dispatch ayuda hacer el dispach o disparar las acciones (action) hacia mi reducer.

  // const [state, dispatch] = useReducer(reducer, initialState, init);

  const [todos, dispatch] = useReducer(todoReducer, [], init);

  // Este efecto guarda cualquier cambio que suceda en los todos, si se recarga el navegador, init vuelve a leer el localStorage y establece nuevamente el estado inical de mi Reducer.
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleDelete = (todoId) => {
    const action = {
      type: 'delete',
      payload: todoId,
    };
    dispatch(action);
  };

  const handleToggle = (todoId) => {
    dispatch({
      type: 'toggle',
      payload: todoId,
    });
  };

  const handleAddTodo = (newTodo) => {
    dispatch({
      type: 'add',
      payload: newTodo,
    });
  };

  return (
    <div>
      <h1>TodoApp: ({todos.length})</h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
          />
        </div>
        <div className="col-5">
          <TodoAdd handleAddTodo={handleAddTodo} />
        </div>
      </div>
    </div>
  );
};
