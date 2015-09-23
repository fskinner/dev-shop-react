import React, { Component, PropTypes } from 'react';

import Dev from './Dev';
import OrderTotal from './OrderTotal';

class DevList extends Component {
  static propTypes = {
    cart: PropTypes.array,
    devs: PropTypes.array,
    page: PropTypes.string
  };

  static defaultProps = {
    cart: [],
    devs: [],
    page: 'shop'
  };

  constructor(props) {
    super(props);

    this.composeFooter = this.composeFooter.bind(this);
  }

  composeFooter() {
    if (this.props.page === 'cart') {
      return (
        <OrderTotal cart={this.props.cart} />
      );
    }

    return '';
  }

  render() {
    const { cart, devs, addToCart, removeFromCart } = this.props;
    const footer = this.composeFooter();

    let devList = devs.map(dev => {
      return (
        <Dev data={dev}
          onCart={cart.find( cartDev => cartDev.id === dev.id ) !== undefined}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          key={dev.id}
        />
      );
    });

    return (
      <div className="top-offset-20">
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Photo</th>
              <th>Username</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {devList}
          </tbody>
          {footer}
        </table>
      </div>
    );
  }
}

export default DevList;
