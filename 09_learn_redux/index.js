import store from './store/index.js'
import { addAction, subtractionAction, incrementAction } from './store/actionCreators.js'

// 订阅
store.subscribe(() => {
    console.log(store.getState())
})
// 派发
store.dispatch(addAction(5))
store.dispatch(addAction(-5))
store.dispatch(subtractionAction(10))
store.dispatch(incrementAction())
