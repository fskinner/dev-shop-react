import React from 'react';

import SearchForm from '../components/shop/SearchForm';
import DevList from '../components/shop/DevList';
import ShopStore from '../stores/ShopStore';

export default class Page extends React.Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      developers: ShopStore.getState().get('developers'),
      cart: ShopStore.getState().get('cart'),
      searchText: ShopStore.getState().get('searchText')
    };
  }

  componentDidMount() {
    ShopStore.listen(this.onChange);
  }

  componentWillUnmount() {
    ShopStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState({
      developers: state.get('developers'),
      cart: state.get('cart'),
      searchText: state.get('searchText')
    });
  }

  handleClick(e) {
    if(this.state.cart.size === 0) {
      e.preventDefault();
    }
  }

  render() {
    return (
      <div>
        <SearchForm />
        <DevList data={this.state.developers} cart={this.state.cart} filter={this.state.searchText} page={"shop"}/>
        <a href="#/cart" className="btn btn-primary btn-lg pull-right top-offset-20 bottom-offset-20" onClick={this.handleClick}>Go to cart</a>
      </div>
    );
  }
}
