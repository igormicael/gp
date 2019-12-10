import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Acompanhamento from './views/Acompanhar';
import Cadastro from './views/Cadastrar';
import Avancar from './views/Avancar';
import Caixa from './views/Caixa';

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
