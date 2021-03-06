import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as ShopActions from '../actions/shop';

import ErrorNotify from '../components/shop/ErrorNotify';
import Loader from '../components/shop/Loader';
import SearchForm from '../components/shop/SearchForm';
import DevList from '../components/shop/DevList';

function mapStateToProps(state) {
  return {
    shop: state.shop,
    cart: state.cart
  };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(ShopActions, dispatch) };
}

@connect(mapStateToProps, mapDispatchToProps)
export default class Shop extends React.Component {
  static propTypes = {
    cart: PropTypes.array.isRequired,
    shop: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    if(this.props.cart.length === 0) {
      e.preventDefault();
    }
  }

  componentDidMount() {
    this.props.actions.getShop();
  }

  render() {
    const { shop, cart, actions } = this.props;

    return (
      <div>
        <SearchForm performSearch={actions.filterOrganization} />

        <Loader loading={shop.loading} />
        <ErrorNotify message={shop.error} />

        <DevList developers={shop.developers}
          addToCart={actions.addToCart}
          removeFromCart={actions.removeFromCart}
          cart={cart}
          page={"shop"}
        />

        {shop.developers || cart ? <Link to="/checkout"
          className="btn btn-primary btn-lg pull-right top-offset-20 bottom-offset-20"
          onClick={this.handleClick}>
          Go to cart
        </Link> : ''}
      </div>
    );
  }
}
