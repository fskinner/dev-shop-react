import {
  CART_ADD_SUCCESS,
  REMOVE_FROM_CART,
  CLEAR_CART
} from '../constants/ActionTypes';

const initialState = [];

export default function cart(state = initialState, action) {
  switch (action.type) {
  case CART_ADD_SUCCESS:
    return [{
      id: action.response.id,
      username: action.response.username,
      price: action.response.price,
      photo: action.response.photo
    }, ...state];

  case REMOVE_FROM_CART:
    return state.filter(dev => dev.id !== action.id);

  case CLEAR_CART:
    return [];

  default:
    return state;
  }
}
