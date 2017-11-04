import {routerReducer} from 'react-router-redux';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import * as reducers from '../reducer/index.js';

export default function () {
	return createStore(
		combineReducers({
			...reducers,
			routing: routerReducer,
		}),
		applyMiddleware(thunk)
	);
}