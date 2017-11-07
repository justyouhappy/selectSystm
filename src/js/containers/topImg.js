import React from 'react';
import '../../scss/topImg.scss';


class TopImg extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		}
	}
	render() {
        const { num } = this.props;
        return(
            <div className="topImg" >
                <div className="cover">
                    <div className="logo"/>
                    <span className="count" >网站访问人数：{num}</span>  
                </div>
            </div>
        )

	}
}
export default TopImg