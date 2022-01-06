import { NavLink } from 'react-router-dom';
import { useUser } from '../../context/UserContext/UserContext';
import { signOutUser } from '../../services/users';
import style from './header.css'

export default function Header(){
    const { user, setUser } = useUser();
    console.log('USER', user)

    const handleLogout = async() => {
        await signOutUser()
        setUser({})
    }
    return (
        <section className={style.headerContainer}>
            <div className={style.leftContainer}>
                <NavLink to='/' >
                    <img className={style.left} src='https://alchemy-react-employee-directory.netlify.app/3a38267abb12c713fea473fa69f9884f.png'/>
                    <h1 className={style.left}>Acme Employee Directory</h1>
                </NavLink>
            </div>
            {user.email ? (
                <div className={style.rightContainer}>
                <p className={style.text}>Signed in as</p>
                <p className={style.userText}>{`${user.email}`}</p>
                <NavLink to='/'>
                    <button className={style.logoutButton} onClick={handleLogout}>SIGN OUT</button>
                </NavLink>
            </div>
            ) : (
            <div className={style.rightContainer}>
                <p className={style.text}>Not Signed In</p>
                <NavLink to='/login'>
                    <h1 className={style.login}>SIGN IN</h1>
                </NavLink>
            </div>
            )
            }
        </section>
    )
}