import React from 'react';
import '../../scss/myFile.scss';
import { Tooltip } from 'antd';

const data = {
    "1": "材料科学与工程学院",
    "2": "材料成型及控制工程",
    "3": "1302040102",
    "4": "范书铭",
    "5": "250061",
    "6": "山东大学（千佛山校区）材料科学与工程学院",
    "7": "山东省济南市历下区经十路17923号",
    "8": "党委办公室姜炳刚",
    "9": "0531-88392315",
    "10": "考研转档",
    "11": "2015/7/10",
    "12": "15636016376"
}

class MyFile extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
        }
    }
	render() {
                const {  title, changeId } = this.props;
                // const { className } = this.props;
                return(
                        <div className="myFile">
                            <h3>学生档案详情</h3>
                            <ul>
                                <li>
                                    <div>学院名称： 
                                        <Tooltip title={data[1]}>
                                            <span>{data[1]}</span>
                                        </Tooltip>
                                    </div>
                                    <div>专业班级： 
                                        <Tooltip title={data[2]}>
                                            <span>{data[2]}</span>
                                        </Tooltip>
                                    </div>
                                </li>
                                <li>
                                    <div>学号：
                                        <Tooltip title={data[3]}>
                                    <span>{data[3]}</span>
                                        </Tooltip> 
                                    </div>
                                    <div>姓名： 
                                        <Tooltip title={data[4]}>
                                            <span>{data[4]}</span>
                                        </Tooltip>
                                    </div>
                                </li>
                                <li>
                                    <div>收件人邮编：
                                        <Tooltip title={data[5]}>
                                            <span>{data[5]}</span>
                                        </Tooltip>
                                    </div>
                                    <div>收件单位： 
                                        <Tooltip title={data[6]}>
                                            <span>{data[6]}</span>
                                        </Tooltip>
                                    </div>
                                </li>
                                <li>
                                    <div>收件地址： 
                                        <Tooltip title={data[7]}>
                                            <span>{data[7]}</span>
                                        </Tooltip>
                                    </div>
                                    <div>收件人： 
                                        <Tooltip title={data[8]}>
                                            <span>{data[8]}</span>
                                        </Tooltip>
                                    </div>
                                </li>
                                <li>
                                    <div>收件单位（人）联系方式： 
                                        <Tooltip title={data[9]}>
                                            <span>{data[9]}</span>
                                        </Tooltip>
                                    </div>
                                    <div>转档事由： 
                                        <Tooltip title={data[10]}>
                                            <span>{data[10]}</span>
                                        </Tooltip>
                                    </div>
                                </li>
                                <li>
                                    <div>发档时间：
                                        <Tooltip title={data[11]}>
                                            <span>{data[11]}</span>
                                        </Tooltip>
                                    </div>
                                    <div>毕业生手机联系方式： 
                                        <Tooltip title={data[12]}>
                                            <span>{data[12]}</span>
                                        </Tooltip>
                                    </div>
                                </li>
                            </ul>
                        </div>
                )
	}
}
export default MyFile