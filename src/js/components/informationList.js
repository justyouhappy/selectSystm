import React from 'react';
import InformationItem from './informationItem';
import InformationList from '../../scss/informationList.scss';

const data = [
    {
        "title": "电影杂志《虹膜》主编（支持ios/Android平台）",
        "id": 1,
    },
    {
        "title": "美国心理学和经济学本科毕业。强推《知识分子与社会》",
        "id": 2,
    },
    {
        "title": "妇产科医生",
        "id": 3,
    },
    {
        "title": "知乎 001 号员工",
        "id": 4,
    },
    {
        "title": "和知乎在一起",
        "id": 5,
    },
    {
        "title": "知乎 002 号员工",
        "id": 6,
    },
    {
        "title": "lawyer",
        "id": 8,
    },
    {
        "title": "lawyer",
        "id": 9,
    },
    {
        "title": "lawyer",
        "id": 10,
    },
    {
        "title": "lawyer",
        "id": 11,
    },
    {
        "title": "lawyer",
        "id": 12,
    },
    {
        "title": "lawyer",
        "id": 13,
    },
    {
        "title": "lawyer",
        "id": 14,
    },
    {
        "title": "lawyer",
        "id": 15,
    }
]
class informationList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		}
	}
    componentWillMount() {
        this.onDealData();
    }
	onDealData () {
		var row = [];
		let { changeId, setInformation } = this.props;
		data.forEach((ele, index) => {
			row.push(
				<InformationItem key={ele.id} id={ele.id} title={ele.title} setInformation={setInformation} changeId={changeId}/>
			)
		})
		this.row = row;
	}
	render() {
		const { changeId, setInformation } = this.props;
		
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
						this.row
					}
				</div>
            </div>
        )
	}
}
export default informationList