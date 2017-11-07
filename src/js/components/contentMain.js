import React from 'react';
import '../../scss/contentMain.scss';
import InformationList from './informationList';


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
                <InformationList className="information-list" setInformation={setInformation} changeId={changeId}/>
            </div>
        )

	}
}
export default ContentMain