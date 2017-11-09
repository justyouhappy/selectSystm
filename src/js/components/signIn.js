import React from 'react';
import '../../scss/signIn.scss';
import { 
	Button,
	Input,
	Alert
 } from 'antd';

class SignIn extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			staus: "0",
			userName: '',
			tel : '',
			password : '',
			Errorshow: false,
			errorMessage: ''
		}
		this.onChange = this.onChange.bind(this);
		this.userChange = this.userChange.bind(this);
		this.telChange = this.telChange.bind(this);
		this.passwordChange = this.passwordChange.bind(this);
		this.signIn = this.signIn.bind(this);
	}
	onChange(e) {
        var staus = e.target.dataset.staus;
        this.setState({
            staus,
            userName: '',
			tel : '',
			password : '',
			Errorshow: false
        });
	}
	userChange(e) {
		const userName = e.target.value;
		this.setState({
			userName
		})
	}
	telChange(e) {
		const tel = e.target.value;
		this.setState({
			tel
		})
	}
	passwordChange(e) {
		const password = e.target.value;
		this.setState({
            password
		})
	}
	signIn() {
		this.props.onShow();
		let errorMessage = '';
		const { staus, userName, tel, password } = this.state;
		if(userName == '' && staus == '0') { 
			errorMessage = '请您输入学号/工号';
		} else if(userName == '' && staus == '1') {
			errorMessage = '请您输入用户名';
		} else if(tel == '' && staus == 0) {
			errorMessage = '请您输入电话号';
		} else if(this.state.password == '') {
			errorMessage = '请您输入密码';
		}
		if(errorMessage) {
			this.setState({
				errorMessage,
				Errorshow: true
			});
		} else {
			let message = {
				staus,
				userName,
				tel,
				password
			}
			console.log(message);
		}

	}
	render() {
		const { staus, userName, tel, password, errorMessage, Errorshow } = this.state;
        return(
            <div className="sign-in-body">
                <div className="sign-in-title" onClick={this.onChange}>
                    <div className={`teacher${staus == 0 ? ' active': ''}`} data-staus="0">老师(学生)登录</div> 
                    <div className={`admin${staus == 1 ? ' active': ''}`} data-staus="1">管理员登录</div> 
                </div>
                <div className="sign-in-body-under">
                    <div className="btn-box">
					    {Errorshow && <Alert message={errorMessage} type="error" showIcon />}
                        <Input size="large" onChange={this.userChange} placeholder={staus === "0" ? "学号/老师办公电话": '管理员账号'} value={userName} className="signinput"/>
                        {staus === "0" && <Input size="large" placeholder="电话号码" value={tel} onChange={this.telChange} className="signinput" />}
                        <Input size="large" placeholder="密码" value={password} onChange={this.passwordChange} type="password" className="signinput"/>
                        {staus === "0" && <div className="sign-in-tips">注：首次登陆密码为123456</div>}
                        <Button type="primary" size={this.props.size} className="sign-btn" onClick={this.signIn}>登录</Button>
                    </div>
                </div>
            </div>
        )

	}
}
export default SignIn