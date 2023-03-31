import React, {PureComponent} from 'react';

import { connect } from 'react-redux';
import {addAction, incrementAction, fetchHomeMulitdataAction } from "../store/actionCreators";


class Home extends PureComponent {
    componentDidMount() {
        this.props.fetchHomeMulitdata()
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
    counter: state.counterInfo.counter
})

const mapDispatchToProps = dispatch => ({
    increment () {
        dispatch(incrementAction())
    },
    addNumber (num) {
        dispatch(addAction(num))
    },
    fetchHomeMulitdata () {
        dispatch(fetchHomeMulitdataAction)
    }
})

export default connect(mapStateToPoprs, mapDispatchToProps)(Home)
