import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import fetchdata from '../common/fetch';
import TopImg from '../containers/topImg';
import MyFile from '../components/myFile';
import {
    Button,
    Tabs
} from 'antd';
import '../../scss/success.scss';
import Upload from '../components/upload';
import MakeAnnouncement from "../components/makeAnnouncement"
import QueryMessage from '../components/queryMessage';
import UploadPassword from '../components/uploadPassword';
const TabPane = Tabs.TabPane;
// fetchdata(//地址字符串).then(data => {
//    data 获取的数据
// });
class Success extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			information: false
		}
		this.onChange = this.onChange.bind(this);
	}
	componentWillMount() {
		if(!window.signInData) {
			this.props.router.push('/');
		}
	}
	onChange(e) {
		if(e == '7') {
			window.signInData = '';
			this.props.router.push('/');
		}
	}
	render() {
		return (
            <div className="bodyer">  
				<TopImg num={window.num}/>
                <Tabs type="card" onChange={this.onChange}>
                    {window.signInData && window.signInData.status === "0" && <TabPane tab="我的档案" key="1">
						<div className="success-content">
							{window.signInData && <MyFile data={window.signInData.student}/>}
						</div>
					</TabPane>}
					<TabPane tab="档案查询" key="5">
						<div className="success-content">
							<QueryMessage />
						</div>
					</TabPane>
					{window.signInData && window.signInData.status === "2" && <TabPane tab="档案上传" key="3">
						<div className="success-content">
							<Upload />
						</div>
					</TabPane>}
					{window.signInData && window.signInData.status === "2" && <TabPane tab="发布公告" key="8">
						<div className="success-content">
						    <MakeAnnouncement/>
						</div>
					</TabPane>}
                    <TabPane tab="修改密码" key="6">
						<div className="success-content">
						 	<UploadPassword />
						</div>						
					</TabPane>
					<TabPane tab="退出" key="7">						
					</TabPane>
                </Tabs>
            </div>
		);
	}
}
Success = connect((state) => state.success)(Success);
export default Success