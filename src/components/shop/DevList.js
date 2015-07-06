import React from 'react';

export default class DevList extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return(
      <div className="top-offset-20" ng-if="shop.developers.length > 0">
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Photo</th>
              <th>Username</th>
              <th>Price</th>
              <th>Hours amount</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
          {this.props.data.map((dev) => {
            return (
              <tr>
                <td><img src="./assets/default.png" height="48" alt={dev.username} title={dev.username+"'s photo"} className="img-rounded"/></td>
                <td><a href={"https://github.com/"+dev.username}>{dev.username}</a></td>
                <td>${dev.price}</td>
                <td><input type="number" className="col-md-3" value="developer.hours"/></td>
                <td>
                  <button type="button" className="btn btn-default pull-right" ng-click="shop.add(developer)" ng-hide="developer.onCart">Add to cart</button>
                  <button type="button" className="btn btn-danger pull-right" ng-click="shop.remove(developer)" ng-show="developer.onCart">Cancel</button>
                </td>
              </tr>
            )
          })}
          </tbody>
        </table>
        <button type="button" className="btn btn-default btn-lg center-block" ng-hide="shop.lastPage" ng-click="shop.loadNextPage()">Load more</button>
      </div>
    );
  }
}