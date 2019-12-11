import React from 'react';
import { reduxForm, Field } from 'redux-form';

const CadastrarForm = props => {
  const { handleSubmit } = props;

  return (
    <form className="col s12" onSubmit={handleSubmit}>
      <div className="input-field col s12">
        <Field name="nome" component="input" placeholder="Nome" />
        <Field name="cpf" component="input" placeholder="cpf" />
        <Field name="descricao" component="input" placeholder="Descrição" />
        <button className="btn waves-effect waves-light" type="submit">
          Enviar
        </button>
      </div>
    </form>
  );
};

export default reduxForm({ form: 'cadastrarForm' })(CadastrarForm);
