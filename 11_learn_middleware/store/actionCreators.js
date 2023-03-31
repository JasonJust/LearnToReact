import { ADD_NUMBER, SUBTRACTION_NUMBER, INCREMENT_NUMBER} from './constants.js';
// export function addAction (num) {
//     return {
//         type: ADD_NUMBER,
//         num
//     }
// }

export const addAction = (num) => {
    return {
        type: ADD_NUMBER,
        num
    }
}

export const subtractionAction = num => ({
    type: SUBTRACTION_NUMBER,
    num
})

export const incrementAction = () => {
    return {
        type: INCREMENT_NUMBER
    }
}
