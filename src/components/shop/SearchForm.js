import React from 'react';

import ShopActions from '../../actions/ShopActions';
import ShopStore from '../../stores/ShopStore';

export default class SearchForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {searchText: ShopStore.getState().searchText};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ searchText: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    ShopActions.search(this.state.searchText);
  }

  render() {
    return(
      <div>
        <h2 className="lead">Add a developer</h2>

        <form className="form-inline" ng-submit="shop.getDeveloperList()">
          <div className="form-group">
            <label htmlFor="githubOrganization">Filter by organization</label>
            <input type="text" className="form-control" id="githubOrganization" placeholder="GitHub Organization" value={this.state.searchText} onChange={this.handleChange}/>
          </div>
          <button type="submit" className="btn btn-success" onClick={this.handleSubmit}>Filter</button>
        </form>
      </div>
    );
  }
}