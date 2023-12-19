import { useState } from 'react'
import PropTypes from 'prop-types';

function TodoForm({addTodo}) {
  const [value, setValue] = useState('')
  const [category, setCategory] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    !value || !category 
    ? null
    : addTodo(value, category)
      setCategory('')
      setValue('')
  }

  return (
    <div  className='Todo--form'>
      <h2>Criar Tarefa:</h2>
      <form onSubmit={handleSubmit} className='Todo--create'>
        <input value={value} type="text" placeholder='Digite a tarefa' onChange={(e) => setValue(e.target.value)}/>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Selecione uma categoria</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Pessoal">Pessoal</option>
          <option value="Estudos">Estudos</option>
        </select>
        <button type='submit'>Criar Tarefa</button>
      </form>
    </div>
  )
}

TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default TodoForm
