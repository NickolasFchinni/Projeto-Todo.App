import { useState } from 'react'
import './App.css'
import Todo from './components/todo';
import TodoForm from './components/TodoForm';
import Search from './components/Search';
import Filter from './components/Filter';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'Teste',
      category: 'Pessoal',
      isCompleted: false
    }
  ])

  const [search, setSearch] = useState("")

  const [filter, setFilter] = useState("All")

  const addTodo = (text, category) => {
    const newTodos = [
      ...todos, 
      {
        id: Math.floor(Math.random() * 1000),
        text,
        category,
        isCompleted: false
      },
    ];

    setTodos(newTodos);
  }

  const removeTodo = (id) => {
    const newTodos = [...todos]
    const filteredTodos = newTodos.filter(todo => todo.id !== id ? todo : null
      );
      setTodos(filteredTodos);
  }
  const completeTodo = (id) => {
    const newTodos = [...todos]
    newTodos.map((todo) => todo.id === id ? (todo.isCompleted = !todo.isCompleted) : todo)
    setTodos(newTodos)
  }

  return (
    <div className='App'>
      <h1>Lista de Tarefas</h1>
      <TodoForm addTodo={addTodo}/>
      <div className='Filters'>
        <Search search={search} setSearch={setSearch}/>
        <Filter filter={filter} setFilter={setFilter} />
      </div>
      
      <div className='Todo--list'>
        {todos
          .filter(todo => 
            filter === "All" 
            ? true 
            : filter === "Completed" 
            ? todo.isCompleted 
            : !todo.isCompleted)
            .filter(todo => 
              todo.text.toLocaleLowerCase()
              .includes(search.toLocaleLowerCase()))
              .map(todo => 
          <Todo key={todo.id} todo={todo} removeTodo={removeTodo} completeTodo={completeTodo}/>
        )}
      </div>
    </div>
  )
}

export default App
