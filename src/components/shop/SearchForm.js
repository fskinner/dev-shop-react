import React, { Component, PropTypes } from 'react';

const propTypes = {
  performSearch: PropTypes.func.isRequired
};

export default class SearchForm extends Component {
  constructor(props) {
    super(props);

    this.state = { text: '' }

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    this.props.performSearch(e.target.value);
    this.setState({ text: e.target.value });
  }

  handleClick() {
    this.props.performSearch('');
    this.setState({ text: '' });
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
              value={this.state.text}
              onChange={this.handleChange}
            />
          </div>

          <button type="button" className="btn btn-info" onClick={this.handleClick}>Clear search</button>
      </div>
    );
  }
}

SearchForm.propTypes = propTypes;
