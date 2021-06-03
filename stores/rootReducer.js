import { combineReducers } from 'redux'
import authReducer from './auth/reducer'
import fetchListReducer from './fetchList/reducer'

const rootReducer = combineReducers({
    auth : authReducer,
    fetchList : fetchListReducer
})

export default rootReducer