import React from 'react';
import { Route, DefaultRoute } from 'react-router';

import App from './components/App';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';

export default (
  <Route name='home' path='/' handler={App}>
    <DefaultRoute handler={Shop} />
    <Route name='cart' path='/cart' handler={Cart}/>
    <Route name='checkout' path='/checkout' handler={Checkout}/>
  </Route>
);
