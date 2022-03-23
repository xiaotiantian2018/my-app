import { createStore } from 'redux'
import rootReducers from './reducers'

let store = createStore(rootReducers)
window.getState = store.getState()
export default store
