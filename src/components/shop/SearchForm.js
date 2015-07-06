import React from 'react';

export default class SearchForm extends React.Component {
  constructor(props){
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return(
      <div>
        <h2 className="lead">Add a developer</h2>

        <form className="form-inline" ng-submit="shop.getDeveloperList()">
          <div className="form-group">
            <label htmlFor="githubOrganization">Filter by organization</label>
            <input type="text" className="form-control" id="githubOrganization" placeholder="GitHub Organization" />
          </div>
          <button type="submit" className="btn btn-success" onClick={this.handleSubmit}>Filter</button>
        </form>
      </div>
    );
  }
}