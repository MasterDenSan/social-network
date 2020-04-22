import React from 'react';
import style from './ProfileInformation.module.css';
import Preloader from "../../ItemsControl/Prealoader/Preloader";
import ProfileStatusWhuthHook from "./ProfileStatusWithHooks";
import userPhoto from "../../assets/images/userPhoto.png"


const ProfileInformation = ({profile, savePhoto, userStatus, updateUserStatus, isOwner}) => {
    if (!profile) {
        return <Preloader/>
    }
    let onAddNewPhoto = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }

    return (<div>
            <ProfileStatusWhuthHook
                userStatus={userStatus}
                updateUserStatus={updateUserStatus}/>
            {/*<img className={style.main__screen} alt='Главное изображение' src='https://gran-tur.com/assets/image/Blog/%D0%A2%D1%83%D1%80%D1%86%D0%B8%D1%8F/%D0%9F%D0%BB%D1%8F%D0%B6%D0%B8%20%D0%A2%D1%83%D1%80%D1%86%D0%B8%D0%B8/plyaz%20kliopatry.jpg' />*/}
            <div>
                <img className={style.user__photo} src={profile.photos.large ? profile.photos.large : userPhoto}
                     alt={""}/>
                <div>
                    {isOwner && <input type={"file"} onChange={onAddNewPhoto}/>}
                </div>
                <div className={style.user__description}>
                    <div className={style.user__name}>Иванов И.И</div>
                    <span className={style.user__description__item}>День рождения: 2 июня</span>
                    <span className={style.user__description__item}>Город: Москва</span>
                    <span className={style.user__description__item}>Образование: 11 кл</span>
                    <span className={style.user__description__item}>Web cite: Google.com</span>
                </div>
            </div>
        </div>
    )
}


export default ProfileInformation;