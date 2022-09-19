import React from 'react';
import style from './Profile.module.css'
import {useAppSelector} from "../../common/hooks/hooks";
import {getIsLoggedIn} from "../Auth/selectors";
import {Navigate} from "react-router-dom";
import {path} from "../../common/enums/path";

export const Profile = () => {

    const isLoggedIn = useAppSelector(getIsLoggedIn)


    if(!isLoggedIn) {
        return <Navigate to={path.LOGIN}/>
    }

    return (
        <div className={style.container}>
            PROFILE
        </div>
    );
};

