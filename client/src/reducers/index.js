import { combineReducers } from 'redux';
import shop from './shop';
import vouchers from './vouchers';
import cart from './cart';

const rootReducer = combineReducers({shop, vouchers, cart});

export default rootReducer;
