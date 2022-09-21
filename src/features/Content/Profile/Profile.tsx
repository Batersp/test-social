import React from 'react';
import style from './Profile.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPosts} from "./MyPosts/MyPosts";
import {useAppSelector} from "../../../common/hooks/hooks";
import {getProfile} from "./selectors";


export const Profile = React.memo( () => {
    const profile = useAppSelector(getProfile)
    const {photo, name, status} = profile

    return (
        <div className={style.container}>
            <ProfileInfo name={name} photo={photo} status={status}/>
            <MyPosts photo={photo}/>
        </div>
    );
});

