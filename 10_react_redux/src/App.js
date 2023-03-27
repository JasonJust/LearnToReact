import React, {PureComponent} from 'react';
import About from './pages/about4';
import Home from './pages/home5-redux-saga使用';

export default class App extends PureComponent {
    render () {
        return (
            <div>
                <Home/>
                <About/>
            </div>
        );
    }
}
