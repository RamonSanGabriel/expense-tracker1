import { Link, NavLink } from 'react-router-dom';
import { buttons } from '../../../data/main';
import css from './MainBtn.module.css';
import { navLinks } from '../../../data/navLinks.js';

const MainBtn = () => {
  const { path } = navLinks;
  const { signUp, signIn } = buttons;
  return (
    <div className={css.mainBtn}>
      <button className={`${css.button} ${css.signUp}`}>{signUp}</button>
      <button className={`${css.button} ${css.signIn}`}>
        <Link to={path}>{signIn}</Link>
      </button>
    </div>
  );
};

export default MainBtn;
