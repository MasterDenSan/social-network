import React from 'react';
import FriendsBarItem from "../FriendsBarItem/FriendsBarItem";
import s from "./FriendsBar.module.css";


const FriendsBar = (props) => {


    let frendElement = props.friends.map(f => <FriendsBarItem img={f.img} name={f.name}/>)
    return (
        <div className={s.item}>
            <h2>Friends</h2>
            {frendElement}
        </div>

    )
}


export default FriendsBar;

