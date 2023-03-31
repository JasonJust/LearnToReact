import React, {PureComponent} from 'react';

import { connect } from 'react-redux';
import {addAction, incrementAction, changeBannersAction, changeRecommendAction} from "../store/actionCreators";

import axios from "axios";

class Home extends PureComponent {
    componentDidMount() {
        axios({
            url: 'http://123.207.32.32:8000/home/multidata'
        }).then((res) => {
            const result = res.data.data
            if (result) {
                this.props.changeBanners(result.banner.list)
                this.props.changeRecommends(result.recommend.list)
                console.log('轮播图', result.banner.list)
                console.log('推荐', result.recommend.list)
            }
        })
    }

    render () {
        return (
            <div>
                <h1>Home</h1>
                <h2>当前计数：{this.props.counter}</h2>
                <button onClick={e => this.props.increment()}>+1</button>
                <button onClick={e => this.props.addNumber(5)}>+5</button>
                <hr/>
            </div>
        );
    }
}

const mapStateToPoprs = state => ({
    counter: state.counter
})

const mapDispatchToProps = dispatch => ({
    increment () {
        dispatch(incrementAction())
    },
    addNumber (num) {
        dispatch(addAction(num))
    },
    changeBanners (banners) {
        dispatch(changeBannersAction(banners))
    },
    changeRecommends (recommends) {
        dispatch(changeRecommendAction(recommends))
    }
})

export default connect(mapStateToPoprs, mapDispatchToProps)(Home)
