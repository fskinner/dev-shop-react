import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import ShopPage from './containers/ShopPage';
import CartPage from './containers/CartPage';
import CheckoutPage from './containers/CheckoutPage';

export default (
  <Route path='/' component={App}>
    <IndexRoute component={ShopPage} />
    <Route path='cart' component={CartPage}/>
    <Route path='checkout' component={CheckoutPage}/>
  </Route>
);
