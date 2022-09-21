import {slice} from './news-reducer'
import * as newsSelectors from './selectors'

const newsReducer = slice.reducer

export {
    newsReducer,
    newsSelectors
}