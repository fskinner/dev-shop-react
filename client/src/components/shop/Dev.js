import React, { Component, PropTypes } from 'react';

import defaultImage from '../../assets/images/default.png';

const propTypes = {
  onCart: PropTypes.bool,
  data: PropTypes.object,
  addToCart: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired
};

export default class Dev extends Component {
  constructor(props) {
    super(props);

    this.handleAdd = this.handleAdd.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.renderActionButton = this.renderActionButton.bind(this);
  }

  handleAdd() {
    this.props.addToCart(this.props.data);
  }

  handleRemove() {
    this.props.removeFromCart(this.props.data.id);
  }

  renderActionButton() {
    if (this.props.onCart) {
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
  }

  render() {
    const { data } = this.props;
    const actionButton = this.renderActionButton();

    return (
      <tr>
        <td>
          <img src={data.photo || defaultImage}
            height="48" alt={data.username}
            title={data.username + '\'s photo'}
            className="img-rounded"
          />
        </td>
        <td><a href={'https://github.com/' + data.username}>{data.username}</a></td>
        <td>${data.price.toFixed(2)}</td>
        <td>
          {actionButton}
        </td>
      </tr>
    );
  }
}

Dev.propTypes = propTypes;
