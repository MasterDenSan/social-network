import React from "react";
import style from "./Users.module.css";
import userPhoto from "../assets/images/userPhoto.png"
import {NavLink} from "react-router-dom";


const Users = (props) => {

    let numberOfPages = Math.ceil(props.allItems / props.countItems);
    let pages = [];
    for (let i = 1; i <= numberOfPages; i++) {
        pages.push(i);
    }
    return <div>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p && style.selectedPage}
                             onClick={(e) => {
                                 props.onCangedPage(p)
                             }}>{p}</span>


            })}


        </div>
        {props.users.map(u =>
            <div key={u.id}>}
                <NavLink to={'/profile/' + u.id}>
                    <img className={style.userAvatar} src={u.photos.small != null ? u.photos.small : userPhoto}
                         alt={""}/>
                </NavLink>
                <div>{u.name}</div>
                <div>{u.status}</div>

                <div>
                    {u.followed
                        ? <button disabled={props.isProcessingArr.some(id => id === u.id)} onClick={() => {
                            props.unfollow(u.id);
                        }}>Unfollow</button>
                        : <button disabled={props.isProcessingArr.some(id => id === u.id)} onClick={() => {
                            props.follow(u.id);
                        }}>Follow</button>}
                </div>
            </div>)
        }
    </div>

}


export default Users;
