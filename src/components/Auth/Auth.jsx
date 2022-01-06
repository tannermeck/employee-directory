export default function Auth(){
    return (
        <fieldset>
            <legend>Sign-in</legend>
                <form>
                    <label htmlFor='email'>Email:</label>
                    <input type='email' id='email' />
                    <label htmlFor='password'>Password:</label>
                    <input type='password' id='password' />
                    <button type='submit'>Sign-in</button>
                </form>
        </fieldset>
    )
}