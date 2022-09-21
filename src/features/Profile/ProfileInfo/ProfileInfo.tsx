import React from 'react';
import style from './ProfileInfo.module.css'
import {Box, Paper} from "@mui/material";

type PropsType = {
    photo: string
    name: string
    status: string
}

export const ProfileInfo: React.FC<PropsType> = React.memo(({status, photo, name}) => {
    return (
        <div className={style.container}>
            <Box className={style.main}>
                <Paper elevation={3} className={style.paper}>
                    <img className={style.photo} src={photo} alt={'profile '}/>
                </Paper>
                <div className={style.description}>
                    <div className={style.name}>{name}</div>
                    <div className={style.status}><b>Status:</b> {status}</div>
                </div>
            </Box>
        </div>
    );
});

