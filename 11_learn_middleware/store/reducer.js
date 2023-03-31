import { ADD_NUMBER, SUBTRACTION_NUMBER, INCREMENT_NUMBER } from './constants.js';

const defaultState = {
    counter: 0
}

function reducer (state = defaultState, action) {
    switch (action.type) {
        case ADD_NUMBER:
            return { ...state, counter: state.counter + action.num }
        case SUBTRACTION_NUMBER:
            return { ...state, counter: state.counter - action.num }
        case INCREMENT_NUMBER:
            return { ...state, counter: state.counter + 1 }
        default:
            return state
    }
}

export default reducer
