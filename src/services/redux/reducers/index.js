import { combineReducers } from "redux";
import usersReducer from './users'
import loansReducer from './alquiler'
import isLoggedReducer from './isloguet'

export default combineReducers({
    users: usersReducer,
    alquiler: loansReducer,
    isloguet: isLoggedReducer
})