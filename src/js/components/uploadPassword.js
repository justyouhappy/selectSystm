import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../redux/action/mainAction';
import TopImg from '../containers/topImg';
import Content from '../containers/content';
import '../../scss/uploadPassword.scss';
import {
} from 'antd';
class uploadPassword extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		}
	}
	render() {
		return (
            <div>  
				
            </div>
		);
	}
}

export default uploadPassword;