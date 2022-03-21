import { createStore } from 'redux'
import myReducer from './reducer.js'

const store = createStore(myReducer)

export default store
