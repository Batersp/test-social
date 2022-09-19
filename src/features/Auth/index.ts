import {slice} from './auth-reducer'

const authReducer = slice.reducer

const authActions = {
    ...slice.actions
}

export {
    authReducer,
    authActions
}