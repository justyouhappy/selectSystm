import { combineReducers } from 'redux';
const defaultState = {
	information: false
}
const mainReducer = (state = defaultState, action) => {
	switch (action.type) {
		case 'setInformation':
			return {
				...state,
				information: action.param
			}
		default:
			return state;
	}
};
export default mainReducer;