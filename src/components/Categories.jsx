import { useState } from 'react';

function Categories() {
  const categories = [
    'Все',
    'Мясные',
    'Вегетарианская',
    'Гриль',
    'Острые',
    'Закрытые',
  ];
  const [index, setIndex] = useState(0);

  return (
    <div className="categories">
      <ul>
        {categories.map((item, i) => {
          return (
            <li
              key={i}
              onClick={() => {
                setIndex(i);
              }}
              className={index === i ? 'active' : ''}
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
