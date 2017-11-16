import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../redux/action/mainAction';
import TopImg from '../containers/topImg';
import Content from '../containers/content';
import '../../scss/main.scss';
import {
    Button
} from 'antd';
import fetchData from '../common/fetch';

class Main extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			information: false,
			num: 0
		}
	}
	componentDidMount() {
		fetchData('pageview/count').then(data => {
			this.setState({
				num: data.count
			});
			window.num = data.count;
		}, () => {
			this.setState({
				Errorshow: true,
				message: '网络错误'
			});
		});
	}
	render() {
		return (
            <div className="bodyer">  
				<TopImg num={this.state.num}/>
				<Content className="content" router={this.props.router}/>	
            </div>
		);
	}
}
Main = connect((state) => state.MainReducer, (dispatch) => {
	return {
		actions: bindActionCreators(actions, dispatch)
	}
})(Main);
export default Main