import React from 'react';
import style from './Content.module.css'
import {Navigate, Route, Routes} from "react-router-dom";
import {path} from "../../common/enums/path";
import {Profile} from "./Profile/Profile";
import {News} from "../News/News";
import {useAppSelector} from "../../common/hooks/hooks";
import {authSelectors} from "../Auth";
import {Navbar} from "./Navbar/Navbar";

export const Content = React.memo( () => {
    const isLoggedIn = useAppSelector(authSelectors.getIsLoggedIn)


    if (!isLoggedIn) {
        return <Navigate to={path.LOGIN}/>
    }

    return (
        <div className={style.container}>
            <Navbar/>
            <Routes>
                <Route path={path.PROFILE} element={<Profile/>}/>
                <Route path={path.NEWS} element={<News/>}/>
            </Routes>
        </div>
    );
});

