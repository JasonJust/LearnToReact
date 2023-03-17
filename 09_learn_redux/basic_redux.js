// 1.导入redux(不能通过ES6的方式)
// import/export 13.2.0才开始支持
// commonjs一种实现 -> node.js
const redux = require('redux')

const initialState = {
    price: 0
}

// reducer
function reducer (state = initialState, action) {
    switch (action.type) {
        case 'increment':
            return {
                ...state,
                price: state.price + 1
            }
            break
        case 'decrement':
            return {
                ...state,
                price: state.price - 1
            }
            break
        case 'add_price':
            return {
                ...state,
                price: state.price + action.price
            }
            break
        case 'subtraction_price':
            return {
                ...state,
                price: state.price - action.price
            }
            break
        default:
            return state

    }
}

// store（创建的时候需要传入一个reducer）
const store = redux.createStore(reducer)

// 订阅store的修改
store.subscribe(() => {
    console.log('state发生了改变', store.getState().price)
})

// actions
const action1 = {type: 'increment'}
const action2 = {type: 'decrement'}
const action3 = {type: 'add_price', price: 5}
const action4 = {type: 'subtraction_price', price: 10}

// 派发action
store.dispatch(action1)
store.dispatch(action2)
store.dispatch(action3)
store.dispatch(action4)
