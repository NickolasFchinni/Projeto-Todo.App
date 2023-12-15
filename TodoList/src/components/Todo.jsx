import PropTypes from 'prop-types';

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

Todo.propTypes = {
  todo: PropTypes.shape({
    text: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default Todo