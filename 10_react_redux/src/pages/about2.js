import React from 'react';

import {connect} from "../utils/connect";
import { decrementAction, subtractionAction } from "../store/actionCreators";

function About (props) {
    return(
        <div>
            <h1>About</h1>
            <h2>当前计数：{props.counter}</h2>
            <button onClick={e => props.decrement()}>-1</button>
            <button onClick={e => props.subtraction(5)}>-5</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        counter: state.counter
    }
}

const mapDispatchToProps = dispatch => {
    return {
        decrement: function  () {
            dispatch(decrementAction())
        },
        subtraction: function  (num) {
            dispatch(subtractionAction(num))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(About)
