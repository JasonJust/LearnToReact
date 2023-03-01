import React, {PureComponent} from 'react';
// import classNames from 'classnames'
import { Button, DatePicker } from 'antd';
import { PoweroffOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';
import JJHomeRecommend from "@/components/home/childCpns/home-recommend";


export default class App extends PureComponent {
    render () {
        const loading = true
        const dateFormat = 'YYYY-MM-DD'

        return (
            <>
                <JJHomeRecommend/>
                <Button type='primary' loading>Loading</Button>
                <Button type='primary' size='small' loading>Loading</Button>
                <Button type='primary' icon={<PoweroffOutlined />} loading></Button>
                <br/>
                <Button type='primary' loading={loading[0]} onclick={() => this.enterLoading(0)}>Click me !</Button>
                <Button type='primary'
                        icon={<PoweroffOutlined />}
                        loading={loading[1]}
                        onclick={() => this.enterLoading(1)}>Click me !</Button>
                <Button type='primary'
                        icon={<PoweroffOutlined />}
                        loading={loading[2]}
                        onclick={() => this.enterLoading(2)}>Click me !</Button>
                <br/>
                <DatePicker defaultValue={dayjs('2015-06-06', dateFormat)} placeholder={'请选择日期'} allowClear={false} />
            </>
        )
    }
}

// 知识点：classnames
// export default class App extends PureComponent {
//     constructor(props) {
//         super(props);
//
//         this.state = {
//             isActive: true
//         }
//     }
//     render () {
//         const { isActive } = this.state
//         const isBar = true
//         const errClass = 'error'
//         const warngClass = 10
//         const arryClass = [12, 'dada', '0']
//         const arryListClass = [12, 'dada', '0', {bar: isBar}]
//
//         return (
//             <div>
//                 <h2 className={'foo bar active'}>这里是标题</h2>
//                 <h2 className={'foo bar' + (isActive ? ' active' : '')}>这里是标题</h2>
//                 <h2 className={['title', (isActive ? 'active' : '')].join(' ')}>这里是标题</h2>
//
//                 {/*classnames库添加class*/}
//                 <h2 className={'foo bar active'}>这里是标题4</h2>
//                 <h2 className={classNames('foo', 'bar')}>这里是标题5</h2>
//                 <h2 className={classNames({'active': isActive, 'bar': isBar}, 'title')}>这里是标题6</h2>
//                 <h2 className={classNames('foo', errClass, warngClass, {'active': isActive})}>这里是标题7</h2>
//                 <h2 className={classNames(arryClass)}>这里是标题8</h2>
//                 <h2 className={classNames(arryListClass)}>这里是标题9</h2>
//             </div>
//         );
//     }
// }
