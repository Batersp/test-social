import React from 'react';
import style from './ProfileInfo.module.css'
import {useAppSelector} from "../../../../common/hooks/hooks";
import {getProfile} from "../selectors";
import {Box, Paper} from "@mui/material";

export const ProfileInfo = () => {

    const profile = useAppSelector(getProfile)

    return (
        <div className={style.container}>
            <Box className={style.main}>
                <Paper elevation={3} className={style.paper} >
                    <img className={style.photo}  src={profile.photo}  alt={'profile'}/>
                </Paper>
                <div className={style.description}>
                    <div className={style.name}>{profile.name}</div>
                    <div className={style.status}><b>Status:</b> {profile.status}</div>
                </div>
            </Box>
        </div>
    );
};

