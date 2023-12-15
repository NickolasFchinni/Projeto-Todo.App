import PropTypes from 'prop-types';

const Search = ({search, setSearch}) => {
  return <div className="Search">
    <h2>Pesquisar:</h2>
    <input type="text" value={search} onChange={e => setSearch(e.target.value)} />
  </div>
}

Search.propTypes = {
  search: PropTypes.func.isRequired,
  setSearch: PropTypes.func.isRequired,
};

export default Search
