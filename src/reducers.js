import { 
    CHANGE_SEARCH_FIELD, 
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from './constants.js'

const initialStateSearch = {
    searchField: ''
}

//Here we create the reducer which will be used in other places and that is why we export it.
export const searchRobots = (state=initialStateSearch, action={}) => {
//MY: Comment for the reducer above - what it they do is - they get their input of a state and an action, and if they care about the action that they receive (in our case if we receive any action
//related to searching robots, we are going to do something, we are going to act upon the state)
    switch(action.type) {
        //here we return new state with object.assign
        case CHANGE_SEARCH_FIELD:
            return Object.assign({}, state, {searchField: action.payload})
        default:
            return state;
    }
}

const initialStateRobots = {
    isPending: false,
    robots: [],
    error: ''
}

export const requestRobots = (state=initialStateRobots, action={}) => {
    switch(action.type) {
        case REQUEST_ROBOTS_PENDING:
            return Object.assign({}, state, { isPending: true })
        case REQUEST_ROBOTS_SUCCESS:
            return Object.assign({}, state, { robots: action.payload, isPending: false })
        case REQUEST_ROBOTS_FAILED:
            return Object.assign({}, state, { error: action.payload, isPending: false})
        default:
            return state;
    }
}