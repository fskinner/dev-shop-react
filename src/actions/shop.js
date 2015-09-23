import * as types from '../constants/ActionTypes';

export function addToCart(dev) {
  return { type: types.ADD_TO_CART, dev };
}

export function removeFromCart(id) {
  return { type: types.REMOVE_FROM_CART, id };
}

export function clearCart() {
  return { type: types.CLEAR_CART };
}

export function search(text) {
  return { type: types.SEARCH, text };
}

export function addVoucher(text) {
  return { type: types.ADD_VOUCHER, text };
}

export function removeVoucher() {
  return { type: types.REMOVE_VOUCHER };
}
