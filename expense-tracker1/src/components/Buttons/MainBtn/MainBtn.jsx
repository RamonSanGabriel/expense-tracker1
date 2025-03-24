import { buttons } from '../../../data/main';
import css from './MainBtn.module.css';

const MainBtn = () => {
  const { signUp, signIn } = buttons;
  return (
    <div className={css.mainBtn}>
      <button className={`${css.button} ${css.signUp}`}>{signUp}</button>
      <button className={`${css.button} ${css.signIn}`}>{signIn}</button>
    </div>
  );
};

export default MainBtn;
