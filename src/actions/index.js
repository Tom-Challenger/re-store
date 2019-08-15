
const booksLoaded = (newBooks) => {
	return {
		type: 'BOOKS_LOADED',
		payloaded: newBooks
	}
}

export {
	booksLoaded
}