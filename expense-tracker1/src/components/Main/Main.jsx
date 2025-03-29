import css from './Main.module.css';
import MainBtn from '../Buttons/MainBtn/MainBtn.jsx';
import { MdArrowOutward } from 'react-icons/md';
import { heroSection, mainImages } from '../../data/main.js';

const Main = () => {
  const { label, title, description } = heroSection;
  const { imgName } = mainImages;

  return (
    <>
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
        <div className={css.mainBalance}>
          {/* <div className={css.mainBalanceContainer}> */}
          {/* <div> */}
          <MdArrowOutward className={css.balanceIcon} />
          {/* </div> */}
          {/* <div> */}
          <ul className={css.balanceList}>
            <li>Your Balance</li>
            <li className={css.totalBalance}>
              <span className={css.amount}>$632.000</span>
            </li>
          </ul>
          {/* </div> */}
          <span className={css.percentage}>+1.29%</span>
          {/* </div> */}
        </div>
        <img className={css.mainImage} src={imgName} />
      </div>
    </>
  );
};

export default Main;
