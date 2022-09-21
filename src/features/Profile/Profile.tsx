import React from 'react';
import style from './Profile.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPosts} from "./MyPosts/MyPosts";
import {useAppSelector} from "../../common/hooks/hooks";
import {getProfile} from "./selectors";
import {authSelectors} from "../Auth";
import {Navigate} from "react-router-dom";
import {path} from "../../common/enums/path";


export const Profile = React.memo(() => {
    const isLoggedIn = useAppSelector(authSelectors.getIsLoggedIn)
    const profile = useAppSelector(getProfile)

    if (!isLoggedIn) {
        return <Navigate to={path.LOGIN}/>
    }

    return (
        <div className={style.container}>
            <ProfileInfo name={profile.name} photo={profile.photo} status={profile.status}/>
            <MyPosts photo={profile.photo}/>
        </div>
    );
});

