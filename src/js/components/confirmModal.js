import React from 'react';
import '../../scss/confirmModel.scss';
import { Modal, Input, Alert, Button } from 'antd';
import '../../scss/confirmModel.scss';

class ConfirmModal extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			firPassword: "",
			secPassword: ""	,
			errorMessage: '',
			Errorshow: false,
			message: ''
		}
		this.firPassword = this.firPassword.bind(this)
		this.secPassword = this.secPassword.bind(this)
		this.validation = this.validation.bind(this)
		this.handleOk = this.handleOk.bind(this)
	}

	handleOk() {
		const { Errorshow, firPassword } = this.state;
		if(Errorshow || firPassword == '') {
			return;
		}
		console.log('验证通过');
	}

	firPassword(e) {
		const firPassword = e.target.value
		this.setState({
			firPassword
		}, this.validation);
	}

	secPassword(e) {
		const secPassword = e.target.value;	
		this.setState({
			secPassword
		}, this.validation);
	}

	validation() {
		const { firPassword, secPassword } = this.state;
		if(firPassword == secPassword && firPassword) {
			this.setState({
				Errorshow: false
			})
		} else {
			this.setState({
				Errorshow: true,
				message: firPassword ? '两次密码不一致' : '密码不能为空'
			})
		}
	}

	render() {
		const { onHidden} = this.props;
		const { firPassword, secPassword, Errorshow, message } = this.state;
        return(
            <Modal
				visible
				onCancel={onHidden}
				title="完善信息"
				width="500px"
				footer={[
					<Button key="back" size="large" onClick={onHidden}>取消</Button>,
					<Button key="submit" type="primary" size="large" disabled={Errorshow || firPassword == ''}  onClick={this.handleOk}>
					确认
					</Button>,
				]}
			>
				{Errorshow && <Alert message={message} className="alert" type="error" showIcon />}
				<div className="input-box">
					<Input size="large" className="input" addonBefore="请输入密码:" value={firPassword} placeholder="在此输入新的密码" onChange={this.firPassword} type="password"/>
					<Input size="large" className="input" addonBefore="请确认密码:" value={secPassword} placeholder="再次确认您的密码" onChange={this.secPassword} type="password"/>
				</div>
            </Modal>   
        );

	}
}
export default ConfirmModal;