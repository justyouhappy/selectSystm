import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory} from 'react-router';
import {Provider} from 'react-redux';
import createstore from './redux/store/store';
import {syncHistoryWithStore} from 'react-router-redux';
import Main from './page/main';  // 首页
const store = createstore();
const history = syncHistoryWithStore(hashHistory, store);

class App extends React.Component {
	// componentWillMount() {},
	// componentDidMount() {},
	// componentWillUpdate(nextProps, nextState) {},
	// componentDidUpdate(prevProps, prevState) {},
	// componentWillUnmount() {},
	// componentWillReceiveProps(nextProps) {},
	// shouldComponentUpdate(nextProps, nextState) {},

	render() {
		return (
			<Provider store={store}>
				<Router history={history}>	
					<Route >
						<Route path="/" component={Main} />
					</Route>
				</Router>
			</Provider>
		);
	}
}

const app = document.createElement('div');
const scripts = document.getElementsByTagName('script');
document.body.insertBefore(app, scripts[0]);
ReactDOM.render(<App />, app);