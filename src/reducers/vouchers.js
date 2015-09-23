import { ADD_VOUCHER, REMOVE_VOUCHER } from '../constants/ActionTypes';

const initialState = {
  voucher: ''
};

export default function vouchers(state = initialState, action) {
  switch (action.type) {
  case ADD_VOUCHER:
    return {voucher: action.text};

  case REMOVE_VOUCHER:
    return {voucher: ''};

  default:
    return state;
  }
}
