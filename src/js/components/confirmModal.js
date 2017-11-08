import React from 'react';
import '../../scss/confirmModel.scss';
import { Modal } from 'antd';
import { Input } from 'antd';
import { Alert } from 'antd';
import '../../scss/confirmModel.scss';

class ConfirmModal extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			firPassword: "",
			secPassword: ""	,
			isSame: "none",
			success: false,
			visible: true,
			havePassword: false	
		}
		this.firPassword = this.firPassword.bind(this)
		this.secPassword = this.secPassword.bind(this)
		this.confirm = this.confirm.bind(this)
		this.handleOk = this.handleOk.bind(this)
		this.onHidden = this.onHidden.bind(this)
	}

	handleOk() {
		if(this.state.firPassword == this.state.secPassword ) {
			var promise = new Promise((resolve, reject) => {
				this.setState({
					success: true
				});
				resolve()
			})
			
			promise.then(() => {
				var wrongInput = document.getElementById("error");
				wrongInput.className = "wrongInput";
				if(this.state.success & this.state.havePassword) {
					console.log(this.state.firPassword + ':' + this.state.secPassword)//此处是提交的信息
				}else{
					console.log("未填写密码啊")
				}	
			})
			
		}else if(this.state.firPassword !== this.state.secPassword&this.state.firPassword<=16 & this.state.firPassword >=6){
			var wrongInput = document.getElementById("error");
			wrongInput.className = "wrongInputShow"
			console.log("fail")
		}else{
			console.log("fail")
		}
	}

	firPassword(e) {
		const firPassword = e.target.value;
		const less6 = document.getElementById('lessMore')
		if(firPassword.length < 6) {		
			lessMore.className = "wrongInputShow";
			lessMore.innerHTML = " 密码的长度不得少于6位";
		}else if(firPassword.length > 16) {			
			lessMore.className = "wrongInputShow";
			lessMore.innerHTML = " 密码的长度不得超过16位"
		}else{
			lessMore.className = "wrongInput"
			this.setState({
				firPassword,
				havePassword: true
			})
		}
	}

	secPassword(e) {
		var wrongInput = document.getElementById("error");
			wrongInput.className = "wrongInput"
		const secPassword = e.target.value;
			this.setState({
			secPassword
		})
		
	}

	confirm() {
		if(this.state.firPassword == this.state.secPassword) {
			var wrongInput = document.getElementById("error");
			wrongInput.className = "wrongInput"	;
			this.setState({
			success: true
		})
		}else{
			var wrongInput = document.getElementById("error");
			wrongInput.className = "wrongInputShow"
		}
	}
	onHidden(e) {
		this.setState({
			visible: false
		})
	}

	render() {
		const { handleOk, onHidden, firPassword, secPassword, confirm } = this.props;
        return(
            <Modal
				visible={this.state.visible}
				onOk={this.handleOk}
				  onCancel={this.onHidden}
				  title="完善信息"
			>
			<div className="first">
				<label htmlFor="fir">请输入密码:
					<span  id="lessMore" className="wrongInput"></span>
				</label>
				<div className="Input">
					<Input id="fir" placeholder="在此输入新的密码" onChange={this.firPassword} type="password"/>
				</div>
			</div>
			<div className="second">
				<label htmlFor="sec">请确认密码:
					<span  id="error" className="wrongInput">  两次密码输入不一致！</span>

				</label>
				<div className="Input">
					<Input id="sec" placeholder="再次确认您的密码" onChange={this.secPassword} onPressEnter={this.confirm} type="password"/>
				</div>
			</div>
			
            </Modal>   
        );

	}
}
export default ConfirmModal;