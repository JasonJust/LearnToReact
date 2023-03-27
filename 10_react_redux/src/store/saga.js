import { takeEvery, takeLatest, put, all } from 'redux-saga/effects'
import { FETCH_HOME_MULTIDATA, ADD_NUMBER } from "./constants";
import { changeBannersAction, changeRecommendAction } from "./actionCreators";
import axios from "axios";

function*  fetchHomeMultidata (action) {
    const res = yield axios.get('http://123.207.32.32:8000/home/multidata')
    console.log(res)
    const banners = res.data.data.banner.list
    const recommends = res.data.data.recommend.list
    // yield put(changeBannersAction(banners))
    // yield put(changeRecommendAction(recommends))
    yield all([
        yield put(changeBannersAction(banners)),
        yield put(changeRecommendAction(recommends))
    ])
}

function* mySaga () {
    // takeEvery 和 takeLatest的区别：
    // takeLatest：一次只能监听一个对应的action
    // takeEvery：每一个都会被执行
    // yield takeEvery(FETCH_HOME_MULTIDATA, fetchHomeMultidata)
    yield takeLatest(FETCH_HOME_MULTIDATA, fetchHomeMultidata)
    yield all([
        yield takeLatest(FETCH_HOME_MULTIDATA, fetchHomeMultidata),
        yield takeLatest(ADD_NUMBER, fetchHomeMultidata)
    ])
}

export default mySaga
