import { NavLink } from 'react-router-dom';
import style from './auth.css';

export default function Auth({newUser = false}){
    return (
        <>
            <h3>{newUser ? 'Welcome' : 'Welcome Back!'}</h3>
            <fieldset className={style.authContainer}>
                <legend>{newUser ? 'SIGN UP' : 'SIGN IN'}</legend>
                    <form className={style.formContainer}>
                        <label htmlFor='email'>Email:</label>
                        <input type='email' id='email' required/>
                        <label htmlFor='password'>Password:</label>
                        <input type='password' id='password' required/>
                        <button type='submit'>{newUser ? 'SIGN UP' : 'SIGN IN'}</button>
                    </form>
            </fieldset>
            <div>
                {!newUser ? (
                <div className={style.register}>
                    <p>Need an account?</p>
                    <NavLink to='/register'>Sign Up</NavLink>
                </div>) : (
                <div className={style.register}>
                    <p>Already have an account?</p>
                    <NavLink to='/login'>Sign In</NavLink>
                </div>)
                }
            </div>
        </>
    )
}