import React, {PureComponent} from 'react';

import Home from '../home'
import Profile from '../profile'

export default class App extends PureComponent {
    render () {
        return (
            <div id='app'>
                app
                <h2>我是app标题</h2>
                <Home/>
                <Profile/>
            </div>
        );
    }
}
