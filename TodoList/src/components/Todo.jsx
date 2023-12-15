function Todo({todo}) {
  return (
    <div className='Todo'>
            <div className='Todo--content'>
              <p>{todo.text}</p>
              <p>{todo.category}</p>
            </div>
            <div>
              <button>Completar tarefa</button>
              <button>x</button>
            </div>
          </div>
  )
}

export default Todo