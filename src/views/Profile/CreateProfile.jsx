import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { useUser } from "../../context/UserContext/UserContext";
import { createProfile, getProfile, updateProfile } from "../../services/profiles";
import style from './createprofile.css';


export default function CreateProfile({newProfile = false }){
    const { user } = useUser();
    const history = useHistory();
    const email = user.email;
    const [name, setName] = useState('');
    const [birthday, setBirthday] = useState('');
    const [bio, setBio] = useState('')

    useEffect(() => {
        const loadData = async () => {
            const userProfile = await getProfile();
            setName(userProfile.name)
            setBio(userProfile.bio)
            setBirthday(userProfile.birthday)
        }
        if (newProfile) return loadData();
    }, [newProfile])
    const handleCreateProfile = async(event) => {
        event.preventDefault();
        try {
            if (!newProfile){
                await createProfile({ name, email, bio, birthday });
                history.push('/profile')
            } else {
                await updateProfile({ name, email, bio, birthday })
                history.push('/profile')
            }
        } catch(error){
            throw new Error(error.message)
        }
    }
    return (
        <fieldset className={style.formContainer}>
            <legend>{newProfile ? 'Edit Profile' : 'Create Profile'}</legend>
            <form onSubmit={handleCreateProfile}>
                <label>Name:</label>
                <input type='text' placeholder='Name' value={name} onChange={((e) => setName(e.target.value))} required/>
                <label>Email:</label>
                <p>{email}</p>
                <label>Birthday:</label>
                <input type='date' value={birthday} onChange={((e) => setBirthday(e.target.value))} required/>
                <label>Bio:</label>
                <textarea value={bio} onChange={((e) => setBio(e.target.value))} required />
                <button type='submit'>{newProfile ? 'Save' : 'CreateProfile'}</button>
            </form>
        </fieldset>
    )
}