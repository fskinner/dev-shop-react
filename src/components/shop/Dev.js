import React from 'react';

import ShopActions from '../../actions/ShopActions';

export default class Dev extends React.Component {
  constructor(props) {
    super(props);

    this.handleAdd = this.handleAdd.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleAdd() {
    ShopActions.addToCart(this.props.data);
  }

  handleRemove() {
    ShopActions.removeFromCart(this.props.data.id);
  }

  render() {
    let actionButton = (() => {
      if(this.props.onCart) {
        return (<button type="button" className="btn btn-danger pull-right" onClick={this.handleRemove} ng-show="developer.onCart">Remove</button>);
      } else {
        return (<button type="button" className="btn btn-default pull-right" onClick={this.handleAdd} ng-hide="developer.onCart">Add to cart</button>);
      }
    })();

    return (
      <tr key={this.props.data.id}>
        <td><img src="./assets/default.png" height="48" alt={this.props.data.username} title={this.props.data.username+"'s photo"} className="img-rounded"/></td>
        <td><a href={"https://github.com/"+this.props.data.username}>{this.props.data.username}</a></td>
        <td>${this.props.data.price}</td>
        
        <td>
          {actionButton}
        </td>
          
      </tr>
    );
  }
}