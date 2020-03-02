import React from "react";
import s from "./FriendsBarItem.module.css";


const FriendsBarItem = (props) => {
    return (
        <div className={s.item}>
            <div className={s.item2}>
                <img src={props.img} className={s.img} alt=''/>
                <div className={s.name}>{props.name}</div>
            </div>
        </div>
    )
}

export default FriendsBarItem;