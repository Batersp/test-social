import {slice} from './auth-reducer'
import * as authSelectors from './selectors'
import {asyncActions} from './auth-reducer'

const authReducer = slice.reducer
const {login, logout} = asyncActions

export {
    authReducer,
    authSelectors,
    login,
    logout
}