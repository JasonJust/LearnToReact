import React, {PureComponent} from 'react';

import prifileStyle from './style.module.css'

export default class Profile extends PureComponent {
    render () {
        return (
            <div>
                Profile
                <h2 className={prifileStyle.title}>是profile的标题</h2>
                <ul className={prifileStyle.books}>
                    <li>小说列表1</li>
                    <li>小说列表2</li>
                    <li>小说列表3</li>
                </ul>
            </div>
        );
    }
}
