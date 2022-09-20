import React from 'react';
import style from './Profile.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPosts} from "./MyPosts/MyPosts";


export const Profile = () => {
    return (
        <div className={style.container}>
            <ProfileInfo/>
            <MyPosts/>
        </div>
    );
};

