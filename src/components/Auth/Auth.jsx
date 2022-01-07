import { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useUser } from '../../context/UserContext/UserContext';
import { signInUser, signUpUser } from '../../services/users';
import style from './auth.css';

export default function Auth({newUser = false}){
    const history = useHistory()

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { user, setUser } = useUser();

    const handleLogin = async(event) => {
        event.preventDefault();
        try {
            if (newUser){
                if (!email || password.length < 8) {
                    throw new Error('An email and password (with 8+ characters) are required.')
                } else {
                await signUpUser(email, password);
                history.replace('/confirm-email')
                }
            } else {
                const currentUser = await signInUser(email, password);
                await setUser({id: currentUser.id, email: currentUser.email})
                history.replace('/profile')
            }

        } catch(error){
            setError(error.message)
        }
    }
    return (
        <>
            <h3>{newUser ? 'Welcome' : 'Welcome Back!'}</h3>
            <fieldset className={style.authContainer}>
                <legend>{newUser ? 'SIGN UP' : 'SIGN IN'}</legend>
                    <form className={style.formContainer} onSubmit={handleLogin}>
                        <label htmlFor='email'>Email:</label>
                        <input className={style.passwordInput} type='email' id='email' value={email} onChange={((e) => setEmail(e.target.value))} />
                        <label htmlFor='password'>Password:</label>
                        <input className={style.passwordInput} type='password' id='password' value={password} onChange={((e) => setPassword(e.target.value))} />
                        <button type='submit'>{newUser ? 'SIGN UP' : 'SIGN IN'}</button>
                        <p>{error}</p>
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