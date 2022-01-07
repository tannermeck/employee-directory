import style from './confirmEmail.css';

export default function ConfirmEmail(){
    return (
        <section className={style.headings}>
          <h1>Registration Successful!</h1>
          <p>
            Please check your email in order to confirm your account and sign in.
          </p>
        </section>
      );
}