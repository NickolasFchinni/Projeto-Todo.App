import React from 'react'

function TodoForm() {
  return (
    <div className='Todo--form'>
      <h2>Criar Tarefa:</h2>
      <form >
        <input type="text" placeholder='Digite a tarefa'/>
        <select>
          <option value="">Selecione uma categoria</option>
          <option value="">Trabalho</option>
          <option value="">Pessoal</option>
          <option value="">Estudos</option>
        </select>
        <button>Criar Tarefa</button>
      </form>
    </div>
  )
}

export default TodoForm
