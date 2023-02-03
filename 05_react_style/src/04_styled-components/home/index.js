import React, {PureComponent} from 'react';

import { HomeWrapper, TitleWrapper } from "./style";

export default class Home extends PureComponent {
    render () {
        return (
            <HomeWrapper>
                Home
                {/*em相对于包含块儿设置大小*/}
                <TitleWrapper>是Home的标题</TitleWrapper>
                <ul className='banner'>
                    <li className='active'>小说列表1</li>
                    <li>小说列表2</li>
                    <li>小说列表3</li>
                </ul>
            </HomeWrapper>
        );
    }
}
