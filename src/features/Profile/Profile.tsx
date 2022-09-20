import React from 'react';
import style from './Profile.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

export const Profile = () => {
    return (
        <div className={style.container}>
            <ProfileInfo/>

        </div>
    );
};

