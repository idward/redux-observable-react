import React, { Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
// import * as uuid from 'uuid';
// import ErrorBundary from './components/error-handling/ErrorBoundary';
// import TodoInput from './components/todo/TodoInput';
import Header from './components/header/Header';
// import BuggyCounter from './components/buggy-counter/BuggyCounter';
import PostList from './components/post/PostList';
import PostItem from './components/post/PostItem';
// import BuggyCounter from './components/buggy-counter/BuggyCounter';
// import asyncComponent from './components/hoc/AsyncComponent';

// const AsyncBuggyCounter = asyncComponent(() =>
//   import(
//     /* webpackPrefetch:true */ /* webpackChunkName: 'buggy-counter' */ './components/buggy-counter/BuggyCounter'
//   ),
// );

const AsyncBuggyCounter = React.lazy(() =>
  import(
    /* webpackPrefetch:true */ /* webpackChunkName: 'buggy-counter' */ './components/buggy-counter/BuggyCounter'
  ),
);

interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

class App extends React.Component {
  handleSubmit = (value: string): void => {
    if (!value) {
      return;
    }
    throw new Error('invalid value');
    // console.log(value);
  };

  render() {
    return (
      <>
        <Header></Header>
        <Switch>
          <Route path="/posts" exact component={PostList} />
          <Route
            path="/bugger-counter"
            render={() => (
              <Suspense fallback={<div>Loading...</div>}>
                <AsyncBuggyCounter />
              </Suspense>
            )}
          />
          <Route path="/posts/:id" component={PostItem} />
          <Redirect from="/" to="/posts" />
        </Switch>
      </>
    );
  }
}

// const App = (): JSX.Element => {
//   const [todos, setTodos] = useState<Todo[]>([]);
//   // console.log('Todos:', todos)

//   const handleSubmit = (value: string): void => {
//     if (!value) {
//       return;
//     }
//     addTodo(value);
//   };

//   const addTodo = (text: string): void => {
//     const newTodos = [...todos, { id: uuid.v4(), text, completed: false }];
//     setTodos(newTodos);
//   };

//   const toggleTodo = (selectedTodo: Todo): void => {
//     const updatedTodos = todos.map((todo: Todo) => {
//       if (todo.id === selectedTodo.id) {
//         todo.completed = !todo.completed;
//       }
//       return todo;
//     });
//     setTodos(updatedTodos);
//   };

//   const removeTodo = (selectedTodo: Todo): void => {
//     const updatedTodos = todos.filter((todo: Todo) => {
//       return todo.id !== selectedTodo.id;
//     });
//     setTodos(updatedTodos);
//   };

//   return (
//     <div>
//       <ErrorBundary>
//         <TodoInput handleSubmit={handleSubmit} />
//       </ErrorBundary>
//       <hr />
//       <section>
//         {todos.map((todo: Todo) => (
//           <div key={todo.id}>
//             <span>
//               <input type="checkbox" onChange={() => toggleTodo(todo)} />
//             </span>
//             <span
//               style={{
//                 color: todo.completed ? 'green' : 'black',
//                 textDecoration: todo.completed ? 'line-through' : '',
//               }}>
//               {todo.text}
//             </span>
//             <button onClick={() => removeTodo(todo)}>Remove</button>
//           </div>
//         ))}
//       </section>
//     </div>
//   );
// };

export default App;
