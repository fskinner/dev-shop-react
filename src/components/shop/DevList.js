import React, { Component, PropTypes } from 'react';

import Dev from './Dev';
import OrderTotal from './OrderTotal';

class DevList extends Component {
  static propTypes = {
    filter: PropTypes.string,
    cart: PropTypes.object,
    data: PropTypes.object,
    page: PropTypes.string
  };

  static defaultProps = {
    filter: '',
    cart: {},
    data: {},
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
    const { cart } = this.props;
    let { data } = this.props;
    if(this.props.filter) {
      data = data.filter((dev) => dev.get('organization').includes(this.props.filter));
    }

    const footer = this.composeFooter();
    let devList = data.map((dev) => {
      return (
        <Dev data={dev}
          onCart={cart.find( cartDev => cartDev.get('id') === dev.get('id') ) !== undefined}
          key={dev.get('id')}
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
