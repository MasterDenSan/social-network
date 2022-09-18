import React, {FC} from 'react';
import FriendsBarItem from "../FriendsBarItem/FriendsBarItem";
import styles from "./FriendsBar.module.css";
import {FriendsBarI} from "./types";



const FriendsBar: FC<FriendsBarI> = (props) => {

    let frendElement = props.friends.map(f => <FriendsBarItem img={f.img} name={f.name}/>)
    return (
        <div className={styles.item}>
            <h2>Friends</h2>
            {frendElement}
        </div>

    )
}


export default FriendsBar;

