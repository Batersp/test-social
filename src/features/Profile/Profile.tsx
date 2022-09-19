import React from 'react';
import style from './Profile.module.css'
import {useAppSelector} from "../../common/hooks/hooks";
import {Navigate} from "react-router-dom";
import {path} from "../../common/enums/path";
import {authSelectors} from "../Auth";

export const Profile = () => {

    const isLoggedIn = useAppSelector(authSelectors.getIsLoggedIn)


    if(!isLoggedIn) {
        return <Navigate to={path.LOGIN}/>
    }

    return (
        <div className={style.container}>
            PROFILE
        </div>
    );
};

