import React from 'react';
import style from './NewPostForm.module.css'
import {Form, Formik, FormikHelpers, FormikValues} from 'formik';
import {GeneralButton} from "../../../../../common/components/Buttons/GeneralButton/GeneralButton";
import {validateNewPost} from "./validateNewPost";
import {ProjectTextArea} from "../../../../../common/components/Forms/ProjectTextArea/ProjectTextArea";
import {useAppDispatch} from "../../../../../common/hooks/hooks";
import {addPost} from "../../profile-reducer";
import {v1} from "uuid";
import {setAppSnackbarValue} from "../../../../Application/application-reducer";
import {snackbarType} from "../../../../../common/enums/snackbarType";

type PropsType = {
    photo: string
}

export const NewPostForm: React.FC<PropsType> = React.memo( ({photo}) => {
    const dispatch = useAppDispatch()

    const onSubmitHandler = (value: FormikValues, {resetForm}: FormikHelpers<{message: string}>) => {
        if(value.message.trim().length !== 0) {
            dispatch(addPost({value: {message: value.message.trim(), id: v1(), likeCounts: 0}}))
            resetForm()
        } else {
            dispatch(setAppSnackbarValue({type: snackbarType.ERROR, message: 'ваш пост не должен быть пустым'}))
            resetForm()
        }

    }

    return (
        <div className={style.container}>
            <div className={style.paper}>
                <Formik
                    initialValues={{message: ''}}
                    validationSchema={validateNewPost}
                    onSubmit={onSubmitHandler}
                >
                    {formik =>
                    <Form className={style.form}>
                        <img className={style.photo} src={photo} alt=""/>
                        <div className={style.field}>
                            <ProjectTextArea  name='message' label='Enter you message'/>
                        </div>
                        <div className={style.btn}>
                            <GeneralButton
                                color={'secondary'}
                                label='Add post'
                                type='submit'
                                disabled={!formik.isValid || !formik.dirty}
                            />
                        </div>
                    </Form>
                    }
                </Formik>
            </div>
        </div>
    );
});

