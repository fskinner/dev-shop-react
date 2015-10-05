import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from '../constants/ActionTypes';

const initialState = [];

export default function cart(state = initialState, action) {
  switch (action.type) {
  case ADD_TO_CART:
    return [{
      id: action.dev.id,
      username: action.dev.username,
      price: action.dev.price,
      photo: action.dev.photo
    }, ...state];

  case REMOVE_FROM_CART:
    return state.filter(dev => dev.id !== action.id);

  case CLEAR_CART:
    return [];

  default:
    return state;
  }
}
