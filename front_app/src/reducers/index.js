import { combineReducers } from 'redux'
import users from './users'
import repos from './repos'

const rootReducer = combineReducers({
    users,
    repos
})

export default rootReducer
