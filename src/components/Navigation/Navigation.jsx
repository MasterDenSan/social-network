import React from 'react';
import s from './Navigation.module.css';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav className={s.nav}>
            <NavLink className={s.nav__item} to='/profile' activeClassName = {s.activeLink}>Profile</NavLink>
            <NavLink className={s.nav__item} to='/dialogs' activeClassName = {s.activeLink}>Dialogs</NavLink>
            <NavLink className={s.nav__item} to='/news' activeClassName = {s.activeLink}>News</NavLink>
            <NavLink className={s.nav__item} to='/music' activeClassName = {s.activeLink}>Music</NavLink>
            <NavLink className={s.nav__item} to='/settings' activeClassName = {s.activeLink}>Settings</NavLink>
        </nav>
    );
}

export default Navigation;