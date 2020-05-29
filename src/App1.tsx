import React, { useState } from 'react';
import * as uuid from 'uuid';
import ErrorBundary from './components/error-handling/ErrorBoundary';
import TodoInput from './components/todo/TodoInput';

interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

// interface Square {
//   width?: number
//   color?: string
//   [propName: string]: any
// }

const App = (): JSX.Element => {
  const [todos, setTodos] = useState<Todo[]>([]);
  // console.log('Todos:', todos)

  const handleSubmit = (value: string): void => {
    if (!value) {
      return;
    }

    addTodo(value);
  };

  const addTodo = (text: string): void => {
    const newTodos = [...todos, { id: uuid.v4(), text, completed: false }];
    setTodos(newTodos);
  };

  const toggleTodo = (selectedTodo: Todo): void => {
    const updatedTodos = todos.map((todo: Todo) => {
      if (todo.id === selectedTodo.id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const removeTodo = (selectedTodo: Todo): void => {
    const updatedTodos = todos.filter((todo: Todo) => {
      return todo.id !== selectedTodo.id;
    });
    setTodos(updatedTodos);
  };

  return (
    <div>
      <ErrorBundary>
        <TodoInput handleSubmit={handleSubmit} />
      </ErrorBundary>
      <hr />
      <section>
        {todos.map((todo: Todo) => (
          <div key={todo.id}>
            <span>
              <input type="checkbox" onChange={() => toggleTodo(todo)} />
            </span>
            <span
              style={{
                color: todo.completed ? 'green' : 'black',
                textDecoration: todo.completed ? 'line-through' : '',
              }}>
              {todo.text}
            </span>
            <button onClick={() => removeTodo(todo)}>Remove</button>
          </div>
        ))}
      </section>
    </div>
  );
};

export default App;
