import React from 'react';
import './App.css';
import {useAppSelector} from "../common/hooks/hooks";
import {getIsLoading} from "../features/Application/selectors";
import {LinearProgress} from "@mui/material";
import {Navigate, Route, Routes} from 'react-router-dom';
import {path} from "../common/enums/path";
import {Profile} from "../features/Profile/Profile";
import {Login} from "../features/Auth/Login/Login";
import {News} from "../features/News/News";

function App() {

    const requestStatus = useAppSelector(getIsLoading)

    return (
        <div className="App">
            {requestStatus === 'loading' && <LinearProgress/>}
            <Routes>
                <Route path='/' element={<Navigate to={path.PROFILE}/>}/>
                <Route path={path.PROFILE} element={<Profile/>}/>
                <Route path={path.LOGIN} element={<Login/>}/>
                <Route path={path.NEWS} element={<News/>}/>
            </Routes>

        </div>
    );
}

export default App;
