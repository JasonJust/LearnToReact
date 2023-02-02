import React, {PureComponent} from 'react';

import homtStyle from './style.module.css'

export default class Home extends PureComponent {
    render () {
        return (
            <div>
                Home
                <h2 className={homtStyle.title}>是Home的标题</h2>
                <ul className={homtStyle.books}>
                    <li>小说列表1</li>
                    <li>小说列表2</li>
                    <li>小说列表3</li>
                </ul>
            </div>
        );
    }
}
