import React from 'react';
import _ from 'lodash';

import Dev from './Dev';
import OrderTotal from './OrderTotal';

export default class DevList extends React.Component {
  static propTypes = {
    filter: React.PropTypes.string,
    cart: React.PropTypes.object,
    data: React.PropTypes.object,
    page: React.PropTypes.string
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
    if(this.props.page === 'cart') {
      return (
        <OrderTotal cart={this.props.cart}/>
      );
    } else {
      return '';
    }
  }

  render() {
    const {cart, page} = this.props;
    let {data} = this.props;

    if(this.props.filter) {
      data = data.filter((dev) => dev.get('organization').includes(this.props.filter));
    }

    const footer = this.composeFooter();
    let devList = data.map((dev) => {
      return (<Dev data={dev} onCart={cart.find( cartDev => cartDev.get('id') === dev.get('id') ) !== undefined} key={dev.get('id')}/>);
    });

    return (
      <div className="top-offset-20" ng-if="shop.developers.length > 0">
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
