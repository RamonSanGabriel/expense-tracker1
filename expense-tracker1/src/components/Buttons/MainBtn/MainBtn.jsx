import { Link, NavLink } from 'react-router-dom';
// import { buttons } from '../../../data/main';
import css from './MainBtn.module.css';
import { navLinks } from '../../../data/navLinks.js';

const MainBtn = () => {
  // const { path, name } = navLinks;
  // const { signUp, signIn } = buttons;
  return (
    <div className={css.mainBtn}>
      <ul>
        {navLinks.map(({ id, name, path }) => (
          <li key={id} className={css.buttonList}>
            <Link to={path}>
              <button className={`${css.button}, ${css.signUp}`}>{name}</button>
            </Link>
          </li>
        ))}
      </ul>
      {/* <button className={`${css.button} ${css.signUp}`}>{name}</button>
      <button className={`${css.button} ${css.signIn}`}>
        <Link to={path}>{name}</Link>
      </button> */}
    </div>
  );
};

export default MainBtn;
