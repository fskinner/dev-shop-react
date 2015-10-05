import * as types from '../constants/ActionTypes';
import { CALL_API } from '../middlewares/api';

export function filterOrganization(org) {
  console.log(org);
  return {
    [CALL_API]: {
      types: [types.ORG_REQUEST, types.ORG_SUCCESS, types.ORG_FAILURE],
      endpoint: `/orgs/${org}/users`
    }
  }
}

export function clearOrganization() {
  return {
    [CALL_API]: {
      types: [ORG_REQUEST, ORG_SUCCESS, ORG_FAILURE],
      endpoint: `/users`
    }
  }
}

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
