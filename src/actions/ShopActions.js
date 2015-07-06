import flux from '../flux';

class ShopActions {
  addToCart(dev) {
    this.dispatch(dev);
  }
}

export default flux.createActions(ShopActions);