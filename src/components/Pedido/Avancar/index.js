import React, { Component } from 'react';
import axios from 'axios';
import Legenda from '../Legenda';

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

  buscarPedidos() {
    axios.get(API_URL).then(response => {
      this.setState({ pedidos: response.data });
    });
  }

  getPedidos() {
    return this.state.pedidos.map(pedido => <h1> {pedido.nome} </h1>);
  }

  render() {
    const pedidos = this.getPedidos();
    return (
      <div className="section no-pad-bot" id="index-banner">
        <div className="container">
          <h1 className="header center orange-text">
            Avançar status dos pedidos
          </h1>
          {pedidos}
          <br />
          <br />
          <Legenda />
        </div>
      </div>
    );
  }
}

export default Avancar;
