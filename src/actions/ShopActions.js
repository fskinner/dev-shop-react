import flux from '../flux';

class ShopActions {
  addToCart(dev) {
    this.dispatch(dev);
  }

  removeFromCart(id) {
    this.dispatch(id);
  }

  search(text) {
    this.dispatch(text);
  }
}

export default flux.createActions(ShopActions);