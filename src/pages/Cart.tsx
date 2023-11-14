import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import emptyCart from '../assets/img/empty-cart.png';
import CartBlock from '../components/CartBlock';
import { selectCart } from '../redux/slices/cartSlice';
import { FC } from 'react';

const Cart: FC = () => {
  const cart = useSelector(selectCart);

  if (cart.length === 0) {
    return (
      <div className="container container--cart">
        <div className="cart cart--empty">
          <h2>
            Корзина пустая <icon>😕</icon>
          </h2>
          <p>
            Вероятней всего, вы не заказывали ещё пиццу.
            <br />
            Для того, чтобы заказать пиццу, перейди на главную страницу.
          </p>
          <img src={emptyCart} alt="Empty cart" />
          <Link to="/" className="button button--black">
            <span>Вернуться назад</span>
          </Link>
        </div>
      </div>
    );
  }
  return <CartBlock />;
};
export default Cart;
