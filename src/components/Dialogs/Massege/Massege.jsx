import React from 'react';
import s from './../Dialogs.module.css';


const Massege = (props) => {
    return (
    <div className={s.chat__dialog}>{props.massage}</div>
    )
}


export default Massege;