import {
  CART_FETCH_SUCCESS,
  CART_ADD_SUCCESS,
  CART_REMOVE_SUCCESS,
  CART_CLEAR_SUCCESS
} from '../constants/ActionTypes';

const initialState = [];

export default function cart(state = initialState, action) {
  const { response } = action;

  switch (action.type) {
  case CART_FETCH_SUCCESS:
    return response.payload;

  case CART_ADD_SUCCESS:
    return [{
      id: response.payload.id,
      username: response.payload.username,
      price: response.payload.price,
      photo: response.payload.photo
    }, ...state];

  case CART_REMOVE_SUCCESS:
    return state.filter(dev => dev.id !== response.payload.id);

  case CART_CLEAR_SUCCESS:
    return initialState;

  default:
    return state;
  }
}
