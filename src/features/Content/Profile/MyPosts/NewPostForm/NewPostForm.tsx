import React from 'react';
import style from './NewPostForm.module.css'
import {Form, Formik, FormikHelpers, FormikValues} from 'formik';
import {Paper} from "@mui/material";
import {GeneralButton} from "../../../../../common/components/Buttons/GeneralButton/GeneralButton";
import {validateNewPost} from "./validateNewPost";
import {ProjectTextArea} from "../../../../../common/components/Forms/ProjectTextArea/ProjectTextArea";
import {useAppDispatch} from "../../../../../common/hooks/hooks";
import {addPost} from "../../profile-reducer";
import {v1} from "uuid";

type PropsType = {
    photo: string
}

export const NewPostForm: React.FC<PropsType> = ({photo}) => {
    const dispatch = useAppDispatch()

    const onSubmitHandler = (value: FormikValues, {resetForm}: FormikHelpers<{message: string}>) => {
        dispatch(addPost({value: {message: value.message, id: v1(), likeCounts: 0}}))
        resetForm()
    }

    return (
        <div className={style.container}>
            <Paper elevation={3} className={style.paper}>
                <Formik
                    initialValues={{message: ''}}
                    validationSchema={validateNewPost}
                    onSubmit={onSubmitHandler}
                >
                    {formik =>
                    <Form className={style.form}>
                        <img className={style.photo} src={photo} alt=""/>
                        <div className={style.field}>
                            <ProjectTextArea name='message' label='Enter you message'/>
                            {/*<ProjectTextField variant='filled' name={'message'} label='NewPost'/>*/}
                        </div>
                        <div className={style.btn}>
                            <GeneralButton
                                label='Add post'
                                type='submit'
                                disabled={!formik.isValid || !formik.dirty}
                            />
                        </div>
                    </Form>
                    }
                </Formik>
            </Paper>
        </div>
    );
};

