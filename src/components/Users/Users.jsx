import React from "react";
import style from "./Users.module.css";


const Users = (props) => {
    return <div>
        {props.users.map(u =>
                <div key={u.id}>}
                    <img className={style.userAvatar} src={u.imgUrl} alt={u.name}/>
                    <div>{u.name}</div>
                    <div>
                    { u.followed
                    ? <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button>
                    : <button onClick={() => {props.follow(u.id)}}>Follow</button>}
                    </div>
                </div>)
        }
         </div>


}

export default Users;