import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {PostType, ProfileInitialStateType, ProfileType} from "./profileTypes";

export const slice = createSlice({
    name: 'profile',
    initialState: {
       profile: {} as ProfileType,
       posts: [] as PostType[],
    } as ProfileInitialStateType,
    reducers: {
        setProfile(state, action: PayloadAction<{value: ProfileInitialStateType}>) {
            state = action.payload.value
        },
    }

})

export const {setProfile} = slice.actions




