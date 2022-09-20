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
            state.profile = action.payload.value.profile
        },
        addPost(state, action: PayloadAction<{value: PostType}>) {
            state.posts.unshift(action.payload.value)
        },
        removePost(state, action: PayloadAction<{id: string}>) {
            const index = state.posts.findIndex(el => el.id === action.payload.id)
            state.posts.splice(index, 1)
        },
    }

})

export const {setProfile, addPost, removePost} = slice.actions




