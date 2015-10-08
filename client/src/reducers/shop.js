import { ORG_REQUEST, ORG_SUCCESS, ORG_FAILURE } from '../constants/ActionTypes';

const initialState = {
  loading: false,
  error: ''
};

export default function shop(state = initialState, action) {
  const { response } = action;

  switch (action.type) {
  case ORG_REQUEST:
    return Object.assign({}, state, { loading: true, error: '' });

  case ORG_SUCCESS:
    return Object.assign({}, state, { loading: false, developers: response.payload.developers });

  case ORG_FAILURE:
    return Object.assign({}, state, { loading: false, error: action.error });

  default:
    return state;
  }
}
