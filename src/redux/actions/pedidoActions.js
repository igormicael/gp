import axios from 'axios';
import { reset as resetForm } from 'redux-form';
import * as types from './actionTypes';

const URL = 'http://localhost:3004/pedidos';

export function criarPedido(pedido) {
  const inner = pedido;
  inner.cadastrado_em = new Date();
  inner.ativo = true;
  inner.status = 1;

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
    axios.get(`${URL}?ativo=true`).then(pedidos => {
      dispath(carregarPedidosSucesso(pedidos.data));
    });
  };
}

export function carregarPedidosProntos() {
  return dispath => {
    axios.get(`${URL}?ativo=true&status=4`).then(pedidos => {
      dispath(carregarPedidosSucesso(pedidos.data));
    });
  };
}

export function excluirPedido(pedido) {
  return () => {
    axios.patch(`${URL}/${pedido.id}`, { ativo: false }).then(() => {
      this.carregarPedidos();
    });
  };
}

export function avancarPedido(pedido, next) {
  return () => {
    axios
      .patch(`${URL}/${pedido.id}`, { status: pedido.status + 1 })
      .then(() => {
        next();
      });
  };
}
