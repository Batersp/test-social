import React from 'react';
import style from './Login.module.css'
import {Paper, Typography} from "@mui/material";
import {Formik, FormikHelpers} from 'formik';
import {validateLogin} from "./validateLogin";
import {LoginForm} from "./LoginForm/LoginForm";
import {LoginType} from "../authTypes";
import {useAppDispatch, useAppSelector} from "../../../common/hooks/hooks";
import {Navigate} from "react-router-dom";
import {path} from "../../../common/enums/path";
import {authSelectors, login} from "../index";


export const LoginComponent = () => {

    const dispatch = useAppDispatch()

    const isLoggedIn = useAppSelector(authSelectors.getIsLoggedIn)

    const onSubmitHandler = async (values: LoginType, {resetForm}: FormikHelpers<LoginType>) => {
        await dispatch(login(values))
        resetForm()
    }


    if(isLoggedIn) {
        return <Navigate to={path.PROFILE}/>
    }

    return (
        <div className={style.container}>
            <Paper elevation={3} className={style.paper}>
                <Typography variant="h4" className={style.title}>
                    Sing In
                </Typography>
                <Formik
                    initialValues={{name: '', password: ''}}
                    validationSchema={validateLogin}
                    onSubmit={onSubmitHandler}
                    validateOnMount={false}
                >
                    {formik => <LoginForm formik={formik}/>}
                </Formik>
            </Paper>
        </div>
    );
};



