import libraryReducer from './libraryReducer'
import playListReducer from './playlistReducer'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    library : libraryReducer,
    playList: playListReducer
})

export default rootReducer;