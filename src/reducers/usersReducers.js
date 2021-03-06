import {FETCH_USERS} from '../actions/usersActions';

let initialState = [];

const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_USERS:
            return [...state, action.payload]
        default:
            return state
    }
}

export default usersReducer;