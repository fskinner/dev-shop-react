import React from 'react';

import SearchForm from '../components/shop/SearchForm';
import DevList from '../components/shop/DevList';
import ShopStore from '../stores/ShopStore';

export default class Page extends React.Component {
  constructor(props) {
    super(props);

    this.state = ShopStore.getState();
    this.onChange = this.onChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
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

  handleClick(e) {
    if(this.state.cart.length === 0) {
      e.preventDefault();
    }
  }

  render() {
    return (
      <div>
        <SearchForm />
        <DevList data={this.state.developers} filter={this.state.searchText} cart={this.state.cart} page={"shop"}/>
        <a href="#/cart" className="btn btn-primary btn-lg pull-right top-offset-20 bottom-offset-20" onClick={this.handleClick}>Go to cart</a>
      </div>
    );
  }
}
