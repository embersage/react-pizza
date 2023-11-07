import { useContext } from 'react';
import styles from './Search.module.scss';
import { SearchContext } from '../../App';

function Search() {
  const { search, setSearch } = useContext(SearchContext);
  return (
    <input
      value={search}
      className={styles.input}
      placeholder="Поиск пиццы..."
      onChange={(event) => setSearch(event.target.value)}
    />
  );
}

export default Search;
