import React from 'react';
import '../../scss/contentMain.scss';
import InformationList from './informationList';
import SignIn from './signIn';

class ContentMain extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		}
	}
	render() {
        const { setInformation, changeId } = this.props;
        return(
            <div className="contnet-main-body">
				<div className="first-row">
					<InformationList className="information-list" setInformation={setInformation} changeId={changeId}/>
					<SignIn />	
				</div>
            </div>
        )

	}
}
export default ContentMain