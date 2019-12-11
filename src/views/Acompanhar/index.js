import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { carregarPedidos } from '../../redux/actions/pedidoActions';
import TempoEspera from '../../components/AcompanharList';
import Legenda from '../../components/Legenda';

class Acompanhamento extends Component {
  componentDidMount() {
    this.props.carregarPedidos();
  }

  getTempoEspera() {
    return this.props.pedidos.map(pedido => (
      <TempoEspera
        pedido={pedido}
        cliente={pedido.nome}
        data={pedido.cadastrado_em}
        status={pedido.status}
        key={pedido.id}
        id={pedido.id}
      />
    ));
  }

  render() {
    const esperas = this.getTempoEspera();
    return (
      <div className="section no-pad-bot" id="index-banner">
        <div className="container">
          <h1 className="header center orange-text">
            Acompanhamento de pedidos
          </h1>
          <div className="row">
            <div className="col s5 m5">Cliente</div>
            <div className="col s6 m6">Tempo em espera</div>
            <div className="col s1 m1">Status</div>
          </div>
          {esperas}
          <div className="warn">
            Atenção: Dirija-se ao caixa quando seu pedido estiver azul
          </div>
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
  return bindActionCreators({ carregarPedidos }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Acompanhamento);
