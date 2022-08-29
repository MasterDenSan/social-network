import React, {FC} from 'react';
import styles from './../Dialogs.module.css';

export type MassegeT = {
    massage: string
}

const Message: FC<MassegeT> = (props) => {
    return (
    <div className={styles.chat__dialog}>{props.massage}</div>
    )
}


export default Message;