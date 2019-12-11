import axios from 'axios';
import { reset as resetForm } from 'redux-form';
import * as types from './actionTypes';

const URL = 'http://localhost:3004/pedidos';

export function criarPedido(pedido) {
  const inner = pedido;
  inner.cadastrado_em = new Date();
  inner.status = 'novo';

  return dispath => {
    axios.post(URL, inner).then(() => {
      dispath(resetForm('cadastrarForm'));
      dispath({ type: types.CRIAR_PEDIDO_SUCESSO });
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
