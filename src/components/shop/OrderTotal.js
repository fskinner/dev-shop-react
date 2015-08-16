import React, { Component, PropTypes } from 'react';

class OrderTotal extends Component {
  static propTypes = {
    cart: PropTypes.object
  };

  static defaultProps = {
    cart: {}
  };

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
    this.renderActionButton = this.renderActionButton.bind(this);
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

  renderActionButton() {
    if(this.state.redeemed) {
      return (
        <button type="button"
          ng-click="cart.removeVoucher()"
          className="btn btn-default btn-xs"
          onClick={this.handleRemoveClick}>
          Remove
        </button>
      );
    }

    return (
      <button type="button"
        ng-click="cart.validateVoucher()"
        className="btn btn-success btn-xs"
        onClick={this.handleRedeemClick}>
        Redeem
      </button>
    );
  }

  render() {
    const actionButton = this.renderActionButton();

    return (
      <tfoot>
        <tr>
          <td>Total</td>
          <td></td>
          <td>${this.state.totalPrice.toFixed(2)}</td>
          <td>
            <input type="text"
              placeholder="Discount voucher"
              value={this.state.voucher}
              onChange={this.handleChange}
            />
            { actionButton }
          </td>
        </tr>
      </tfoot>
    );
  }
}

export default OrderTotal;
