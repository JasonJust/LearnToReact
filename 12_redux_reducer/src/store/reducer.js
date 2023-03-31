import { ADD_NUMBER, SUBTRACTION_NUMBER, INCREMENT_NUMBER, DECREMENT_NUMBER, CHANGE_BANNERS, CHANGE_RECOMMENDS } from './constants.js';

// const defaultState = {
//     counter: 0,
//     banners: [],
//     recommends: []
// }

const counterDefaultState = {
    counter: 0
}

// 拆分counterReducer
function counterReducer (state = counterDefaultState, action) {
    switch (action.type) {
        case INCREMENT_NUMBER:
            return { ...state, counter: state.counter + 1 }
        case ADD_NUMBER:
            return { ...state, counter: state.counter + action.num }
        case DECREMENT_NUMBER:
            return { ...state, counter: state.counter - 1 }
        case SUBTRACTION_NUMBER:
            return { ...state, counter: state.counter - action.num }
        default:
            return state
    }
}

const homeDefaultState = {
    banners: [],
    recommends: []
}

// 拆分homeReducer
function homeReducer (state = homeDefaultState, action) {
    switch (action.type) {
        case CHANGE_BANNERS:
            return { ...state, banners: action.banners }
        case CHANGE_RECOMMENDS:
            return { ...state, recommends: action.recommends }
        default:
            return state
    }
}

function reducer (state = {}, action) {
    return {
        counterInfo: counterReducer(state.counterInfo, action),
        homeInfo: homeReducer(state.homeInfo, action)
    }
}

export default reducer
