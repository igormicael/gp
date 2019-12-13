import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  carregarPedidos,
  excluirPedido,
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
        onExcluir={this.handleExcluir}
        key={pedido.id}
      />
    ));
  }

  handleExcluir = pedido => {
    this.props.excluirPedido(pedido);
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
            <div className="col s8 m8">Cliente</div>
            <div className="col s1 m1">Status</div>
            <div className="col s3 m3">Ações</div>
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
  return bindActionCreators({ carregarPedidos, excluirPedido }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Avancar);
