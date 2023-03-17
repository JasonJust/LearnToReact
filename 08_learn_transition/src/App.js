import React, {PureComponent} from 'react';
import SwitchTransitionDemo from './transition/SwitchTransitionDemo'
import TransitionGroupDemo from './transition/TransitionGroupDemo'
import CSSTransitionDemo from "./transition/CSSTransitionDemo";

export default class App extends PureComponent {
    render () {
        return (
            <div style={{'textAlign': 'center'}}>
                <CSSTransitionDemo></CSSTransitionDemo>
                <SwitchTransitionDemo></SwitchTransitionDemo>
                <TransitionGroupDemo></TransitionGroupDemo>
            </div>
        );
    }
}
