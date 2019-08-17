import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import { 
	HomePage,
	CartPage
} from '../pages'

import './app.css'

const App = ({ bookstoreService }) => {
	return (
		<div>
			<span>App</span>
			<Switch>
				<Route path="/" component={HomePage} exact={true} />
				<Route path="/cart" component={CartPage} />

				<Route render={() => <h2>Page not found</h2>} />
				<Redirect to='/' />
			</Switch>
		</div>
	)
}

export default App