import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';

import ShopPage from './containers/ShopPage';
import CheckoutPage from './containers/CheckoutPage';
import PlaceOrderPage from './containers/PlaceOrderPage';

export default (
  <Route path='/' component={App}>
    <IndexRoute component={ShopPage} />
    <Route path='checkout' component={CheckoutPage} />
    <Route path='placeorder' component={PlaceOrderPage} />
  </Route>
);
