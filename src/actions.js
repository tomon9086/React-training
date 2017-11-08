module.exports = {
	addItem: (text) => ({
		type: "add-item",
		text: text
	}),
	toggleDone: (id) => ({
		type: "toggle-done",
		id
	})
}
