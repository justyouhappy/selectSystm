import React from 'react';
import '../../scss/content.scss';
import { connect } from 'react-redux';
import * as actions from '../redux/action/mainAction';
import { bindActionCreators } from 'redux';
import NoticeDetail from '../components/noticeDetail'; 
import ContentMain from '../components/contentMain';

class Content extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
            id: null
        }
        this.changeId = this.changeId.bind(this);
    }
    changeId(id) {
        this.setState({
            id
        })
    }
	render() {
        const { id } = this.state;
        const { information, className, actions } = this.props;
        const { setInformation } = actions;
        return(
            <div className={(className || "" )+ " content-body"} >
                {information ? <NoticeDetail setInformation={setInformation} id={id}/> : <ContentMain setInformation={setInformation} changeId={this.changeId}/>}
            </div>
        )

	}
}
Content = connect((state) => state.MainReducer, (dispatch) => {
	return {
		actions: bindActionCreators(actions, dispatch)
	}
})(Content);
export default Content