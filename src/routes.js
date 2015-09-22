import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';

export default (
  <Route path='/' component={App}>
    <IndexRoute component={Shop} />
    <Route path='cart' component={Cart}/>
    <Route path='checkout' component={Checkout}/>
  </Route>
);
