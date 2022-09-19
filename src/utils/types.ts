import {rootReducer} from "../app/store";
import {ThunkDispatch} from "redux-thunk";
import {AppActionsType} from "./actionTypes";

export type RootReducerType = typeof rootReducer

// автоматическая типизация всего стейта
export type AppRootStateType = ReturnType<RootReducerType>

export type AppDispatch = ThunkDispatch<AppRootStateType, unknown, AppActionsType>