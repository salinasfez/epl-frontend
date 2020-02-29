import counterReducer from './testReducer';
import users from './usersReducers';
import { combineReducers } from 'redux';





const rootReducer =  combineReducers({
	counter : counterReducer,
	users : users
})

export default rootReducer;