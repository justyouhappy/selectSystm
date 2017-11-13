import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import fetchdata from '../common/fetch';
import TopImg from '../containers/topImg';
import {
    Button
} from 'antd';
// fetchdata(//地址字符串).then(data => {
//    data 获取的数据
// });
class Success extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			information: false
		}
	}
	render() {
		return (
            <div className="bodyer">  
				<TopImg num={window.num}/>
            </div>
		);
	}
}
export default Success