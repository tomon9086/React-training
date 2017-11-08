import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const TodoList = require("./TodoList.js")

class App extends Component {
	render() {
		return (
			<TodoList></TodoList>
		)
	}
}

export default App;
