import React from 'react';
import {
    Button,
    Input,
    Modal
} from 'antd';
import '../../scss/queryMessage.scss'

class QueryMessage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            userNum: '',
            errorMes: ''
        }
        this.confirm = this.confirm.bind(this);
        this.changeName = this.changeName.bind(this);
        this.changeNum = this.changeNum.bind(this);
    }
    confirm() {
        let errorMes = '';
        const {userName, userNum} = this.state;
        if(!userName) {
            errorMes = '姓名不能为空';
        } else if(!userNum) {
            errorMes = '学号不能为空';
        }
        if(!errorMes) {
            let userIfro = {
                userName,
                userNum
            }
            console.log(userIfro);
        } else {
            Modal.error({
                title: '发生错误',
                content: errorMes
            })
        }
        
    }
    changeName(e) {
        const userName = e.target.value;
        this.setState({
            userName
        })
    }
    changeNum(e) {
        const userNum = e.target.value;
        this.setState({
            userNum
        })
    }
    render() {
        const {userName, userNum, errorMes} = this.state;
        return (
            <div className="query-wrapper">
                <div className="query-top-bar">
                    <Input.Group size="large" compact="true">
                        <div className="antd-col-6">
                            <Input placeholder="请输入姓名" onChange={this.changeName} value={userName} className="input-user-name"/>
                        </div>
                        <div className="antd-col-6">
                            <Input placeholder="请输入学号" onChange={this.changeNum} value={userNum} className="input-user-num"/>
                        </div>
                        <Button type="primary" size="large" onClick={this.confirm} className="confirm-btn">查询</Button>
                    </Input.Group>
                </div>
                下面是展示信息
            </div>
        )
    }
}
export default QueryMessage;