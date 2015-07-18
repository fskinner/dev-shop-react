import flux from '../flux';
import Immutable from 'immutable';
import immutable from 'alt/utils/ImmutableUtil';

import ShopActions from '../actions/ShopActions';

@immutable
class ShopStore {
  constructor() {
    this.state = Immutable.Map({
      developers: Immutable.List.of(
        Immutable.Map({id: 1041, username: 'joao', price: '33', organization: 'angular'}),
        Immutable.Map({id: 20073, username: 'jorge', price: '41', organization: 'angular'}),
        Immutable.Map({id: 2248, username: 'pedro', price: '32', organization: 'backbone'}),
        Immutable.Map({id: 4660, username: 'paulo', price: '97', organization: 'ember'}),
        Immutable.Map({id: 748, username: 'tom', price: '37', organization: 'backbone'}),
        Immutable.Map({id: 10574, username: 'tomas', price: '7', organization: 'backbone'}),
        Immutable.Map({id: 14319, username: 'thiago', price: '12', organization: 'react'}),
        Immutable.Map({id: 145949, username: 'tereza', price: '66', organization: 'react'}),
        Immutable.Map({id: 15557, username: 'sofia', price: '75', organization: 'vanilla'}),
        Immutable.Map({id: 322, username: 'luke', price: '70', organization: 'ember'}),
        Immutable.Map({id: 1681405, username: 'maria', price: '34', organization: 'vanilla'}),
        Immutable.Map({id: 2823287, username: 'eduarda', price: '40', organization: ''}),
        Immutable.Map({id: 3530, username: 'renato', price: '31', organization: 'react'}),
        Immutable.Map({id: 22728, username: 'flavio', price: '96', organization: 'react'}),
        Immutable.Map({id: 772, username: 'alex', price: '37', organization: 'angular'}),
        Immutable.Map({id: 2631, username: 'tobias', price: '8', organization: 'angular'}),
        Immutable.Map({id: 635, username: 'daniel', price: '11', organization: 'angular'}),
        Immutable.Map({id: 676210, username: 'pele', price: '66', organization: 'aurelia'}),
        Immutable.Map({id: 849872, username: 'orlando', price: '77', organization: 'aurelia'}),
        Immutable.Map({id: 192618, username: 'leia', price: '70', organization: 'aurelia'})
      ),
      searchText: '',
      cart: Immutable.List(),
      voucher: ''
    });

    this.bindListeners({
      handleAddToCart: ShopActions.ADD_TO_CART,
      handleRemoveFromCart: ShopActions.REMOVE_FROM_CART,
      handleSearch: ShopActions.SEARCH,
      handleAddVoucher: ShopActions.ADD_VOUCHER,
      handleRemoveVoucher: ShopActions.REMOVE_VOUCHER
    });
  }

  handleAddToCart(dev) {
    const cart = this.state.get('cart').push(dev);

    this.setState(this.state.set('cart', cart));
  }

  handleSearch(text) {
    this.setState(this.state.set('searchText', text));
  }

  handleRemoveFromCart(id) {
    const cart = this.state.get('cart').filter(item => item.get('id') !== id);

    this.setState(this.state.set('cart', cart));
  }

  handleAddVoucher(text) {
    this.setState(this.state.set('voucher', text));
  }

  handleRemoveVoucher() {
    this.setState(this.state.set('voucher', ''));
  }
}

export default flux.createStore(ShopStore, 'ShopStore');
