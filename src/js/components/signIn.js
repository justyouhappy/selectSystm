import React from 'react';
import '../../scss/signIn.scss';
import { 
	Tabs,
	Button,
	Input
 } from 'antd';


const TabPane = Tabs.TabPane;
class SignIn extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			staus: "0",
			userName: '',
			tel : '',
			password : ''
		}
		this.onChange = this.onChange.bind(this);
		this.userChange = this.userChange.bind(this);
		this.telChange = this.telChange.bind(this);
		this.passwordChange = this.passwordChange.bind(this);
		this.getMessage = this.getMessage.bind(this);
	}
	onChange(e) {
		this.setState({
			staus: e
		})
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
	getMessage() {
		console.log(this.state);
	}
	render() {
		const { staus, userName, tel, password } = this.state;
        return(
            <div className="sign-in-body">
				<div className="sign-in-body-all">
					<div className="sign-in-body-top card-container">
                        <Tabs type="card" onChange={this.onChange} activeKey={this.state.staus}>
							<TabPane tab="学生/教师" key="0"></TabPane>
							<TabPane tab="管理员" key="1"></TabPane>
						</Tabs>
					</div>
					<div className="sign-in-body-under">
						<div className="sign-in-body-middle">
							<div className="example-input">
									<Input size="large" onChange={this.userChange} placeholder="学号/工号" value={userName} className="signinput"/>
									{staus === "0" && <Input size="large" placeholder="电话号码" value={tel} onChange={this.telChange} className="signinput" />}
									<Input size="large" placeholder="密码" value={password} onChange={this.passwordChange} type="password" className="signinput"/>
									<div className="sign-in-body-bottom">
										<span className="sign-in-tips">注：首次登陆密码为123456</span>
									</div>
							</div>
						</div>
						<Button type="primary" size={this.props.size} className="signbtn" onClick={this.getMessage}>登录</Button>
					</div>
				</div>
            </div>
        )

	}
}
export default SignIn