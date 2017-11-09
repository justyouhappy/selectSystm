import React from 'react';
import '../../scss/confirmModel.scss';
import { Modal } from 'antd';

class ConfirmModal extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		}
	}
	handleOk() {
		
	}
	render() {
		const { onHidden } = this.props;
		console.log(onHidden);
        return(
            <Modal
				visible
				onOk={this.handleOk}
          		onCancel={onHidden}
			>

            </Modal>   
        );

	}
}
export default ConfirmModal;