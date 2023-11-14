import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPizzas } from '../redux/slices/pizzasSlice';
import PizzaBlock from '../components/PizzaBlock';
import Placeholder from '../components/PizzaBlock/Placeholder';
import Categories from '../components/Categories';
import Sort from '../components/Sort';

const Home: FC = () => {
  const search = useSelector((state) => state.filter.search);
  const sort = useSelector((state) => state.filter.sort);
  const category = useSelector((state) => state.filter.category);
  const pizzas = useSelector((state) => state.pizzas.items);
  const status = useSelector((state) => state.pizzas.status);
  const dispatch = useDispatch();
  const sorts = ['rating', 'price', 'title'];

  useEffect(() => {
    const getPizzas = async () => {
      await dispatch(fetchPizzas({ category, sorts, sort, search }));
    };
    getPizzas();
  }, [category, sort, search]);

  return (
    <>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {status === 'succeeded'
          ? pizzas.map((item) => <PizzaBlock key={item.id} {...item} />)
          : [...new Array(10)].map((_, index) => <Placeholder key={index} />)}
      </div>
    </>
  );
};

export default Home;
