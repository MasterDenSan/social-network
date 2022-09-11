import React, {FC} from 'react';
import styles from './../Dialogs.module.css';
import {MassegeI} from "./types";

const Message: FC<MassegeI> = (props) => {
    return (
    <div className={styles.chat__dialog}>{props.massage}</div>
    )
}

export default Message;