import React from 'react';
import '../../scss/myFile.scss';
import { Tooltip } from 'antd';


class MyFile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        const { title, changeId, data } = this.props;
        // const { className } = this.props;
        return (
            <div className="myFile">
                <h3>学生档案详情</h3>
                <ul>
                    <li>
                        <div>学院名称：
                            <Tooltip title={data.academy}>
                                <span>{data.academy}</span>
                            </Tooltip>
                        </div>
                        <div>专业班级：
                            <Tooltip title={data.banji}>
                                <span>{data.banji}</span>
                            </Tooltip>
                        </div>
                    </li>
                    <li>
                        <div>学号：
                            <Tooltip title={data.sid}>
                                <span>{data.sid}</span>
                            </Tooltip>
                        </div>
                        <div>姓名：
                            <Tooltip title={data.sname}>
                                <span>{data.sname}</span>
                            </Tooltip>
                        </div>
                    </li>
                    <li>
                        <div>收件人邮编：
                            <Tooltip title={data.postcode}>
                                <span>{data.postcode}</span>
                            </Tooltip>
                        </div>
                        <div>收件单位：
                             <Tooltip title={data.receivingunit}>
                                <span>{data.receivingunit}</span>
                            </Tooltip>
                        </div>
                    </li>
                    <li>
                        <div>收件地址：
                            <Tooltip title={data.addressee}>
                                <span>{data.addressee}</span>
                            </Tooltip>
                        </div>
                        <div>收件人：
                             <Tooltip title={data.recipients}>
                                <span>{data.recipients}</span>
                            </Tooltip>
                        </div>
                    </li>
                    <li>
                        <div>收件单位（人）联系方式：
                            <Tooltip title={data.rTel}>
                                <span>{data.rTel}</span>
                            </Tooltip>
                        </div>
                        <div>转档事由：
                            <Tooltip title={data.mayCause}>
                                <span>{data.mayCause}</span>
                            </Tooltip>
                        </div>
                    </li>
                    <li>
                        <div>发档时间：
                            <Tooltip title={new Date(data.dispatchTime).toLocaleString()}>
                                <span>{new Date(data.dispatchTime).toLocaleString()}</span>
                            </Tooltip>
                        </div>
                        <div>毕业生手机联系方式：
                            <Tooltip title={data.tel}>
                                <span>{data.tel}</span>
                            </Tooltip>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}
export default MyFile