import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import { bindActionCreators } from 'redux';
import * as ShopActions from '../actions/shop';

class Checkout extends React.Component {

  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const actions = bindActionCreators(ShopActions, dispatch);
    actions.clearCart();
  }

  render() {
    return (
      <div>
        Order placed!
        <Link to="/"
          onClick={this.handleClick}
          className="btn btn-primary btn-lg pull-right top-offset-20 bottom-offset-20">
          Buy more!
        </Link>
      </div>
    );
  }
}

export default Checkout;
