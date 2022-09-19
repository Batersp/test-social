import {AppRootStateType} from "../../utils/types";

export const getIsLoggedIn = (state: AppRootStateType): boolean => state.auth.isLoggedIn