import {AppRootStateType} from "../../utils/types";

export const getUserName = (state: AppRootStateType): string => state.profile.profile.name