import PropTypes from 'prop-types';

function Todo({todo, removeTodo, completeTodo}) {
  return (
    <div className='Todo' >
      <div className='Todo--content' style={{textDecoration: todo.isCompleted ? "line-through" : null}}>
        <p>{todo.text}</p>
        <p>{todo.category}</p>
      </div>
      <div className='Todo--buttons'>
        <button className='Button--complete' onClick={() => completeTodo(todo.id)}>Completar tarefa</button>
        <button className='Button--remove' onClick={() => removeTodo(todo.id)}>X</button>
      </div>
    </div>
  )
}

Todo.propTypes = {
  removeTodo: PropTypes.func.isRequired,
  completeTodo: PropTypes.func.isRequired,
  todo: PropTypes.shape({
    text: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    isCompleted: PropTypes.bool.isRequired,
  }).isRequired,
};

export default Todo