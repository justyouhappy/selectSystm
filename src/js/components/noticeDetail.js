import React from 'react';
import '../../scss/noticeDetail.scss';
import fetchData from '../common/fetch';
import { Modal }from 'antd';

class NoticeDetail extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: {}
		}
	}
	componentDidMount() {
		const { id } = this.props;
		fetchData('notice/noticeDetail', {data: {id: id}}).then(data => {
			this.setState({
				data
			});
		}, () => {
			Modal.error({
				title: '发生错误',
				content: '获取数据失败，请检查网络',
			});
		});
	}
	onClick() {
		const { setInformation } = this.props;
		setInformation(false);
	}
	render() {
		const { data } = this.state;
        return(
            <div className="noticeDetal">
				<div className="noticeDetal-nav">
					<div className="noticeDetal-back" onClick={this.onClick.bind(this)}>返回上一页</div>
				</div>
				<h1 className="noticeDetal-title">{data.ntopic}</h1>
				<div className="noticeDetal-content">
					<div className="noticeDetal-content-detal">{data.ncontents}</div>
				</div>
            </div>
        )
	}
}
export default NoticeDetail