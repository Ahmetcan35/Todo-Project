import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ToDoCreate from './components/ToDoCreate'
import TodoList from './components/TodoList'

function App() {
  const [todos, setTodos] = useState([]);

  const createTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  }
  const deleteTodo = (todoId) => {
    setTodos([...todos.filter((todo) => todo.id !== todoId)]);
  }
  const updateTodo = (newTodo) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id !== newTodo.id) {
        return todo;
      }
      return newTodo;
    })
    setTodos([...updatedTodos]);
  };
  console.log(todos);
  return (
    <div className='app'>
      <div className='main'>
        <ToDoCreate onCreateTodo={createTodo} />
        <TodoList todos={todos} onRemoveTodo={deleteTodo} onUpdateTodo={updateTodo} />
      </div>
    </div>

  )
}

export default App
