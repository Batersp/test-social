import React from 'react';
import style from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import {path} from "../../../common/enums/path";

export const Navbar = () => {
    return (
        <div className={style.container}>
            <nav>
                <div>
                    <img src="" alt=""/>
                </div>
                <div className={style.item}>
                    <NavLink to={path.PROFILE}>Profile</NavLink>
                </div>
                <div className={style.item}>
                    <NavLink to={path.NEWS}>News</NavLink>
                </div>
            </nav>
        </div>
    );
};

