import { Link } from 'react-router-dom';
import styles from './NotFound.module.scss';
import { FC } from 'react';

const NotFoundBlock: FC = () => {
  return (
    <div className={styles.root}>
      <h1 className={styles.title}>Страница не найдена :(</h1>
      <Link to="/">
        <button className={styles.button}>Вернуться на главную</button>
      </Link>
    </div>
  );
};

export default NotFoundBlock;
