import React from 'react';
import StatusPedido from '../StatusPedido';
import { Button } from './styles';

export default function AvancarList({ pedido }) {
  const flex = {
    display: 'flex',
    alignItems: 'center',
  };

  return (
    <>
      <div style={flex} className="row">
        <div className="col s8 m8">
          <div className="card indigo darken-3">
            <div className="card-content white-text">
              <span className="card-title">{pedido.nome}</span>
            </div>
          </div>
        </div>

        <div className="col s1 m1">
          <StatusPedido status={pedido.status} />
        </div>

        <div className="col s3 m3">
          <Button type="button"> seta </Button>
          <Button type="button"> foward </Button>
          <Button type="button"> x </Button>
        </div>
      </div>
    </>
  );
}
