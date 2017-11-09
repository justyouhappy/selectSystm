import React from 'react';
import '../../scss/contentMain.scss';
import InformationList from './informationList';
import SignIn from './signIn';
import ConfirmModel from './confirmModal';
import InformationVideo from './informationVideo';

class ContentMain extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			visible: false
		}
		this.onHidden = this.onHidden.bind(this);
		this.onShow = this.onShow.bind(this);
	}
	onHidden() {
		this.setState({
			visible: false
		})
	}
	onShow() {
		this.setState({
			visible: true
		})
	}
	render() {
		const { setInformation, changeId } = this.props;
		const { visible } = this.state;
        return(
            <div className="contnet-main-body">
				<div className="first-row">
					<InformationList className="information-list" setInformation={setInformation} changeId={changeId}/>
					<SignIn onHidden={this.onHidden} onShow={this.onShow}/>
					{visible && <ConfirmModel onHidden={this.onHidden}/>}
				</div>
				<InformationVideo/>
            </div>
        )

	}
}
export default ContentMain