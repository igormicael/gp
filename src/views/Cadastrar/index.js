import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { criarPedido } from '../../redux/actions/pedidoActions';
import CadastrarForm from '../../components/CadastrarForm';

function Cadastro(props) {
  return (
    <div className="row">
      <h1>Cadastro de pedidos</h1>
      <CadastrarForm onSubmit={props.criarPedido} />
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ criarPedido }, dispatch);
}

export default connect(null, mapDispatchToProps)(Cadastro);
