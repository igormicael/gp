import axios from 'axios';
import * as types from './actionTypes';

const URL = 'http://localhost:3004/pedidos';

export function criarPedido(pedido) {
  return dispath => {
    axios.post(URL, pedido).then(() => {
      dispath({ type: types.CRIAR_PEDIDO_SUCESSO, pedido });
    });
  };
}

export function carregarPedidosSucesso(pedidos) {
  return { type: types.CARREGAR_PEDIDOS, pedidos };
}

export function carregarPedidos() {
  return dispath => {
    axios.get(URL).then(pedidos => {
      dispath(carregarPedidosSucesso(pedidos.data));
    });
  };
}
