import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as ShopActions from '../actions/shop';

import DevList from '../components/shop/DevList';

class Cart extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    if(this.props.cart.length === 0) {
      e.preventDefault();
    }
  }

  render() {
    const { cart, dispatch } = this.props;
    const actions = bindActionCreators(ShopActions, dispatch);

    return (
      <div>
        <DevList devs={cart}
          addToCart={actions.addToCart}
          removeFromCart={actions.removeFromCart}
          cart={cart}
          page={"cart"}
        />
        <Link to="/"
          className="btn btn-default pull-left top-offset-20 bottom-offset-20 ng-scope">
          Continue shopping
        </Link>
        <Link to="/checkout"
          className="btn btn-primary btn-lg pull-right"
          onClick={this.handleClick}>
          Proceed to Checkout
        </Link>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cart
  };
}

export default connect(mapStateToProps)(Cart);
