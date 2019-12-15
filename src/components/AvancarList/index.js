import React from 'react';
import StatusPedido from '../StatusPedido';
import { Button } from './styles';

export default function AvancarList(props) {
  const { pedido } = props;
  const flex = {
    display: 'flex',
    alignItems: 'center',
  };

  return (
    <>
      <div style={flex} className="row">
        <div className="col s7 m7">
          <div className="card indigo darken-3">
            <div className="card-content white-text">
              <span className="card-title">{pedido.nome}</span>
            </div>
          </div>
        </div>

        <div className="col s1 m1">
          <StatusPedido status={pedido.status} />
        </div>

        <div className="col s4 m4">
          <Button
            className="waves-effect waves-light btn green"
            type="button"
            disabled={props.pedido.status >= 4}
            onClick={() => props.onAvancar(props.pedido)}
          >
            Avançar
          </Button>
          <Button
            className="waves-effect waves-light red btn"
            type="button"
            disabled={props.pedido.status >= 4}
            onClick={() => props.onExcluir(props.pedido)}
          >
            Excluir
          </Button>
        </div>
      </div>
    </>
  );
}
