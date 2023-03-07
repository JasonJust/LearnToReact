import React, {PureComponent} from 'react';
import { Input, Button } from 'antd'
import dayjs from 'dayjs';

export default class CommentInput extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            content: ''
        }
    }
    render () {
        const { TextArea } = Input
        return (
            <>
                {/*<Input.TextArea></Input.TextArea>*/}
                <TextArea rows={4} cols={50} value={this.state.content} onChange={e => this.handleChange(e)}></TextArea>
                <Button type='primary' onClick={e => this.addComment()}>添加评论</Button>
            </>
        );
    }

    addComment () {
        if (this.state.content) {
            const commentInfo = {
                id: dayjs(new Date()).unix(),
                avatar: 'https://gimg3.baidu.com/yule/src=https%3A%2F%2Femoji.cdn.bcebos.com%2Fyunque%2Fzhangj.png&refer=http%3A%2F%2Fwww.baidu.com&app=2019&size=w931&n=0&g=0n&er=404&q=75&fmt=auto&maxorilen2heic=2000000?sec=1677862800&t=fad46d7fbaef21a141295ac92e9e81c0',
                nickName: dayjs(new Date()).unix(),
                // nickName: Date.now(),
                time: dayjs(),
                content: this.state.content
            }
            this.props.submitComment(commentInfo)
            this.setState({
                content: ''
            })
        } else {
            alert('请输入评论')
        }
    }

    handleChange (event) {
        this.setState({
            content: event.target.value
        })
    }
}
