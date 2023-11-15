import { useCallback, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import debounce from 'lodash.debounce';
import { setSearch } from '../../redux/slices/filterSlice';
import styles from './Search.module.scss';

function Search() {
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  const [str, setStr] = useState('');

  const updateSearch = useCallback(
    debounce((val) => {
      dispatch(setSearch(val));
    }, 250),
    []
  );

  return (
    <div className={styles.input}>
      <input
        ref={inputRef}
        value={str}
        className={styles.input}
        placeholder="Поиск пиццы..."
        onChange={(event) => {
          setStr(event.target.value);
          updateSearch(event.target.value);
        }}
      />
      {str && (
        <button
          onClick={() => {
            dispatch(setSearch(''));
            setStr('');
            if (inputRef.current) inputRef.current.focus();
          }}
        >
          <svg fill="#6b6b6b" width="15px" height="15px">
            <path d="M0 14.545L1.455 16 8 9.455 14.545 16 16 14.545 9.455 8 16 1.455 14.545 0 8 6.545 1.455 0 0 1.455 6.545 8z" />
          </svg>
        </button>
      )}
    </div>
  );
}

export default Search;
