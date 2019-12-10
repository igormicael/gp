import React, { Component } from 'react';
import axios from 'axios';
import Legenda from '../../components/Legenda';
import AvancarList from '../../components/AvancarList';

const API_URL = 'http://localhost:3004/pedidos/';

class Avancar extends Component {
  constructor() {
    super();
    this.state = {
      pedidos: [],
    };
  }

  componentDidMount() {
    this.buscarPedidos();
  }

  getPedidos() {
    return this.state.pedidos.map(pedido => (
      <AvancarList pedido={pedido} key={pedido.id} />
    ));
  }

  buscarPedidos() {
    axios.get(API_URL).then(response => {
      this.setState({ pedidos: response.data });
    });
  }

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

export default Avancar;
