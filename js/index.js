import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import TodoList from './components/todo-list'

ReactDOM.render(
  <App>
    <TodoList/>
  </App>,
  document.getElementById('react-app')
)
