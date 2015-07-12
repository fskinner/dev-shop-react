import React from 'react';

import ShopActions from '../../actions/ShopActions';
import ShopStore from '../../stores/ShopStore';

export default class SearchForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      searchText: ShopStore.getState().get('searchText')
    };

    this.onChange = this.onChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    ShopStore.listen(this.onChange);
  }

  componentWillUnmount() {
    ShopStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState({searchText: state.get('searchText')});
  }

  handleChange(e) {
    ShopActions.search(e.target.value);
  }

  handleSubmit(e) {
    e.preventDefault();
    ShopActions.search(this.state.searchText);
  }

  render() {
    return (
      <div>
        <h2 className="lead">Add a developer</h2>

        <form className="form-inline">
          <div className="form-group">
            <label htmlFor="githubOrganization" className="margin-right-10">Filter by organization</label>
            <input type="text" className="form-control" id="githubOrganization" placeholder="GitHub Organization" value={this.state.searchText} onChange={this.handleChange}/>
          </div>
          <button type="submit" className="btn btn-success" onClick={this.handleSubmit}>Filter</button>
        </form>
      </div>
    );
  }
}
