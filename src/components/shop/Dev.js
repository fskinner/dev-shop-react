import React, { Component } from 'react';

import ShopActions from '../../actions/ShopActions';
import defaultImage from '../../assets/images/default.png';

class Dev extends Component {
  constructor(props) {
    super(props);

    this.handleAdd = this.handleAdd.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleAdd() {
    ShopActions.addToCart(this.props.data);
  }

  handleRemove() {
    ShopActions.removeFromCart(this.props.data.get('id'));
  }

  render() {
    const { data, onCart } = this.props;
    const actionButton = (() => {
      if (onCart) {
        return (
          <button type="button"
            className="btn btn-danger pull-right"
            onClick={this.handleRemove}>
            Remove
          </button>
        );
      }

      return (
        <button type="button"
          className="btn btn-default pull-right"
          onClick={this.handleAdd}>
          Add to cart
        </button>
      );
    })();

    return (
      <tr key={data.get('id')}>
        <td>
          <img src={defaultImage}
            height="48" alt={data.get('username')}
            title={data.get('username') + '\'s photo'}
            className="img-rounded"
          />
        </td>
        <td><a href={'https://github.com/' + data.get('username')}>{data.get('username')}</a></td>
        <td>${data.get('price')}</td>
        <td>
          {actionButton}
        </td>
      </tr>
    );
  }
}

export default Dev;
