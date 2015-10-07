import {
  CART_ADD_SUCCESS,
  CART_REMOVE_SUCCESS,
  CLEAR_CART
} from '../constants/ActionTypes';

const initialState = [];

export default function cart(state = initialState, action) {
  const { response } = action;

  switch (action.type) {
  case CART_ADD_SUCCESS:
    return [{
      id: response.payload.id,
      username: response.payload.username,
      price: response.payload.price,
      photo: response.payload.photo
    }, ...state];

  case CART_REMOVE_SUCCESS:
    return state.filter(dev => dev.id !== response.payload.id);

  case CLEAR_CART:
    return initialState;

  default:
    return state;
  }
}
