import React from 'react';
import '../../scss/upload.scss';
import {
	Upload, Icon, message, Select
} from 'antd';
const Option = Select.Option;
const Dragger = Upload.Dragger;
class Uploads extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			status: "Student"
		}
		this.onChange = this.onChange.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}
	onChange(info) {
		const status = info.file.status;
		const error = info.file.response.error;
		if (status === 'done' && !error) {
		    message.success(`${info.file.name} 上传成功.`);
		} else if (status === 'error'|| error) {
		    message.error(`${info.file.name} 上传失败，请检查网络或阅读上传须知.`);
		}
	}
	handleChange(value) {
		this.setState({
			status: value
		});
		console.log(value);
	}
	render() {
		return (
            <div className="upload-wrapper">  
				<div className="upload-connent">
					<h1>档案上传</h1>
					<div className="select">
						<span>请选择上传档案类型:</span>
						<Select value={this.state.status} style={{ width: 120, marginLeft: 20 }} onChange={this.handleChange}>
							<Option value="Student">上传学生档案</Option>
							<Option value="Teacher">上传老师档案</Option>
						</Select>
					</div>
					<div className="upload-box">
						<Dragger 
							name='file'
							multiple={true}
							showUploadList={false}
							action={'controller/upload' + this.state.status}
							onChange={this.onChange}
						>
						<p className="ant-upload-drag-icon">
							<Icon type="inbox" />
						</p>
						<p className="ant-upload-text">点击或拖拽文件到此处</p>
						<p className="ant-upload-hint">把文件拖入指定区域，完成上传，同样支持点击上传</p>
						</Dragger>
					</div>
					<p className="upload-limit">
						上传须知：
					</p>
				</div>
            </div>
		);
	}
}

export default Uploads;