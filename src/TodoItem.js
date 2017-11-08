const React = require("react")
const connect = require("react-redux").connect

require("./TodoItem.css")

class TodoItem extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		// console.log("items", this.props)
		return (
			<div className="item-container">
				<div className={ `todo-checkbox ${this.props.item.done ? "todo-checkbox-done" : ""}`} onClick={ () => { this.props.dispatch(this.props.onClick(this.props.item.id)) } }></div>
				<div className={ `todo-item ${this.props.item.done ? "todo-item-done" : ""}` } onClick={ () => { console.log("hoge") } }>
					{ this.props.item.text }
				</div>
			</div>
		)
	}
}

module.exports = connect()(TodoItem)