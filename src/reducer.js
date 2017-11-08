const Redux = require("redux")

const initState = {
	todos: [ { id: 0, done: false, text: "hoge" }, { id: 1, done: false, text: "hogehoge" } ]
}

let id = initState.todos.length

const todo = (state = initState, action) => {
	let newState = {}
	switch(action.type) {
		case "add-item":
			newState = {}
			newState.todos = [ ...state.todos, { id, done: false, text: action.text } ]
			id++
			// console.log(newState)
			return newState
		case "toggle-done":
			newState = {}
			newState.todos = state.todos.map((v, i) => {
				const item = { ...v }
				if(v.id === action.id) item.done = !item.done
				return item
			})
			// console.log(newState)
			return newState
		default:
			return state
	}
}

module.exports = Redux.combineReducers({
	todo
})
