import React from 'react';
import style from './Login.module.css'
import {Paper, Typography} from "@mui/material";
import {Formik, FormikHelpers} from 'formik';
import {validateLogin} from "./validateLogin";
import {LoginForm} from "./LoginForm/LoginForm";
import {LoginType} from "../authTypes";
import {useAppSelector} from "../../../common/hooks/hooks";
import {getIsLoggedIn} from "../selectors";
import {Navigate} from "react-router-dom";
import {path} from "../../../common/enums/path";

export const Login = () => {

    const isLoggedIn = useAppSelector(getIsLoggedIn)

    const onSubmitHandler = (values: LoginType) => {
        console.log(values)
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



