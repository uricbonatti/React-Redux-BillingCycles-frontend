import React from 'react';
import { Route, Redirect, IndexRoute, HashRouter } from 'react-router-dom';

import AuthOrApp from './AuthOrApp';
import Dashboard from '../dashboard/Dashboard';
import BillingCycle from '../billingCycle/BillingCycle';

export default (props) => (
	<HashRouter>
		<AuthOrApp>
			<Route exact path='/' component={Dashboard} />
			<Route path='/billingCycles' component={BillingCycle} />
		</AuthOrApp>

		<Redirect from='*' to='/' />
	</HashRouter>
);
