import React from 'react';
import style from './ProfileInformation.module.css';
import Preloader from "../../ItemsControl/Prealoader/Preloader";
import ProfileStatus from "./ProfileStatus";



const ProfileInformation = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (<div>
            <ProfileStatus
                userStatus={props.userStatus}
                updateUserStatus={props.updateUserStatus}/>
            {/*<img className={style.main__screen} alt='Главное изображение' src='https://gran-tur.com/assets/image/Blog/%D0%A2%D1%83%D1%80%D1%86%D0%B8%D1%8F/%D0%9F%D0%BB%D1%8F%D0%B6%D0%B8%20%D0%A2%D1%83%D1%80%D1%86%D0%B8%D0%B8/plyaz%20kliopatry.jpg' />*/}
            <div className={style.user__profile}>
                <img className={style.user__avatar} alt='Аватарка'
                     src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQi-LbRvKfBwivbh-8hydtweuTW96MhO6RC0wK7NwnYPM1FPCHb'/>
                <div className={style.user__description}>
                    <div className={style.user__name}>Иванов И.И</div>
                    <span className={style.user__description__item}>День рождения: 2 июня</span>
                    <span className={style.user__description__item}>Город: Москва</span>
                    <span className={style.user__description__item}>Образование: 11 кл</span>
                    <span className={style.user__description__item}>Web cite: Google.com</span>
                </div>
            </div>
            <img src={props.profile.photos.large} alt={""}/>
        </div>
    )
}


export default ProfileInformation;