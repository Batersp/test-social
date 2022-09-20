import React from 'react';
import style from './Post.module.css'
import {PostType} from "../../profileTypes";
import {Paper} from "@mui/material";
import IconButton from "@mui/material/IconButton/IconButton";
import DeleteIcon from '@mui/icons-material/Delete';
import {useAppDispatch} from "../../../../../common/hooks/hooks";
import {removePost} from "../../profile-reducer";

type PropsType = {
    post: PostType
    photo: string

}

export const Post: React.FC<PropsType> = ({post, photo}) => {
    const {likeCounts, id, message} = post
    const dispatch = useAppDispatch()

    const onClickHandler = () => {
        dispatch(removePost({id}))
    }

    return (
        <div className={style.container}>
            <Paper elevation={3} className={style.paper}>
                <img className={style.photo} src={photo} alt=""/>
                <div className={style.message}>{message}</div>
                <div className={style.like}>
                    <span><b>Like</b></span>
                    <span className={style.count}>{likeCounts}</span>
                </div>
                <IconButton onClick={onClickHandler} className={style.btn} color='primary' aria-label="delete" size="medium">
                    <DeleteIcon fontSize="inherit" />
                </IconButton>
            </Paper>
        </div>
    );
};
