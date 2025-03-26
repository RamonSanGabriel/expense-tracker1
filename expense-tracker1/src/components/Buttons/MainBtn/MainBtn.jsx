import { Link, NavLink } from 'react-router-dom';
import { buttons } from '../../../data/main';
import css from './MainBtn.module.css';
import { navLink } from '../../../data/navLink';

const MainBtn = () => {
  const { path } = navLink;
  const { signUp, signIn } = buttons;
  return (
    <div className={css.mainBtn}>
      <button className={`${css.button} ${css.signUp}`}>{signUp}</button>
      <Link to={console.log('sign in')}>
        <button className={`${css.button} ${css.signIn}`}>{signIn}</button>
      </Link>
    </div>
  );
};

export default MainBtn;
