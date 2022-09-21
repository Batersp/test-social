import React, {ChangeEvent, KeyboardEvent, useCallback, useState} from 'react';
import style from './Post.module.css'
import {PostType} from "../../profileTypes";
import {TextareaAutosize} from "@mui/material";
import IconButton from "@mui/material/IconButton/IconButton";
import DeleteIcon from '@mui/icons-material/Delete';
import {useAppDispatch} from "../../../../common/hooks/hooks";
import {changePost, removePost} from "../../profile-reducer";
import EditIcon from '@mui/icons-material/Edit';

type PropsType = {
    post: PostType
    photo: string

}

export const Post: React.FC<PropsType> = ({post, photo}) => {
    const {likeCounts, id, message} = post
    const dispatch = useAppDispatch()
    const [value, setValue] = useState<string>(message)
    const [editMode, setEditMode] = useState<boolean>(false)
    const activateViewMode = useCallback(() => {
        setEditMode(false)
    }, [])

    const activateEditMode = useCallback(() => {
        setEditMode(true)
    }, [])

    const onChangeValue = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
        setValue(e.currentTarget.value)
        dispatch(changePost({id, message: e.currentTarget.value.trim()}))
    }, [])

    const onClickHandler = useCallback(() => {
        dispatch(removePost({id}))
    }, [])

    const onKeyPressHandler = useCallback((e: KeyboardEvent<HTMLTextAreaElement>) => {

        if (e.charCode === 13) {
            activateViewMode()
        }
    }, [])

    return (
        <div className={style.container}>
            <div className={style.paper}>
                <img className={style.photo} src={photo} alt=""/>
                {
                    editMode
                        ? <TextareaAutosize onKeyPress={onKeyPressHandler} className={style.textArea} value={value}
                                            onChange={onChangeValue} autoFocus
                                            onBlur={activateViewMode}/>
                        : <div onDoubleClick={activateEditMode} className={style.message}>{value}</div>
                }

                <div className={style.info}>
                    <div className={style.icons}>
                        <IconButton onClick={onClickHandler} className={style.btn} color='primary' aria-label="delete"
                                    size="medium">
                            <DeleteIcon fontSize="inherit"/>
                        </IconButton>

                        <EditIcon onClick={activateEditMode}/>
                    </div>
                    <div className={style.like}>
                        <span><b>Like</b></span>
                        <span className={style.count}>{likeCounts}</span>
                    </div>
                </div>

            </div>
        </div>
    );
};
