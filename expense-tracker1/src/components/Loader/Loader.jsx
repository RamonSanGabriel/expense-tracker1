import css from './Loader.module.css';
import { FadeLoader } from 'react-spinners';

const Loader = () => {
  return (
    <div className={css.loaderContainer}>
      <FadeLoader color="#0cddb4" />
    </div>
  );
};

export default Loader;
