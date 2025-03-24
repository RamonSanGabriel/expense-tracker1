import css from './Header.module.css';
import { logo } from '../../data/logo.js';

const Header = () => {
  // const { expenseLogo, expenseTracker } = logo;
  return (
    <header>
      <ul className={css.logoList}>
        {logo.map(({ id, image }) => (
          <li key={id}>
            <img src={image} />
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
