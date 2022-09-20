import React from 'react';
import style from './MyPosts.module.css'
import {NewPostForm} from "./NewPostForm/NewPostForm";

type PropsType = {
    photo: string
}

export const MyPosts: React.FC<PropsType> = ({photo}) => {
    return (
        <div className={style.container}>
            <NewPostForm photo={photo}/>
        </div>
    );
};

