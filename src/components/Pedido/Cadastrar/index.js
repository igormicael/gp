import React, { Component } from 'react';
import axios from 'axios';

const URL = 'http://localhost:3004/pedidos';

const INITIAL_STATE = {
  id: 0,
  nome: '',
  cpf: '',
  descricao: '',
  cadastrado_em: new Date(),
  atualizado_em: null,
  status: 'novo',
};

class Cadastro extends Component {
  constructor(props) {
    super(props);
    this.state = INITIAL_STATE;
  }

  handleChange = event => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const pedido = { ...this.state };
    this.adicionarPedido(pedido);
    // eslint-disable-next-line react/no-access-state-in-setstate
    this.setState({ ...this.state, ...INITIAL_STATE });
  };

  adicionarPedido = pedido => {
    axios.post(URL, pedido);
  };

  render() {
    const { nome, cpf, descricao } = this.state;
    return (
      <div className="row">
        <h1>Cadastro de pedidos</h1>
        <form className="col s12" onSubmit={this.handleSubmit}>
          <div className="input-field col s12">
            <input
              placeholder="Nome"
              name="nome"
              value={nome}
              onChange={this.handleChange}
            />
            <br />
            <input
              type="text"
              placeholder="cpf"
              name="cpf"
              value={cpf}
              onChange={this.handleChange}
            />
            <textarea
              placeholder="Descrição"
              name="descricao"
              className="materialize-textarea"
              value={descricao}
              onChange={this.handleChange}
            />
            <button className="btn waves-effect waves-light" type="submit">
              Enviar
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Cadastro;
