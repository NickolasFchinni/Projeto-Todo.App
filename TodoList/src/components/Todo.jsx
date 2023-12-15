import PropTypes from 'prop-types';

function Todo({todo, removeTodo, completeTodo}) {
  return (
    <div className='Todo' style={{textDecoration: todo.isCompleted ? "line-through" : null}}>
            <div className='Todo--content'>
              <p>{todo.text}</p>
              <p>{todo.category}</p>
            </div>
            <div>
              <button onClick={() => completeTodo(todo.id)}>Completar tarefa</button>
              <button onClick={() => removeTodo(todo.id)}>x</button>
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
  }).isRequired,
};

export default Todo