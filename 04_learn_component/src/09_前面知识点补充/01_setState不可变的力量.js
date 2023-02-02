import React, { PureComponent } from 'react';

export default class App extends PureComponent {
    constructor(props) {
        super(props);

        // 数组或对象都是引用类型
        this.state = {
            friends: [
                {
                    id: 1,
                    name: 'Jason',
                    sex: '女',
                    age: 18,
                    height: '165',
                    desc: '*你好鸭，很高兴认识你*'
                },
                {
                    id: 2,
                    name: '张杰',
                    sex: '男',
                    age: 20,
                    height: '188',
                    desc: '*你好，我是张杰*'
                },
                {
                    id: 3,
                    name: '杨洋',
                    sex: '男',
                    age: 21,
                    height: '188',
                    desc: "*杨了个洋，I'm Yangyang*"
                },
                {
                    id: 4,
                    name: '胡一天',
                    sex: '男',
                    age: 20,
                    height: '190',
                    desc: '*胡一天是大帅比*'
                }
            ]
        }
    }
    render () {
        const { friends } = this.state
        return (
            <div>
                <h2>好友列表</h2>
                <ul>
                    {
                        friends.map((item) => {
                            return <li key={item.id}>
                                        {item.name + '(' + item.sex + ')/' + '好友宣言：' + item.desc}
                                        <button onClick={e => this.increment(item)}>增加年龄 +1</button>
                                        {'年龄：' + item.age}
                                    </li>
                        })
                    }
                </ul>
                <button onClick={e => this.insertData()}>添加数据</button>
            </div>
        );
    }

    insertData () {
        const obj = {
            id: this.state.friends[this.state.friends.length - 1]?.id + 1,
            name: '胡一天' + (this.state.friends[this.state.friends.length - 1]?.id - 2),
            sex: '男',
            age: 20,
            height: '190',
            desc: '胡一天是大帅比'
        }
        // 1、开发环境不要这样做
        // this.state.friends.push(obj)
        // this.setState({
        //     friends: this.state.friends
        // })

        // 2、推荐做法
        const newFriends = [...this.state.friends]
        newFriends.push(obj)
        this.setState({
            friends: newFriends
        })
        // this.setState({
        //     friends: [...this.state.friends, obj]
        // })
    }

    increment (data) {
        const newFriends = this.state.friends.map((i) => {
            if (i.id === data.id) {
                i.age = i.age + 1
            }
            return i
        })
        this.setState({
            friends: newFriends
        })
    }
}
