const React = require("react")
const connect = require("react-redux").connect

const addItem = require("./actions.js").addItem

require("./AddItem.css")

class AddItem extends React.Component {
	constructor(props) {
		super(props)
		this.send = (input) => {
			if(input.value.trim()) this.props.dispatch(addItem(input.value.trim()))
			input.value = ""
		}
	}
	render() {
		let input
		return (
			<div className="add-item-container">
				<input className="input-box" type="text" ref={ node => {
					input = node
					input.addEventListener("keypress", (event) => { if(event.key === "Enter") this.send(input) })
				}} />
				<div className="input-button" onClick={ () => { this.send(input) } }>Add</div>
			</div>
		)
	}
}

module.exports = connect()(AddItem)
