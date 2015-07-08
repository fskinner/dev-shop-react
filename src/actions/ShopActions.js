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

  addVoucher(text) {
    this.dispatch(text);
  }

  removeVoucher() {
    this.dispatch();
  }
}

export default flux.createActions(ShopActions);