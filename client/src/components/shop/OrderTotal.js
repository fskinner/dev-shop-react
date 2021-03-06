import React, { Component, PropTypes } from 'react';

const propTypes = {
  cart: PropTypes.array
};

const defaultProps = {
  cart: []
};

export default class OrderTotal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      voucher: '',
      redeemed: false
    };

    this.calculateTotal = this.calculateTotal.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleRedeemClick = this.handleRedeemClick.bind(this);
    this.handleRemoveClick = this.handleRemoveClick.bind(this);
    this.renderActionButton = this.renderActionButton.bind(this);
  }

  calculateTotal() {
    if(this.props.cart.length === 0) {
      return 0;
    }

    let price = this.props.cart.map(item => item.price)
      .reduce((total, n) => parseInt(total, 10) + parseInt(n, 10));

    if(this.state.redeemed) price = price * 0.9;

    return price;
  }

  handleChange(e) {
    this.setState({voucher: e.target.value});
  }

  handleRedeemClick() {
    if(this.state.voucher === 'SHIPIT') {
      this.setState({redeemed: true});
    }
  }

  handleRemoveClick() {
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
    const totalPrice = this.calculateTotal();

    return (
      <tfoot>
        <tr>
          <td>Total</td>
          <td></td>
          <td>${parseInt(totalPrice).toFixed(2)}</td>
          <td>
            <input type="text"
              placeholder="Discount voucher"
              value={this.state.voucher}
              onChange={this.handleChange}
              className="margin-right-10"
            />
            { actionButton }
          </td>
        </tr>
      </tfoot>
    );
  }
}

OrderTotal.propTypes = propTypes;
OrderTotal.defaultProps = defaultProps;
