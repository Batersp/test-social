import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {LoginType} from "./authTypes";
import {requestStatus} from "../../common/enums/requestStatus";
import {authApi} from "../../api/authApi";
import {setAppSnackbarValue, setAppStatus, setError} from "../Application/application-reducer";
import {setProfile} from "../Profile/profile-reducer";
import {snackbarType} from "../../common/enums/snackbarType";
import {ProfileInitialStateType} from "../Profile/profileTypes";

export const login = createAsyncThunk(
    'auth/login',
    async (param: LoginType, {dispatch}) => {
        try {
            dispatch(setAppStatus({status: requestStatus.LOADING}))
            setTimeout(async () => {
                const response = await authApi.login()
                const mockUser = response.data.find(user => user.name === param.name && user.password === param.password)
                if (mockUser) {
                    dispatch(setProfile({
                        value: {
                            profile: {
                                name: mockUser.name,
                                status: mockUser.status,
                                photo: mockUser.photo
                            },
                            posts: []
                        }
                    }))
                    dispatch(changeLoggedIn({value: true}))
                    dispatch(setError({error: ''}))
                    /*Если бы нужно было при перезагрузке страницы оставаться залогиненым, то можно диспачить в юзэффекте login с параметрами из localStorage
                    localStorage.setItem('auth', 'true')
                    localStorage.setItem('userName', param.name)*/
                    dispatch(setAppSnackbarValue({type: snackbarType.SUCCESS, message: 'Вы успешно авторизовались'}))
                } else {
                    dispatch(setError({error: 'Неверный логин или пароль'}))
                    dispatch(setAppSnackbarValue({type: snackbarType.ERROR, message: 'Неверный логин или пароль'}))
                }
                dispatch(setAppStatus({status: requestStatus.SUCCEEDED}))
            }, 3000)


        } catch (e) {

        }
    }
)

export const logout = createAsyncThunk(
    'auth/logout',
    async (param, {dispatch}) => {
        try {
            dispatch(setAppStatus({status: requestStatus.LOADING}))
            setTimeout(async () => {
                dispatch(changeLoggedIn({value: false}))
                dispatch(setProfile({value: {} as ProfileInitialStateType}))
                dispatch(setAppStatus({status: requestStatus.SUCCEEDED}))
                /* очищаем localStorage при логауте
                 localStorage.removeItem('auth')
                 localStorage.removeItem('userName')*/
                dispatch(setAppSnackbarValue({type: snackbarType.SUCCESS, message: 'Вы успешно вышли'}))
            }, 3000)

        } catch (e) {

        }
    }
)


export const asyncActions = {
    login,
    logout
}


export const slice = createSlice({
    name: 'auth',
    initialState: {
        isLoggedIn: false
    },
    reducers: {
        changeLoggedIn(state, action: PayloadAction<{ value: boolean }>) {
            state.isLoggedIn = action.payload.value
        }
    }
})

export const {changeLoggedIn} = slice.actions

