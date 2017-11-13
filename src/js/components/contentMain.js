import React from 'react';
import '../../scss/contentMain.scss';
import InformationList from './informationList';
import SignIn from './signIn';
import ConfirmModel from './confirmModal';
import InformationVideo from './informationVideo';
import fetchData from '../common/fetch';

class ContentMain extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			visible: false,
			data: []
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
	componentDidMount() {
		fetchData('api/notice/listNotice').then(data => {
			this.setState({
				Listdata: data
			})
		}, () => {
			// alert('网络错误');
		});
	}
	render() {
		const { setInformation, changeId } = this.props;
		const { visible, Listdata } = this.state;
        return(
            <div className="contnet-main-body">
				<div className="first-row">
					<InformationList className="information-list" setInformation={setInformation} data={Listdata} changeId={changeId}/>
					<SignIn onHidden={this.onHidden} onShow={this.onShow}/>
					{visible && <ConfirmModel onHidden={this.onHidden}/>}
				</div>
				<InformationVideo/>
            </div>
        )

	}
}
export default ContentMain