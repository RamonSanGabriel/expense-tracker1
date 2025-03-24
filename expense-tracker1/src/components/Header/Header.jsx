import css from './Header.module.css';
import { main, heroSection, mainImages } from '../../data/main.js';
import MainBtn from '../Buttons/MainBtn/MainBtn.jsx';

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
    </>
  );
};

export default Header;
