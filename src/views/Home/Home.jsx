import { NavLink } from 'react-router-dom';
import style from './home.css';

export default function Home(){
    return (
        <section className={style.homeContainer}>
            <div className={style.instructions}>
                <h1 className={style.instructionHeading}>Welcome to your employee directory!</h1>
                <p>We strive to complete efficiency and do our part to ensure a safe work environment.</p>
                <p>To keep our information up to date, we have created a employee account.</p>
                <p>You will first create an account and fill out the necessary profile information after signing in.</p>        
                <p>Thank you for your participation.</p>
            </div>
            <div className={style.links}>
                <NavLink to='/register'>Create Account</NavLink>
                <p id={style.or}>or</p>
                <NavLink to='/login'>Sign In</NavLink>
            </div>
        </section>
    )
}