const React = require("react")
const connect = require("react-redux").connect

const toggleDone = require("./actions.js").toggleDone

const TodoItem = require("./TodoItem.js")
const AddItem = require("./AddItem.js")

require("./TodoList.css")

class TodoList extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<div className="list-container">
				{this.props.todos.map((v, i) => (
					<TodoItem key={ v.id } item={ v } onClick={ toggleDone }></TodoItem>
				))}
				<AddItem></AddItem>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return state.todo
}

const mapDispatchToProps = {
}

module.exports = connect(
	mapStateToProps,
	// mapDispatchToProps
)(TodoList)

