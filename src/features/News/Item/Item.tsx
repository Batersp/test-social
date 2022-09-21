import React from 'react';
import style from './Item.module.css'
import {NewsType} from "../newsTypes";

type PropsType = {
    post: NewsType
}

export const Item: React.FC<PropsType> = React.memo(({post}) => {
    const {message, title, category} = post

    return (
        <div className={style.container}>
            <div className={style.title}>{`${title} (${category})`}</div>
            <div className={style.message}>{message}</div>
        </div>
    );
});

