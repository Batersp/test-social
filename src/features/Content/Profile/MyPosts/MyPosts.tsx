import React from 'react';
import style from './MyPosts.module.css'
import {NewPostForm} from "./NewPostForm/NewPostForm";
import {useAppSelector} from "../../../../common/hooks/hooks";
import {getPosts} from "../selectors";
import {Post} from "./Post/Post";

type PropsType = {
    photo: string
}

export const MyPosts: React.FC<PropsType> = ({photo}) => {

    const posts = useAppSelector(getPosts)

    return (
        <div className={style.container}>
            <NewPostForm photo={photo}/>
            {posts.map(el => <Post photo={photo} post={el}/>)}
        </div>
    );
};
