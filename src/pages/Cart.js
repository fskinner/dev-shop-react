import React from 'react';

import DevList from '../components/shop/DevList';
import ShopStore from '../stores/ShopStore';

export default class Cart extends React.Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      cart: ShopStore.getState().get('cart')
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
      cart: state.get('cart')
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
        <DevList data={this.state.cart} cart={this.state.cart} page={"cart"}/>
        <a href="#/" className="btn btn-default pull-left top-offset-20 bottom-offset-20 ng-scope">Continue shopping</a>
        <a href="#/checkout" className="btn btn-primary btn-lg pull-right" onClick={this.handleClick}>Proceed to Checkout</a>
      </div>
    );
  }
}
