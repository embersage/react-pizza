import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { appendItem } from '../../redux/slices/cartSlice';

function PizzaBlock(props) {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const { id, imageUrl, title, types, sizes, price } = props;
  const doughTypes = ['тонкое', 'традиционное'];
  const [doughType, setDoughType] = useState(0);
  const [size, setSize] = useState(0);
  const pizza = {
    id,
    imageUrl,
    title,
    doughType: doughTypes[doughType],
    size,
    price,
    count: 1,
  };

  return (
    <div className="pizza-block">
      <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
      <h4 className="pizza-block__title">{title}</h4>
      <div className="pizza-block__selector">
        <ul>
          {types.map((item, i) => (
            <li
              key={i}
              className={doughType === i ? 'active' : ''}
              onClick={() => setDoughType(i)}
            >
              {doughTypes[item]}
            </li>
          ))}
        </ul>
        <ul>
          {sizes.map((item, i) => (
            <li
              key={i}
              className={size === i ? 'active' : ''}
              onClick={() => setSize(i)}
            >
              {item} см
            </li>
          ))}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">от {price} ₽</div>
        <button
          className="button button--outline button--add"
          onClick={() => {
            dispatch(appendItem(pizza));
          }}
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>Добавить</span>
          <i>
            {cart.reduce((count, item) => {
              if (item.id === pizza.id) {
                count += item.count;
              }
              return count;
            }, 0)}
          </i>
        </button>
      </div>
    </div>
  );
}

export default PizzaBlock;
