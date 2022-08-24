import React, {FC} from "react";
import style from './ProfileInfo.module.css';

export type ProfileT = {
    fullName: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    aboutMe: string
    contacts: any
}

export type ProfileDataT = {
    profile: ProfileT
    isOwner: boolean
    goToEditMode: () => void
}

export type ContactsT = {
    contactTitle: string
    contactValue: string
}

const ProfileData: FC<ProfileDataT> = ({profile, isOwner, goToEditMode}) => {
    return <div>
        {isOwner && <button onClick={goToEditMode}>Edit</button>}
        <div>
            <b>Full Name</b>: {profile.fullName}
        </div>
        <div>
            <b>Looking for a job</b>: {profile.lookingForAJob ? "yes" : "no"}
        </div>
        {
            profile.lookingForAJob &&
            <div>
                <b>My professional skills</b>: {profile.lookingForAJobDescription}
            </div>
        }
        <div>
            <b>About me</b>: {profile.aboutMe}
        </div>
        <div className={style.contacts}>
            <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
            return <Contacts key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
        })}
        </div>
    </div>
}

const Contacts: FC<ContactsT> = ({contactTitle, contactValue}) => {
    return <div><b>{contactTitle}</b>: {contactValue}</div>
}

export default ProfileData;