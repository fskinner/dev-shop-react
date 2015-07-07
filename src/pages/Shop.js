import React from 'react';

import SearchForm from '../components/shop/SearchForm';
import DevList from '../components/shop/DevList';
import ShopStore from '../stores/ShopStore';

export default class Page extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = ShopStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    ShopStore.listen(this.onChange);
  }

  componentWillUnmount() {
    ShopStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  render() {
    return (
      <div>
        <SearchForm />
        <DevList data={this.state.developers} filter={this.state.searchText} />
      </div>
    );
  }
}