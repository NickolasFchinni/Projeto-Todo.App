import PropTypes from 'prop-types';

const Filter = ({filter, setFilter}) => {
  return (
    <div className='Filter'>
      <h2>Filtrar</h2>
      <div>
        <div className='Filter--select'>
          <p>Status:</p>
          <select name="" value={filter} onChange={e => setFilter(e.target.value)}>
            <option value="All">Todas</option>
            <option value="Completed">Completas</option>
            <option value="Incomplete">Incompletas</option>
          </select>
        </div>
      </div>
    </div>
  )
}

Filter.propTypes = {
  filter: PropTypes.func.isRequired,
  setFilter: PropTypes.func.isRequired,
};

export default Filter