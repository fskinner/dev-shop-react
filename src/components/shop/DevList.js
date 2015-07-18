import React from 'react';
import _ from 'lodash';

import Dev from './Dev';
import OrderTotal from './OrderTotal';

export default class DevList extends React.Component {
  render() {
    const {cart, page} = this.props;
    let {data} = this.props;

    if(this.props.filter) {
      data = data.filter((dev) => {
        if(dev.get('organization').includes(this.props.filter)) {
          return dev;
        }
      });
    }

    const footer = (() => {
      if(page === 'cart') {
        return (
          <OrderTotal cart={cart}/>
        );
      } else {
        return '';
      }
    })();

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
          {data.map((dev) => {
            return (
              <Dev data={dev} onCart={cart.find( cartDev => cartDev.get('id') === dev.get('id') ) !== undefined} key={dev.get('id')}/>
            );
          })}
          </tbody>
          {footer}
        </table>
      </div>
    );
  }
}

DevList.propTypes = {
  filter: React.PropTypes.string,
  cart: React.PropTypes.object,
  data: React.PropTypes.object,
  page: React.PropTypes.string
};

DevList.defaultProps = {
  filter: '',
  cart: {},
  data: {},
  page: 'shop'
};
