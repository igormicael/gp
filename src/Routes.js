import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Acompanhamento from './components/Acompanhamento';
import Cadastro from './components/Cadastro';
import Caixa from './components/Caixa';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Acompanhamento}>
        Acompanhar Pedido
      </Route>
      <Route exact path="/cadastro" component={Cadastro}>
        Cadastrar Pedido
      </Route>
      <Route exact path="/caixa" component={Caixa}>
        Caixa
      </Route>
    </Switch>
  );
}
