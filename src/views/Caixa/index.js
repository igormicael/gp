import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  carregarPedidosProntos,
  avancarPedido,
} from '../../redux/actions/pedidoActions';
import CaixaList from '../../components/CaixaList';
import Legenda from '../../components/Legenda';

class Caixa extends Component {
  componentDidMount() {
    this.props.carregarPedidosProntos();
  }

  getPedidos() {
    return this.props.pedidos.map(pedido => (
      <CaixaList
        pedido={pedido}
        onAvancar={this.handleAvancar}
        key={pedido.id}
      />
    ));
  }

  handleAvancar = pedido => {
    this.props.avancarPedido(pedido, () => this.props.carregarPedidosProntos());
  };

  render() {
    const caixaList = this.getPedidos();
    return (
      <div className="section no-pad-bot" id="index-banner">
        <div className="container">
          <h1 className="header center orange-text">Caixa</h1>
          <div className="row">
            <div className="col s8 m8">Cliente</div>
            <div className="col s1 m1">Status</div>
            <div className="col s3 m3">Ações</div>
          </div>
          {caixaList}
          <br />
          <br />
          <Legenda />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    pedidos: state.pedidos,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { carregarPedidosProntos, avancarPedido },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Caixa);
