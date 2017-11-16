import React from 'react';
import '../../scss/signIn.scss';
import { 
	Button,
	Input,
	Alert,
	Modal
 } from 'antd';
 import fetchData from '../common/fetch'; 

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
		} else if(userName.length != 10 && userName.length != 8 && userName.length != 5) {
			errorMessage = '用户名长度错误';
		} else if(tel.length != 11 && tel) {
			errorMessage = '手机号格式错误'
		} else if(password.length < 6) {
			errorMessage = '密码长度错误';
		}
		if(errorMessage) {
			this.setState({
				errorMessage,
				Errorshow: true
			});
		} else {
			this.setState({
				errorMessage: '',
				Errorshow: false
			});
			let message = {
				id_tel: userName,
				password,
				mb: tel
			}
			if(staus == '0'){
				fetchData('login/teacher_student', {method: 'post', data: message}).then(data => {
					if(data.error) {
						Modal.error({
							title: '发生错误',
							content: data.error,
						});
					} else {
						window.signInData = data;
						if(data.first !== 'false') {
							this.props.onShow();						
						} else {
							//跳转到登录成功页
							this.props.router.push('/success');
						}
					}
				}, () => {
					Modal.error({
						title: '发生错误',
						content: '获取数据失败，请检查网络',
					});
				});
			} else {
				//管理员登录
				fetchData('login/admin', {method: 'post', data: {username: userName, password}}).then(data => {
					if(data.error) {
						Modal.error({
							title: '发生错误',
							content: data.error,
						});
					} else {
						window.signInData = data;
						this.props.router.push('/success');
					}
				}, () => {
					Modal.error({
						title: '发生错误',
						content: '获取数据失败，请检查网络',
					});
				});
			}
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