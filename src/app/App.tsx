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
import {Content} from "../features/Content/Content";

function App() {

    const requestStatus = useAppSelector(getIsLoading)

    return (
        <div className="App">
            <InfoSnackbar/>
            {requestStatus === 'loading' && <div style={{position: 'absolute', left: 0, right: 0}}><LinearProgress/></div> }
            <Header/>
            <Routes>
                <Route path='/' element={<Navigate to={path.CONTENT}/>}/>
                <Route path={path.CONTENT} element={<Content/>}/>
                <Route path={path.LOGIN} element={<LoginComponent/>}/>
            </Routes>

        </div>
    );
}

export default App;
