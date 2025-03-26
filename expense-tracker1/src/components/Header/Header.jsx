import css from './Header.module.css';
import { main } from '../../data/main.js';

const Header = () => {
  return (
    <>
      <header>
        <ul className={css.logoList}>
          {main.map(({ id, image }) => (
            <li key={id}>
              <img src={image} />
            </li>
          ))}
        </ul>
      </header>
    </>
  );
};

export default Header;
