import style from './auth.css';

export default function Auth(){
    return (
        <>
        <h3>Welcome Back!</h3>
        <fieldset className={style.authContainer}>
            <legend>SIGN IN</legend>
                <form className={style.formContainer}>
                    <label htmlFor='email'>Email:</label>
                    <input type='email' id='email' required/>
                    <label htmlFor='password'>Password:</label>
                    <input type='password' id='password' required/>
                    <button type='submit'>SIGN IN</button>
                </form>
        </fieldset>
        </>
    )
}