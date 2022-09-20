import {AppRootStateType} from "../../../utils/types";
import {ProfileType} from "./profileTypes";

export const getProfile = (state: AppRootStateType): ProfileType => state.profile.profile