import { combineReducers } from 'redux';
import pedidos from './pedidoReducers';

const rootReducer = combineReducers({
  pedidos,
});

export default rootReducer;
