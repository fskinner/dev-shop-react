import React from 'react';

export default class Dev extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <tr key={this.props.data.id}>
        <td><img src="./assets/default.png" height="48" alt={this.props.data.username} title={this.props.data.username+"'s photo"} className="img-rounded"/></td>
        <td><a href={"https://github.com/"+this.props.data.username}>{this.props.data.username}</a></td>
        <td>${this.props.data.price}</td>
        
        <td>
          <button type="button" className="btn btn-default pull-right" ng-click="shop.add(developer)" ng-hide="developer.onCart">Add to cart</button>
          <button type="button" className="btn btn-danger pull-right" ng-click="shop.remove(developer)" ng-show="developer.onCart">Cancel</button>
        </td>
      </tr>
    );
  }
}