import * as types from '../actions/actionTypes';

export default function pedidoReducers(state = [], action) {
  switch (action.type) {
    case types.CARREGAR_PEDIDOS:
      return [...state, action.pedidos];
    case types.CRIAR_PEDIDO_SUCESSO:
      return [...state, { ...action.pedido }];
    default:
      return state;
  }
}
