import React from 'react';
import {
    Button,
    Input,
    Modal
} from 'antd';
import MyFile from './myFile';
import '../../scss/queryMessage.scss'
import fetchData from '../common/fetch'; 

class QueryMessage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            userNum: '',
            errorMes: '',
            data: ''
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
        } else if(userNum.length != 10) {
            errorMes = '学号长度错误';
        }
        if(!errorMes) {
            let userIfro = {
                name: userName,
                id: userNum
            }
            fetchData('search/student', {method: 'post', data: userIfro}).then(data => {
                if(data.error) {
                    Modal.error({
                        title: '发生错误',
                        content: data.error,
                    });
                } else {
                    this.setState({
                        data: data.student
                    })
                }
            }, () => {
                Modal.error({
                    title: '发生错误',
                    content: '获取数据失败，请检查网络',
                });
            });
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
        const {userName, userNum, errorMes, data} = this.state;
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
                {data && <MyFile data={data}/>}
            </div>
        )
    }
}
export default QueryMessage;