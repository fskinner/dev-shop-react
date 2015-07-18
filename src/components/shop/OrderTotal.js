import React from 'react';

export default class OrderTotal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      totalPrice: parseInt(this.props.cart.map(item => item.get('price')).reduce((total, n) => parseInt(total, 10) + parseInt(n, 10)), 10),
      voucher: '',
      redeemed: false
    };

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
  }
}

OrderTotal.propTypes = {
  cart: React.PropTypes.object
};

OrderTotal.defaultProps = {
  cart: {}
};
