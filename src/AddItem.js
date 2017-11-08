const React = require("react")
const connect = require("react-redux").connect

const addItem = require("./actions.js").addItem

class AddItem extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		let input
		return (
			<div>
				<input type="text" ref={ node => { input = node }} />
				<input type="button" value="OK" onClick={ () => {
					if(input.value.trim()) this.props.dispatch(addItem(input.value.trim()))
					input.value = ""
				}} />
			</div>
		)
	}
}

module.exports = connect()(AddItem)
