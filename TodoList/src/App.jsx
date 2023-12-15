import { useState } from 'react'
import './App.css'
import Todo from './components/todo';
import TodoForm from './components/TodoForm';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'Teste',
      category: 'Teste',
    },
    {
      id: 2,
      text: 'Teste2',
      category: 'Teste2',
    }
  ]);

  return (
    <div className='App'>
      <h1>Lista de Tarefas</h1>
      <div className='Todo--list'>
        {todos.map((todo) => 
          <Todo key={todo.id} todo={todo}/>
        )}
      </div>
      <TodoForm />
    </div>
  )
}

export default App
