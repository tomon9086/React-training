import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const Redux = require("redux")
const Provider = require("react-redux").Provider

const store = Redux.createStore(require("./reducer.js"))

ReactDOM.render(
	<Provider store={ store }>
		<App />
	</Provider>
, document.getElementById('root'));
registerServiceWorker();
