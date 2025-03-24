import css from './Header.module.css';
import { main, heroSection, mainImages } from '../../data/main.js';
import MainBtn from '../Buttons/MainBtn/MainBtn.jsx';
import { MdArrowOutward } from 'react-icons/md';

const Header = () => {
  const { label, title, description } = heroSection;
  const { imgName } = mainImages;
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
      <section className={` ${css.section} ${css.hero}`}>
        <p className={css.label}>{label}</p>
        <h1 className={css.title}>
          Manage Your{' '}
          <a href="/">
            <span>Finances</span>
          </a>{' '}
          Masterfully!
        </h1>
        <p className={css.description}>{description}</p>
      </section>
      <MainBtn />
      <div className={css.mainImageWrapper}>
        <img className={css.mainImage} src={imgName} />
      </div>
      <div className={css.mainBalance}>
        <div className={css.mainBalanceContainer}>
          <div>
            <MdArrowOutward className={css.balanceIcon} />
          </div>
          <div>
            <ul className={css.balanceList}>
              <li>Your Balance</li>
              <li className={css.totalBalance}>
                <span>$632.000</span>
              </li>
            </ul>
          </div>
          <span>+1.29%</span>
        </div>
      </div>
    </>
  );
};

export default Header;
