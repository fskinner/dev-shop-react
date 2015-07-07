import React from 'react';

export default class DevList extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    let devs = this.props.data;

    if(this.props.filter) {
      devs = devs.filter((dev) => {
        if(dev.organization === this.props.filter) return dev;
      });
    }

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
          {devs.map((dev) => {
            return (
              <tr key={dev.id}>
                <td><img src="./assets/default.png" height="48" alt={dev.username} title={dev.username+"'s photo"} className="img-rounded"/></td>
                <td><a href={"https://github.com/"+dev.username}>{dev.username}</a></td>
                <td>${dev.price}</td>
                
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