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
class Main extends React.Component {
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