import React, { Component } from 'react';
import axios from 'axios';
import TempoEspera from '../../components/AcompanharList';
import Legenda from '../../components/Legenda';

const API_URL = 'http://localhost:3004/pedidos/';

class Acompanhamento extends Component {
  constructor() {
    super();
    this.state = {
      pedidos: [],
    };
  }

  componentDidMount() {
    this.buscarPedidos();
  }

  getTempoEspera() {
    return this.state.pedidos.map(pedido => (
      <TempoEspera
        cliente={pedido.nome}
        data={pedido.cadastrado_em}
        status={pedido.status}
        key={pedido.id}
        id={pedido.id}
      />
    ));
  }

  buscarPedidos() {
    axios.get(API_URL).then(response => {
      this.setState({ pedidos: response.data });
    });
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

export default Acompanhamento;
