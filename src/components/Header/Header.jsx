import { NavLink } from 'react-router-dom';
import style from './header.css'

export default function Header(){
    return (
        <section className={style.headerContainer}>
            <div className={style.leftContainer}>
                <NavLink to='/' >
                    <img className={style.left} src='https://alchemy-react-employee-directory.netlify.app/3a38267abb12c713fea473fa69f9884f.png'/>
                    <h1 className={style.left}>Acme Employee Directory</h1>
                </NavLink>
            </div>
            <div className={style.rightContainer}>
                <p className={style.text}>Not Signed In</p>
                <NavLink to='/login'>
                    <h1 className={style.login}>SIGN IN</h1>
                </NavLink>
            </div>
        </section>
    )
}