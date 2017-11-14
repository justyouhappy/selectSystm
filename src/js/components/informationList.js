import React from 'react';
import InformationItem from './informationItem';
import InformationList from '../../scss/informationList.scss';

class informationList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		}
	}
	render() {
		const { changeId, setInformation } = this.props;
		let data = this.props.data || [];
		const { className } = this.props;
		return(
            <div className={className} >
				<div className="information-title">
					<div className="information-all-title">
						<div className="information-first-title">院处动态</div>
						<div className="information-second-title"></div>
					</div>
				</div>
				<div className="information-content">
					{
                        data.map((ele, index) => 
                        <InformationItem 
                            key={ele.nid} 
                            id={ele.nid}
                            title={ele.ntopic}
                            setInformation={setInformation}
                            changeId={changeId}
                        />)
					}
				</div>
            </div>
        )
	}
}
export default informationList