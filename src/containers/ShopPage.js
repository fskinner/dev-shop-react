import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as ShopActions from '../actions/shop';

import SearchForm from '../components/shop/SearchForm';
import DevList from '../components/shop/DevList';

class Shop extends React.Component {
  static propTypes = {
    cart: PropTypes.array.isRequired,
    devs: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired
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

  render() {
    const { devs, cart, dispatch } = this.props;
    const actions = bindActionCreators(ShopActions, dispatch);

    return (
      <div>
        <SearchForm performSearch={actions.search} />
        <DevList devs={devs}
          addToCart={actions.addToCart}
          removeFromCart={actions.removeFromCart}
          cart={cart}
          page={"shop"}
        />
        <Link to="/cart"
          className="btn btn-primary btn-lg pull-right top-offset-20 bottom-offset-20"
          onClick={this.handleClick}>
          Go to cart
        </Link>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    devs: state.devs,
    cart: state.cart
  };
}

export default connect(mapStateToProps)(Shop);
