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
    this.handleClick = this.handleClick.bind(this);
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

  handleClick() {
    ShopActions.search('');
  }

  render() {
    return (
      <div className="form-inline">
        <h2 className="lead">Add a developer</h2>
          <div className="form-group">
            <label htmlFor="jsFramework" className="margin-right-10">Filter by JS Framework</label>
            <input type="text"
             className="form-control margin-right-10"
             id="jsFramework"
             placeholder="Framework name"
             value={this.state.searchText}
             onChange={this.handleChange}/>
          </div>
          <button type="button" className="btn btn-info" onClick={this.handleClick}>Clear search</button>
      </div>
    );
  }
}
