import React, {FC} from "react";
import style from "./User.module.css";
import userPhoto from "../assets/images/userPhoto.png";
import {NavLink} from "react-router-dom";




type UserType = {
    user: any
    follow: (id: number) => void
    unfollow: (id: number) => void
    isProcessingArr: []
}

const User: FC<UserType> = ({user, follow, unfollow, isProcessingArr}) => {


    return <div>
        <NavLink to={'/profile/' + user.id}>
            <img className={style.userAvatar} src={user.photos.small != null ? user.photos.small : userPhoto}
                 alt={""}/>
        </NavLink>
        <div>{user.name}</div>
        <div>{user.status}</div>

        <div>
            {user.followed
                ? <button disabled={isProcessingArr.some(id => id === user.id)} onClick={() => {
                    unfollow(user.id);
                }}>Unfollow</button>
                : <button disabled={isProcessingArr.some(id => id === user.id)} onClick={() => {
                    follow(user.id);
                }}>Follow</button>}
        </div>
    </div>


}


export default User;
