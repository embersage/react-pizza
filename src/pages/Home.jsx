import { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { SearchContext } from '../App';
import PizzaBlock from '../components/PizzaBlock';
import Placeholder from '../components/PizzaBlock/Placeholder';
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import { setItems } from '../redux/slices/pizzasSlice';

function Home() {
  const sort = useSelector((state) => state.filter.sort);
  const category = useSelector((state) => state.filter.category);
  const pizzas = useSelector((state) => state.pizzas.items);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const { search } = useContext(SearchContext);
  const sorts = ['rating', 'price', 'title'];

  useEffect(() => {
    setIsLoading(true);

    axios
      .get(
        `https://6548b571dd8ebcd4ab236f45.mockapi.io/items?category=${
          category > 0 ? category : ''
        }&sortBy=${sorts[sort]}&order=asc&title=${search ? search : ''}`
      )
      .then((response) => {
        dispatch(setItems(response.data));
        setIsLoading(false);
      });
  }, [category, sort, search]);

  return (
    <>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {!isLoading
          ? pizzas.map((item) => <PizzaBlock key={item.id} {...item} />)
          : [...new Array(10)].map((_, index) => <Placeholder key={index} />)}
      </div>
    </>
  );
}

export default Home;
