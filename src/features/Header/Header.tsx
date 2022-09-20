import React from 'react';
import style from './Header.module.css'
import {useAppDispatch, useAppSelector} from "../../common/hooks/hooks";
import {profileSelectors} from "../Content/Profile";
import {authSelectors, logout} from "../Auth";
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';


export const Header = () => {

    const dispatch = useAppDispatch()
    const profile = useAppSelector(profileSelectors.getProfile)
    const isLoggedIn = useAppSelector(authSelectors.getIsLoggedIn)

    return (
        <div className={style.container}>
            {isLoggedIn
                ? <div className={style.main}>
                    <div className={style.name}>{profile.name}</div>
                    <ExitToAppOutlinedIcon
                        className={style.icon}
                        color={"primary"}
                        fontSize={"large"}
                        onClick={() => dispatch(logout())}
                    />
                </div>
                : <div className={style.main}>Login</div>


            }

        </div>
    );
};

