import React from 'react';
import _ from 'lodash';

import Dev from './Dev';

export default class DevList extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      totalPrice: _.reduce(_.pluck(this.props.cart, 'price'), (total, n) => parseInt(total, 10) + parseInt(n, 10)),
      voucher: '',
      redeemed: false
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleRedeemClick = this.handleRedeemClick.bind(this);
    this.handleRemoveClick = this.handleRemoveClick.bind(this);
  }

  handleChange(e) {
    this.setState({voucher: e.target.value});
  }

  handleRedeemClick() {
    if(this.state.voucher === 'SHIPIT') {
      this.setState({totalPrice: this.state.totalPrice * 0.9});
      this.setState({redeemed: true});
    }
  }

  handleRemoveClick() {
    if(this.state.redeemed) {
      this.setState({totalPrice: this.state.totalPrice / 0.9});
    }

    this.setState({voucher: ''});
    this.setState({redeemed: false});
  }

  render() {
    let devs = this.props.data;

    if(this.props.filter) {
      devs = devs.filter((dev) => {
        if(dev.organization.includes(this.props.filter)) return dev;
      });
    }

    let footer = (() => {
      if(this.props.page === "cart") {
        return (
          <tfoot>
            <tr>
              <td>Total</td>
              <td></td>
              <td>${this.state.totalPrice.toFixed(2)}</td>
              <td>
                <input type="text" placeholder="Discount voucher" value={this.state.voucher} onChange={this.handleChange}/>
                { this.state.redeemed ? 
                  <button type="button" ng-click="cart.removeVoucher()" className="btn btn-default btn-xs" onClick={this.handleRemoveClick}>Remove</button>
                  : <button type="button" ng-click="cart.validateVoucher()" className="btn btn-success btn-xs" onClick={this.handleRedeemClick}>Redeem</button>}
              </td>
            </tr>
          </tfoot>
        );
      } else {
        return '';
      }
    })();

    return(
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
            )
          })}
          </tbody>
          {footer}
        </table>
        {/*<button type="button" className="btn btn-default btn-lg center-block" ng-hide="shop.lastPage" ng-click="shop.loadNextPage()">Load more</button>*/}
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