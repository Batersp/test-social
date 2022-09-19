import React from 'react';
import style from './Header.module.css'
import {useAppDispatch, useAppSelector} from "../../common/hooks/hooks";
import {profileSelectors} from "../Profile";
import {authSelectors, logout} from "../Auth";
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';


export const Header = () => {

    const dispatch = useAppDispatch()
    const userName = useAppSelector(profileSelectors.getUserName)
    const isLoggedIn = useAppSelector(authSelectors.getIsLoggedIn)

    return (
        <div className={style.container}>
            {isLoggedIn
                ? <div>
                    <div>{userName}</div>
                    <ExitToAppOutlinedIcon
                        className={style.icon}
                        color={"primary"}
                        fontSize={"large"}
                        onClick={() => dispatch(logout())}
                    />
                </div>
                : <div>Login</div>


            }

        </div>
    );
};

