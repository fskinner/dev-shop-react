import * as types from '../constants/ActionTypes';
import { CALL_API } from '../middlewares/api';

export function filterOrganization(org) {
  return {
    [CALL_API]: {
      types: [types.ORG_REQUEST, types.ORG_SUCCESS, types.ORG_FAILURE],
      method: 'GET',
      endpoint: `/orgs/${org}/users`
    }
  }
}

export function getShop() {
  return {
    [CALL_API]: {
      types: [types.ORG_REQUEST, types.ORG_SUCCESS, types.ORG_FAILURE],
      method: 'GET',
      endpoint: `/users`
    }
  }
}

export function fetchCart() {
  return {
    [CALL_API]: {
      types: [types.CART_FETCH_REQUEST, types.CART_FETCH_SUCCESS, types.CART_FETCH_FAILURE],
      method: 'GET',
      endpoint: '/cart'
    }
  }
}

export function addToCart(dev) {
  return {
    [CALL_API]: {
      types: [types.CART_ADD_REQUEST, types.CART_ADD_SUCCESS, types.CART_ADD_FAILURE],
      method: 'POST',
      endpoint: '/cart',
      data: dev
    }
  }
}

export function removeFromCart(id) {
  return {
    [CALL_API]: {
      types: [types.CART_REMOVE_REQUEST, types.CART_REMOVE_SUCCESS, types.CART_REMOVE_FAILURE],
      method: 'DELETE',
      endpoint: `/cart/${id}`,
      payload: {
        id
      }
    }
  }
}

export function clearCart() {
  return {
    [CALL_API]: {
      types: [types.CART_CLEAR_REQUEST, types.CART_CLEAR_SUCCESS, types.CART_CLEAR_FAILURE],
      method: 'DELETE',
      endpoint: `/cart`,
      payload: {
        cart: []
      }
    }
  }
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
