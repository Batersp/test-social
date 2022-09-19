import {slice} from './profile-reducer'
import * as profileSelectors from './selectors'

const profileReducer = slice.reducer

export {
    profileReducer,
    profileSelectors
}