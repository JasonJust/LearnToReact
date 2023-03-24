// import React from "react";
/**
 * 类组件
 */
// export default class App extends Component {
//     constructor() {
//         super();
//
//         this.state = {
//             message: '你好哇啊'
//         }
//     }
//     render () {
//         return (
//             <div>
//                 <span>我是App组件</span>
//                 {/*VSCode中 alt + shift + f ：对代码进行格式化*/}
//                 <div>{this.state.message}</div>
//             </div>
//         )
//     }
// }

/**
 * 函数式组件
 * 1、没有this对象
 * 2、弊端：没有内部状态（hooks)
 */
export default function App () {
    return (
        <div>
            <span>这里是App组件</span>
            <h2>你好</h2>
        </div>
    )
}
