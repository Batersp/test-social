import React from 'react';
import style from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import {path} from "../../../common/enums/path";


const setActive = ({isActive}: any) => isActive? style.active: ''

export const Navbar = React.memo( () => {
    return (
        <div className={style.container}>
            <nav>
                <div>
                    <img src="" alt=""/>
                </div>
                <div className={style.item}>
                    <NavLink to={path.PROFILE} className={setActive}>Profile</NavLink>
                </div>
                <div className={style.item}>
                    <NavLink to={path.NEWS} className={setActive}>News</NavLink>
                </div>
            </nav>
        </div>
    );
});

