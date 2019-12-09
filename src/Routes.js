import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Acompanhamento from './components/Pedido/Acompanhar';
import Cadastro from './components/Pedido/Cadastrar';
import Avancar from './components/Pedido/Avancar';
import Caixa from './components/Pedido/Caixa';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Acompanhamento} />
      <Route exact path="/cadastro" component={Cadastro} />
      <Route exact path="/avancar" component={Avancar} />
      <Route exact path="/caixa" component={Caixa} />
    </Switch>
  );
}
