import { createStore } from 'redux'

import reducer from './reducers'

const logEnhancer = (createStore) => (...args) => {
	const store = createStore(...args)
	const originalDispatch = store.dispatch
	store.dispatch = (action) => {
		console.log(action.type)
		return originalDispatch(action)
	}

	return store
}

const store = createStore(reducer, logEnhancer)

export default store