import flux from '../flux';

class ShopActions {
  addToCart(dev) {
    this.dispatch(dev);
  }

  search(text) {
    this.dispatch(text);
  }
}

export default flux.createActions(ShopActions);