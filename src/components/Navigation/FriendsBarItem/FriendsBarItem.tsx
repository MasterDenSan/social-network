import React, {FC} from "react";
import styles from "./FriendsBarItem.module.css";
import {FriendI} from "../FriendsBar";

export interface FriendsBarItemT extends FriendI {}


const FriendsBarItem: FC<FriendsBarItemT> = (props) => {
    return (
        <div className={styles.item}>
            <div className={styles.item2}>
                <img src={props.img} className={styles.img} alt=''/>
                <div className={styles.name}>{props.name}</div>
            </div>
        </div>
    )
}

export default FriendsBarItem;