import React from 'react';

import SearchForm from '../components/shop/SearchForm';
import DevList from '../components/shop/DevList';
import ShopStore from '../stores/ShopStore';

export default class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = ShopStore.getState();
  }

  render() {
    return (
      <div>
        <SearchForm/>
        <DevList data={this.state.developers}/>
      </div>
    );
  }
}