import store from './store/index.js'
import { addAction, subtractionAction } from './store/actionCreators.js'

// 订阅
store.subscribe(() => {
    console.log(store.getState())
})
// 派发
// 1、基本做法
// console.log('dispatch前=======', addAction(10))
// store.dispatch(addAction(10))
// console.log('dispatch后=======', store.getState())
//
// console.log('dispatch前=======', addAction(-5))
// store.dispatch(addAction(-5))
// console.log('dispatch后=======', store.getState())

// 2、封装一个函数
// function dispatchAndLogging (action) {
//     console.log('dispatch前=======', action)
//     store.dispatch(action)
//     console.log('dispatch后=======', store.getState())
// }
//
// dispatchAndLogging(addAction(10))
// dispatchAndLogging(addAction(-5))

// 3、在函数的基础之上进行优化，修改原有的dispatch
// hack技术：monkeyingpatch

// const next = store.dispatch
// function dispatchAndLogging (action) {
//     console.log('dispatch前=======', action)
//     next(action)
//     console.log('dispatch后=======', store.getState())
// }
//
// store.dispatch = dispatchAndLogging
//
// store.dispatch(addAction(10))
// store.dispatch(addAction(-5))

// 4、将之前的操作进行封装 徐凤昂
function patchLogging (store) {
    const next = store.dispatch
    function dispatchAndLogging (action) {
        console.log('dispatch前=======', action)
        next(action)
        console.log('dispatch后=======', store.getState())
    }

    // store.dispatch = dispatchAndLogging
    return dispatchAndLogging
}
patchLogging(store)
// store.dispatch(addAction(10))
// store.dispatch(addAction(-5))

// 封装patchThunk的功能
function patchThunk (store) {
    const next = store.dispatch

    function dispatchAndThunk (action) {
        if (typeof action === 'function') {
            action(store.dispatch, store.getState)
        } else {
            next(action)
        }
    }

    // store.dispatch = dispatchAndThunk
    return dispatchAndThunk
}

patchThunk(store)
// store.dispatch(addAction(10))
// store.dispatch(addAction(-5))

// function foo (dispatch, getState) {
//     // console.log(dispatch, getState)
//     dispatch(subtractionAction(10))
// }
//
// store.dispatch(foo)

// 5、封装applyMiddleware
function applyMiddleware (...middleware) {
    // const newMiddleware = [...middleware]
    middleware.forEach(middleware => {
        store.dispatch = middleware(store)
    })
}

applyMiddleware(patchLogging, patchThunk)
