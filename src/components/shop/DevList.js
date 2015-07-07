import React from 'react';

import Dev from './Dev';

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
              <Dev data={dev} />
            )
          })}
          </tbody>
        </table>
        <button type="button" className="btn btn-default btn-lg center-block" ng-hide="shop.lastPage" ng-click="shop.loadNextPage()">Load more</button>
      </div>
    );
  }
}