import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as ShopActions from '../actions/shop';

import DevList from '../components/shop/DevList';

function mapStateToProps(state) {
  return {
    cart: state.cart
  };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(ShopActions, dispatch) };
}

@connect(mapStateToProps, mapDispatchToProps)
export default  class Checkout extends Component {
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
    const { cart, dispatch, actions } = this.props;
    console.log('cart', cart);
    return (
      <div>
        <DevList developers={cart}
          addToCart={actions.addToCart}
          removeFromCart={actions.removeFromCart}
          cart={cart}
          page={"cart"}
        />
        <Link to="/"
          className="btn btn-default pull-left top-offset-20 bottom-offset-20 ng-scope">
          Continue shopping
        </Link>
        <Link to="/placeorder"
          className="btn btn-primary btn-lg pull-right"
          onClick={this.handleClick}>
          Proceed to Checkout
        </Link>
      </div>
    );
  }
}
