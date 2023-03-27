import { ADD_NUMBER,
        SUBTRACTION_NUMBER,
        INCREMENT_NUMBER,
        DECREMENT_NUMBER,
        CHANGE_BANNERS,
        CHANGE_RECOMMENDS,
        FETCH_HOME_MULTIDATA } from './constants.js';
import axios from "axios";
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

export const decrementAction = () => {
    return {
        type: DECREMENT_NUMBER
    }
}

export const incrementAction = () => {
    return {
        type: INCREMENT_NUMBER
    }
}

// 轮播图和推荐的action
export const changeBannersAction = (banners) => ({
    type: CHANGE_BANNERS,
    banners
})
export const changeRecommendAction = (recommends) => ({
    type: CHANGE_RECOMMENDS,
    recommends
})

// redux-thunk中定义的action函数
export const getHomeMultidataAction = (dispatch, getState) => {
    // 如果本次网络请求需要依赖原来的数据，例如页码- 可通过getState
    axios({
        url: 'http://123.207.32.32:8000/home/multidata'
    }).then((res) => {
        const result = res.data.data
        dispatch(changeBannersAction(result.banner.list))
        dispatch(changeRecommendAction(result.recommend.list))
    })
}

// redux-saga拦截的action
export const fetchHomeMulitdataAction =  {
    type: FETCH_HOME_MULTIDATA
}
