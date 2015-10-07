import { ORG_REQUEST, ORG_SUCCESS, ORG_FAILURE } from '../constants/ActionTypes';

const initialState = {
  developers: [
    {id: 1041, username: 'joao', price: 33.20},
    {id: 20073, username: 'jorge', price: 41.75},
    {id: 2248, username: 'pedro', price: 32},
    {id: 4660, username: 'paulo', price: 97.10}
  ],
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
