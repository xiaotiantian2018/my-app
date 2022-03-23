import { combineReducers } from 'redux'
import userInfoReducer from './userInfoReducer'
import counterReducer from './counterReducer'

const rootReducers = combineReducers({
    userInfoReducer,
    counterReducer
})

export default rootReducers