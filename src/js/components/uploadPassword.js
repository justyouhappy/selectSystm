import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../redux/action/mainAction';
import TopImg from '../containers/topImg';
import Content from '../containers/content';
import '../../scss/uploadPassword.scss';
import {
	Input , Modal , Button , Alert
} from 'antd';
class UploadPassword extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			oldPassword : "",
			newPassword : "",
			confirmPassword : "",
			ErrorShow : false,
			message : ""
		}
		this.oldPassword = this.oldPassword.bind(this)
		this.newPassword = this.newPassword.bind(this)
		this.confirmPassword = this.confirmPassword.bind(this)
		this.validation = this.validation.bind(this)
		this.handleOk = this.handleOk.bind(this)
		this.onHidden = this.onHidden.bind(this)
	}

	handleOk() {
		console.log("success")
	}

	oldPassword(e) {
		const oldPassword = e.target.value;
		this.setState({
			oldPassword
		})
	}

	newPassword(e) {
		const newPassword = e.target.value;
		this.setState({
			newPassword
		}, this.validation);
	}

	confirmPassword(e) {
		const confirmPassword = e.target.value;	
		this.setState({
			confirmPassword
		}, this.validation);
	}

	validation() {
		const { newPassword, confirmPassword, oldPassword } = this.state;
		if(newPassword == confirmPassword && newPassword && newPassword !== oldPassword) {
			this.setState({
				ErrorShow: false
			})
		} else if(newPassword == oldPassword) {
			this.setState({
				ErrorShow: true,
				message: '新旧密码不能相同'
			})
		} else {
			this.setState({
				ErrorShow: true,
				message: newPassword ? '两次密码输入不一致' : '密码不能为空'
			})
		}
	}

	render() { 
		const { oldPassword , newPassword , confirmPassword , message, ErrorShow ,handleOk} = this.state
		return (
			<div className="rootBox">
				<div className="title">
					修改密码
				</div>
				<div className="input-box">
					{<Input type="password" size="large" className="input" addonBefore="请输入您的密码:" value={oldPassword} placeholder="在此输入密码" onChange={this.oldPassword}></Input>	}
					{ErrorShow && <Alert message={message} className="alert" type="error" showIcon />}
					<Input type="password" size="large" className="input" addonBefore="请输入新的密码:" value={newPassword} placeholder="在此输入新的密码" onChange={this.newPassword}></Input>	
					<Input type="password" size="large" className="input" addonBefore="请确认新的密码:" value={confirmPassword} placeholder="在此确认新的密码" onChange={this.confirmPassword}></Input>			
				</div>
					<Button key="submit" type="primary" size="large" className="btn" onClick={handleOk} disabled={ErrorShow || newPassword == '' || oldPassword == ''}>提交密码</Button>
			</div>
		);
	}
}

export default UploadPassword;