import React from 'react';
import s from './../Dialogs.module.css';
import {NavLink} from 'react-router-dom';


const DialogsItem = (props) => {
    let path = "/dialogs/" + props.id
    return (<div>
            <img className={s.img} src={props.img} alt=""/>
            <NavLink to={path} className={s.dialogs__user} activeClassName={s.active}>{props.name}</NavLink>
        </div>
    )
}

export default DialogsItem;