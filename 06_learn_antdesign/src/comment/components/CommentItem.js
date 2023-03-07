import React, {PureComponent} from 'react';
// import { Comment } from '@ant-design/compatible'
import { Image, Tooltip, Button } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'
import dayjs from 'dayjs';
import moment from 'moment'

export default class CommentItem extends PureComponent {
    render () {
        const { nickName, avatar, time, content, id } = this.props.info
        const lastTime = dayjs(time).format('YYYY-MM-DD HH:mm:ss')
        return (
            <div style={{display: 'flex'}}>
                <div>
                    <Image width={200} src={avatar}></Image>
                </div>
                <div>
                    <span>{nickName + '     '}</span><span><Tooltip title={lastTime}>{moment().fromNow()}</Tooltip></span>
                    <p>{content}</p>
                    <p><Button type="text" danger onClick={e => this.removeItem(id)}><DeleteOutlined />删除</Button></p>
                </div>
                {/*<Comment author={<a>{nickName}</a>}*/}
                {/*         avatar={<Avatar src={avatar} alt={nickName}/>}*/}
                {/*         content={<p>{content}</p>} datetime={<span>{time.fromNow()}</span>}></Comment>*/}

            </div>
        );
    }

    removeItem (id) {
        this.props.removeItem(id)
    }
}
