import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import pedidos from './pedidoReducers';

const rootReducer = combineReducers({
  pedidos,
  form: formReducer,
});

export default rootReducer;
