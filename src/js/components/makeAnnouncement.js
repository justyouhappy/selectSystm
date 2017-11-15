import React from 'react';
import '../../scss/makeAnnouncement.scss';
import { 
	Button
 } from 'antd';
import fetchData from '../common/fetch'; 
import TextArea from '../../../node_modules/_antd@2.13.10@antd/lib/input/TextArea';

class MakeAnnouncement extends React.Component {
	constructor() {
		super();
		this.state = {
            title:'',
            content: ''
        }
        this.titleChange = this.titleChange.bind(this);
        this.contentChange = this.contentChange.bind(this);
        this.del = this.del.bind(this);
        this.onOk = this.onOk.bind(this);
    }
    titleChange(e) {
		const title = e.target.value;
		this.setState({
			title
		})
    }
    contentChange(e) {
		const content = e.target.value;
		this.setState({
			content
		})
    }
    onOk() {
        const { title, content } = this.state;
        console.log(title, content);
        this.del();
    }
    del() {
        this.setState({
            title: '',
			content: ''
		})

    }
	render() {
        const { title, content } = this.state;
        return(
             <div className="make-announcement-body">
                <h1>发布通知</h1>
                <div className="input-connent">
                    <input className="announcement-title" placeholder="标题" value={title} onChange={this.titleChange}></input>
                    <textarea className="announcement-content" placeholder="内容"value={content} onChange={this.contentChange}></textarea>
                    <div className="announcement-btn">
                        <Button type="primary" className="announcement-btn-left" onClick={this.del}>清空</Button>
                        <Button type="primary" className="announcement-btn-right"onClick={this.onOk}>提交</Button>
                    </div>
                </div>
             </div>
        )
	}
}
export default  MakeAnnouncement