import { combineReducers } from 'redux';
const defaultState = {
}
const mainReducer = (state = defaultState, action) => {
	switch (action.type) {
		case 'setName':
			return {
				...state,
				name: action.param
			}
	// 	case 'changSone' :
	// 		return {
	// 			...state,
	// 			SongInfo: action.param
	// 		}
	// 	case 'changeNowTime' :
	// 		return {
	// 			...state,
	// 			nowTime: action.param
	// 		}
	// 	case 'setEndTime' :
	// 		return {
	// 			...state,
	// 			endTime: action.param
	// 		}
	// 	case 'setShow' :
	// 		return {
	// 			...state,
	// 			show: action.param
	// 		}
		default:
			return state;
	}
};
export default mainReducer;