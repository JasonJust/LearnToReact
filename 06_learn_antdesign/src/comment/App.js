import React, {PureComponent} from 'react';
import CommentItem from "./components/CommentItem";
import CommentInput from "./components/CommentInput";

export default class App extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            commentList: [{id: 1, content: '这是一条默认评论'}]
        }
    }

    render () {
        return (
            <div style={{width: '400px', padding: '16px'}}>
                {
                    this.state.commentList.map((item) => {
                        return <CommentItem info={item} key={item.id} removeItem={e => this.removeItem(item.id)}/>
                    })
                }
                {/*<CommentInput submitComment={ this.submitComment.bind(this)}></CommentInput>*/}
                <CommentInput submitComment={ info => this.submitComment(info)}></CommentInput>
            </div>
        );
    }

    removeItem (id) {
        const list = this.state.commentList.filter((i) => {
            return i.id !== id
        })
        this.setState({
            commentList: list
        })
    }

    submitComment (info) {
        this.setState({
            commentList: [...this.state.commentList, info]
        })
    }
}
