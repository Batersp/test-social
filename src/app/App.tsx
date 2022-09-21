import React from 'react';
import './App.css';
import {useAppSelector} from "../common/hooks/hooks";
import {getIsLoading} from "../features/Application/selectors";
import {LinearProgress} from "@mui/material";
import {Navigate, Route, Routes} from 'react-router-dom';
import {path} from "../common/enums/path";
import {LoginComponent} from "../features/Auth/Login/LoginComponent";
import {InfoSnackbar} from "../common/components/Snackbar/Snackbar";
import {Header} from "../features/Header/Header";
import {Profile} from "../features/Profile/Profile";
import {News} from "../features/News/News";
import {authSelectors} from "../features/Auth";
import {Navbar} from "../features/Navbar/Navbar";

function App() {

    const requestStatus = useAppSelector(getIsLoading)
    const isLoggedIn = useAppSelector(authSelectors.getIsLoggedIn)

    return (
        <div className="App">
            <InfoSnackbar/>
            {requestStatus === 'loading' &&
                <div style={{position: 'absolute', left: 0, right: 0}}><LinearProgress/></div>}
            <Header/>
            <div className={'content'}>
                {isLoggedIn && <Navbar/>}
                <Routes>
                    <Route path='/' element={<Navigate to={path.PROFILE}/>}/>
                    <Route path={path.PROFILE} element={<Profile/>}/>
                    <Route path={path.NEWS} element={<News/>}/>
                    <Route path={path.LOGIN} element={<LoginComponent/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
