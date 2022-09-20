import React from 'react';
import style from './NewPostForm.module.css'
import {Form, Formik, FormikHelpers, FormikValues, useFormik} from 'formik';
import {FormGroup, Paper, TextareaAutosize} from "@mui/material";
import {ProjectTextField} from "../../../../../common/components/Forms/ProjectTextField/ProjectTextField";
import {GeneralButton} from "../../../../../common/components/Buttons/GeneralButton/GeneralButton";
import {validateNewPost} from "./validateNewPost";
import FormControl from "@mui/material/FormControl";
import {ProjectTextArea} from "../../../../../common/components/Forms/ProjectTextArea/ProjectTextArea";

type PropsType = {
    photo: string
}

export const NewPostForm: React.FC<PropsType> = ({photo}) => {


    const onSubmitHandler = (value: FormikValues) => {

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

