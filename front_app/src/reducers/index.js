import { combineReducers } from 'redux'
import users from './users'
import repos from './repos'

// reducerを合成させる
const rootReducer = combineReducers({
    users,
    repos
})

export default rootReducer
