import React, {FC} from 'react';
import styles from './Navigation.module.css';
import {NavLink} from 'react-router-dom';
import FriendsBar from "./FriendsBar/FriendsBar";
import {NavigationI} from "./types";



const Navigation: FC<NavigationI> = (props) => {
    return (
        <div>
            <nav className={styles.nav}>
                <NavLink className={styles.nav__item} to='/profile' activeClassName={styles.activeLink}>Profile</NavLink>
                <NavLink className={styles.nav__item} to='/dialogs' activeClassName={styles.activeLink}>Dialogs</NavLink>
                <NavLink className={styles.nav__item} to='/users' activeClassName={styles.activeLink}>Users</NavLink>
                <NavLink className={styles.nav__item} to='/news' activeClassName={styles.activeLink}>News</NavLink>
                <NavLink className={styles.nav__item} to='/music' activeClassName={styles.activeLink}>Music</NavLink>
                <NavLink className={styles.nav__item} to='/settings' activeClassName={styles.activeLink}>Settings</NavLink>
            </nav>
            <FriendsBar friends={props.navigation.friends}/>
        </div>
    );
}

export default Navigation;