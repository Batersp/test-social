import {slice} from './application-reducer'
import * as appSelectors from './selectors'

const appReducer = slice.reducer


export {
    appReducer,
    appSelectors
}