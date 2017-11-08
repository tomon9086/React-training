const React = require("react")
const connect = require("react-redux").connect

require("./TodoItem.css")

const isActive = (enable = false, addClassName = "", base = "") => {
	console.log(enable)
	if(enable) return base + " " + addClassName
	return base
}

class TodoItem extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		console.log("items", this.props)
		return (
			<div className={ `todo-item ${this.props.item.done ? "todo-item-done" : ""}` } onClick={ () => { this.props.dispatch(this.props.onClick(this.props.item.id)) } }>
				{ this.props.item.text }
			</div>
		)
	}
}

module.exports = connect()(TodoItem)