import React from 'react';
import InformationList from '../../scss/informationItem.scss';

class informationItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
                }
                this.onClick = this.onClick.bind(this);
        }
        onClick() {
                const { changeId, id, setInformation } = this.props;
                changeId(id);
                setInformation(true);
        }
	render() {
                const {  title, changeId } = this.props;
                // const { className } = this.props;
                return(
                        <div className="informationItem">
                                <div className="informationItem-rect"></div>
                                <div onClick={this.onClick} className="informationItem-content">{title}</div>
                        </div>
                )
	}
}
export default informationItem