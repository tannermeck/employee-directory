import { useEffect, useState } from "react"
import { NavLink, useHistory } from "react-router-dom"
import { getProfile } from "../../services/profiles"
import style from './profile.css'

export default function Profile() {
    const history = useHistory();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [birthday, setBirthday] = useState('');
    const [bio, setBio] = useState('');

    useEffect(() => {
        const loadProfile = async() => {
            const userProfile = await getProfile();
            if (!userProfile.name && !userProfile.birthday && !userProfile.bio){
                history.push('/create-profile')
            } else {
                setName(userProfile.name);
                setEmail(userProfile.email);
                setBirthday(userProfile.birthday);
                setBio(userProfile.bio);
            }
        }
        loadProfile();
    }, []);

    return (
        <section className={style.profile}>
            <NavLink to='/edit-profile'>Edit Profile</NavLink>
            <p>{`Welcome ${name}`}</p>
            <p>{email}</p>
            <p>{birthday}</p>
            <p>{bio}</p>
        </section>
    )
}
