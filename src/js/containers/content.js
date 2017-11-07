import React from 'react';
import '../../scss/content.scss';
import Information from '../components/informationDetail'; 
import ContentMain from '../components/contentMain';

class Content extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
            id: null
		}
	}
	render() {
        const { information, className } = this.props;
        return(
            <div className={(className || "" )+ " content-body"} >
                {information ? <Information id={id}/> : <ContentMain />}
            </div>
        )

	}
}
export default Content