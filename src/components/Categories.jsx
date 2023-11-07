import { useSelector, useDispatch } from 'react-redux';
import { setCategory } from '../redux/categoriesSlice';

function Categories() {
  const category = useSelector((state) => state.category.value);
  const dispatch = useDispatch();

  const categories = [
    'Все',
    'Мясные',
    'Вегетарианская',
    'Гриль',
    'Острые',
    'Закрытые',
  ];

  return (
    <div className="categories">
      <ul>
        {categories.map((item, i) => {
          return (
            <li
              key={i}
              onClick={() => {
                dispatch(setCategory(i));
              }}
              className={category === i ? 'active' : ''}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Categories;
