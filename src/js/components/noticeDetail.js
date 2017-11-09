import React from 'react';
import '../../scss/noticeDetail.scss';

const data = {
        "title": "箭头函数和普通函数的区别",
		"content": "可以看到箭头函数在定义之后,this 就不会发生改变了，无论用什么样的方式调用它，this 都不会改变原因：箭头函数不会自动绑定局部变量，如this，arguments，super(ES6)，new.target(ES6)等所以箭头函数没有它自己的this值，箭头函数内的this值继承自外围作用域。在箭头函数中调用 this 时，仅仅是简单的沿着作用域链向上寻找，找到最近的一个 this 拿来使用[javascript] view plain copy。就不会发生改变了，无论用什么样的方式调用它，this 都不会改变原因：箭头函数不会自动绑定局部变量，如this，arguments，super(ES6)，new.target(ES6)等所以箭头函数没有。举例来说，React 不使用 HTML，而使用 JSX 。它打算抛弃 DOM，要求开发者不要使用任何 DOM 方法。它甚至还抛弃了 SQL ，自己发明了一套查询语言 GraphQL 。当然，这些你都可以不用，React 照样运行，但是就发挥不出它的最大威力。本文介绍 React 体系的一个重要部分：路由库React-Router。它是官方维护的，事实上也是唯一可选的路由库。它通过管理 URL，实现组件的切换和状态的变化，开发复杂的应用几乎肯定会用到。"
	}
class NoticeDetail extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		}
	}
	onClick() {
		const { setInformation } = this.props;
		setInformation(false);
	}
	render() {
		const { setInformation } = this.props;
        return(
            <div className="noticeDetal">
				<h1 className="noticeDetal-title">{data.title}</h1>
				<div className="noticeDetal-content">
					<div className="noticeDetal-content-detal">{data.content}</div>
				</div>
				<div className="noticeDetal-back" onClick={this.onClick.bind(this)}>返回上一页</div>
            </div>
        )
	}
}
export default NoticeDetail