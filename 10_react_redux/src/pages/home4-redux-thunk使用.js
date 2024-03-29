import React, {PureComponent} from 'react';

import { connect } from 'react-redux';
import {addAction, incrementAction, getHomeMultidataAction } from "../store/actionCreators";


class Home extends PureComponent {
    componentDidMount() {
        this.props.getHomeMultidata()
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
    getHomeMultidata () {
        dispatch(getHomeMultidataAction)
    }
})

export default connect(mapStateToPoprs, mapDispatchToProps)(Home)
