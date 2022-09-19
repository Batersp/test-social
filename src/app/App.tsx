import React from 'react';
import './App.css';
import {useAppSelector} from "../common/hooks/hooks";
import {getIsLoading} from "../features/Application/selectors";
import {LinearProgress} from "@mui/material";
import {Navigate, Route, Routes} from 'react-router-dom';
import {path} from "../common/enums/path";
import {Profile} from "../features/Profile/Profile";
import {LoginComponent} from "../features/Auth/Login/LoginComponent";
import {News} from "../features/News/News";
import {InfoSnackbar} from "../common/components/Snackbar/Snackbar";

function App() {

    const requestStatus = useAppSelector(getIsLoading)

    return (
        <div className="App">
            <InfoSnackbar/>
            {requestStatus === 'loading' && <LinearProgress/>}
            <Routes>
                <Route path='/' element={<Navigate to={path.PROFILE}/>}/>
                <Route path={path.PROFILE} element={<Profile/>}/>
                <Route path={path.LOGIN} element={<LoginComponent/>}/>
                <Route path={path.NEWS} element={<News/>}/>
            </Routes>

        </div>
    );
}

export default App;
