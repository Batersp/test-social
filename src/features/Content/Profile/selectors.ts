import {AppRootStateType} from "../../../utils/types";
import {PostType, ProfileType} from "./profileTypes";

export const getProfile = (state: AppRootStateType): ProfileType => state.profile.profile
export const getPosts = (state: AppRootStateType): PostType[] => state.profile.posts