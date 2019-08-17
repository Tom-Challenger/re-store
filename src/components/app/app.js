import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import ShopHeader from '../shop-header'
import { 
	HomePage,
	CartPage
} from '../pages'

import './app.css'

const App = ({ bookstoreService }) => {
	return (
		<main role="main" className="container">
			<ShopHeader numItems={5} total={210} />
			<Switch>
				<Route path="/" component={HomePage} exact={true} />
				<Route path="/cart" component={CartPage} />

				<Route render={() => <h2>Page not found</h2>} />
				<Redirect to='/' />
			</Switch>
		</main>
	)
}

export default App