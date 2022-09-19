import {combineReducers, configureStore} from "@reduxjs/toolkit";
import thunkMiddleware from 'redux-thunk'
import {authReducer} from "../features/Auth";
import {appReducer} from "../features/Application";

export const rootReducer = combineReducers({
    auth: authReducer,
    app: appReducer

})


export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunkMiddleware)
})