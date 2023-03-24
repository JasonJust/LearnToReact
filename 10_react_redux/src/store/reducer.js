import { ADD_NUMBER, SUBTRACTION_NUMBER, INCREMENT_NUMBER, DECREMENT_NUMBER, CHANGE_BANNERS, CHANGE_RECOMMENDS } from './constants.js';

const defaultState = {
    counter: 0,
    banners: [],
    recommends: []
}

function reducer (state = defaultState, action) {
    switch (action.type) {
        case INCREMENT_NUMBER:
            return { ...state, counter: state.counter + 1 }
        case ADD_NUMBER:
            return { ...state, counter: state.counter + action.num }
        case DECREMENT_NUMBER:
            return { ...state, counter: state.counter - 1 }
        case SUBTRACTION_NUMBER:
            return { ...state, counter: state.counter - action.num }
        case CHANGE_BANNERS:
            return { ...state, banners: action.banners }
        case CHANGE_RECOMMENDS:
            return { ...state, recommends: action.recommends }
        default:
            return state
    }
}

export default reducer
