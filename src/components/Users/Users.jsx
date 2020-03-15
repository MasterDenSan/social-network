import React from "react";
import style from "./Users.module.css";
import userPhoto from "../../assets/images/userPhoto.png"
import {NavLink} from "react-router-dom";
import * as axios from "axios";


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
                        ? <button onClick={() => {
                            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                withCredentials: true,
                                headers: {
                                    "API-KEY": "aa2b0c24-e339-4c64-a570-1572182c2672"
                                }
                            }).then(response => {
                                if (response.data.resultCode === 0) {
                                    props.unfollow(u.id)
                                }
                            });
                        }}>Unfollow</button>
                        : <button onClick={() => {
                            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                withCredentials: true,
                                headers: {
                                    "API-KEY": "aa2b0c24-e339-4c64-a570-1572182c2672"
                                }
                            }).then(response => {
                                if (response.data.resultCode === 0) {
                                    props.follow(u.id)
                                }
                            });
                        }}>Follow</button>}
                </div>
            </div>)
        }
    </div>

}


export default Users;
