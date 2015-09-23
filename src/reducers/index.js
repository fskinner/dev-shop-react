import { combineReducers } from 'redux';
import devs from './devs';
import vouchers from './vouchers';
import cart from './cart';

const rootReducer = combineReducers({devs, vouchers, cart});

export default rootReducer;
