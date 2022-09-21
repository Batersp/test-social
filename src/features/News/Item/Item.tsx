import React from 'react';
import style from './Item.module.css'

type PropsType = {
    message: string
    title: string
}

export const Item: React.FC<PropsType> = ({title, message}) => {
    return (
        <div className={style.container}>
            <div className={style.title}>{title}</div>
            <div className={style.message}>{message}</div>
        </div>
    );
};

