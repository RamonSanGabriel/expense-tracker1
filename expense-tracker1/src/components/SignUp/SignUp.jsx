import { signUp } from '../../data/main';

const SignUp = () => {
  const { label, description } = signUp;
  return (
    <section className={`${css.section} ${css.hero}`}>
      <p className={css.label}>{label}</p>
      <h1 className={css.title}>Sign Up</h1>
      <p className={css.description}>{description}</p>
    </section>
  );
};

export default SignUp;
