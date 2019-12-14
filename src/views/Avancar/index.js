import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  carregarPedidos,
  excluirPedido,
  avancarPedido,
} from '../../redux/actions/pedidoActions';
import Legenda from '../../components/Legenda';
import AvancarList from '../../components/AvancarList';

class Avancar extends Component {
  componentDidMount() {
    this.props.carregarPedidos();
  }

  getPedidos() {
    return this.props.pedidos.map(pedido => (
      <AvancarList
        pedido={pedido}
        onAvancar={this.handleAvancar}
        onExcluir={this.handleExcluir}
        key={pedido.id}
      />
    ));
  }

  handleExcluir = pedido => {
    this.props.excluirPedido(pedido);
  };

  handleAvancar = pedido => {
    this.props.avancarPedido(pedido, this.props.carregarPedidos);
  };

  render() {
    const avancarList = this.getPedidos();
    return (
      <div className="section no-pad-bot" id="index-banner">
        <div className="container">
          <h1 className="header center orange-text">
            Avançar status dos pedidos
          </h1>
          <div className="row">
            <div className="col s7 m7">Cliente</div>
            <div className="col s1 m1">Status</div>
            <div className="col s4 m4">Ações</div>
          </div>
          {avancarList}
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
    { carregarPedidos, excluirPedido, avancarPedido },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Avancar);
