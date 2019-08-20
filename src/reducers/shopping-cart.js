const updateCartItems = (cartItems, item, idx) => {
	if (item.count === 0) {
		return [
		...cartItems.slice(0, idx),
		...cartItems.slice(idx + 1)
		]
	}

	if (idx === -1) {
		return [
			...cartItems,
			item
		]
	}

	return [
		...cartItems.slice(0, idx),
		item,
		...cartItems.slice(idx + 1)
	]
}

const updateCartItem = (book, item = {}, quntity) => {

	const { 
		id = book.id, 
		count = 0, 
		title = book.title, 
		total = 0 } = item

	return {
		id, 
		title,
		count: count + quntity,
		total: total + quntity*book.price
	}
}

const updateOrder = (state, bookId, quntity) => {
	const book = state.bookList.books.find((book) => book.id === bookId)
	const itemIndex = state.shoppingCart.cartItems.findIndex(({ id }) => id === bookId)
	const item = state.shoppingCart.cartItems[itemIndex]

	const newItem = updateCartItem(book, item, quntity)
	return {
		...state.shoppingCart,
		cartItems: updateCartItems(state.shoppingCart.cartItems, newItem, itemIndex)
	}
}

const updateShoppingCart = (state, action) => {

	if (state === undefined) {
		return {
			cartItems: [],
			orderTotal: 0
		}
	}

	switch (action.type) {
		case 'BOOK_ADDED_TO_CART':
			return updateOrder(state, action.payload, 1)

		 case 'BOOK_REMOVED_FROM_CART':
			return updateOrder(state, action.payload, -1)

		 case 'ALL_BOOKS_REMOVED_FROM_CART':
		 	const item = state.shoppingCart.cartItems.find(({ id }) => id === action.payload)
			return updateOrder(state, action.payload, -item.count)

		default: 
			return state.shoppingCart
	}
}

export default updateShoppingCart