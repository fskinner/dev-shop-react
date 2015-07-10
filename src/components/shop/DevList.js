import React from 'react';
import _ from 'lodash';

import Dev from './Dev';
import OrderTotal from './OrderTotal';

export default class DevList extends React.Component {
  render() {
    let devs = this.props.data;

    if(this.props.filter) {
      devs = devs.filter((dev) => {
        if(dev.organization.includes(this.props.filter)) { return dev; }
      });
    }

    let footer = (() => {
      if(this.props.page === 'cart') {
        return (
          <OrderTotal cart={this.props.cart}/>
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
          {devs.map((dev) => {
            return (
              <Dev data={dev} onCart={_.findWhere(this.props.cart, {'id': dev.id}) !== undefined} key={dev.id}/>
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
  cart: React.PropTypes.array,
  data: React.PropTypes.array,
  page: React.PropTypes.string
};

DevList.defaultProps = {
  filter: '',
  cart: [],
  data: [],
  page: 'shop'
};
