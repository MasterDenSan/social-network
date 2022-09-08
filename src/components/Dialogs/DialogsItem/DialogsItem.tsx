import React, {FC} from 'react';
import styles from './../Dialogs.module.css';
import {NavLink} from 'react-router-dom';
import {DialogsItemI} from "./types";

const DialogsItem: FC<DialogsItemI> = (props) => {
    let path = "/dialogs/" + props.id
    return (<div>
            <img className={styles.img} src={props.img} alt=""/>
            <NavLink to={path} className={styles.dialogs__user} activeClassName={styles.active}>{props.name}</NavLink>
        </div>
    )
}

export default DialogsItem;
