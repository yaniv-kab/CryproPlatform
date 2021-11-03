import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import { coinListReducer } from './reducers/coinReducers'

const reducer = combineReducers({
    coinsList:coinListReducer,

})

const initialState = {}

const middleWare = [thunk]

const store = createStore(
    reducer,
     initialState,
      composeWithDevTools(applyMiddleware(...middleWare)))

export default store