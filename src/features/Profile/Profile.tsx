import React from 'react';
import style from './Profile.module.css'
import {useAppDispatch, useAppSelector} from "../../common/hooks/hooks";
import {Navigate} from "react-router-dom";
import {path} from "../../common/enums/path";
import {authSelectors, logout} from "../Auth";

export const Profile = () => {

    const dispatch = useAppDispatch()
    const isLoggedIn = useAppSelector(authSelectors.getIsLoggedIn)

    const onClickHandler = () => {
        dispatch(logout())
    }

    if(!isLoggedIn) {
        return <Navigate to={path.LOGIN}/>
    }

    return (
        <div className={style.container}>
            <div>
                PROFILE
            </div>
            <button onClick={onClickHandler}>Logout</button>
        </div>
    );
};

