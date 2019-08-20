import { createStore, compose, applyMiddleware } from 'redux'

import reducer from './reducers'

const logMiddleware = ({ getState, dispatch }) => (dispatch) => (action) => {
	console.log(action.type, store.getState())
	return dispatch(action)
}

const stringMiddleware = () => (next) => (action) => {
	if (typeof action === 'string') {
		return next({
			type: action
		})
	}

	return dispatch(action)
}

const logEnhancer = (createStore) => (...args) => {
	const store = createStore(...args)
	const originalDispatch = store.dispatch
	store.dispatch = (action) => {
		console.log(action.type)
		return originalDispatch(action)
	}

	return store
}

const store = createStore(reducer, applyMiddleware(
	stringMiddleware, logMiddleware))

export default store