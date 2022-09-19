import React from 'react';
import style from './Navbar.module.css'
import {NavLink} from "react-router-dom";

export const Navbar = () => {
    return (
        <div className={style.container}>
            <nav>
                <div>
                    <img src="" alt=""/>
                </div>
                <div className={style.item}>
                    <NavLink to='/profile'>Profile</NavLink>
                </div>
                <div className={style.item}>
                    <NavLink to='/news'>News</NavLink>
                </div>
            </nav>
        </div>
    );
};

