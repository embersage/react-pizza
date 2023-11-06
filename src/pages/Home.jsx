import { useEffect, useState } from 'react';
import PizzaBlock from '../components/PizzaBlock';
import Placeholder from '../components/PizzaBlock/Placeholder';
import Categories from '../components/Categories';
import Sort from '../components/Sort';

function Home() {
  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(true);
  const placeholders = [...new Array(10)];

  useEffect(() => {
    fetch('https://6548b571dd8ebcd4ab236f45.mockapi.io/items')
      .then((response) => response.json())
      .then((json) => setPizzas(json))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {!loading
          ? pizzas.map((item) => <PizzaBlock key={item.id} {...item} />)
          : placeholders.map((_, index) => <Placeholder key={index} />)}
      </div>
    </>
  );
}

export default Home;
