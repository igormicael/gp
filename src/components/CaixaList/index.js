import React from 'react';
import StatusPedido from '../StatusPedido';

export default function CaixaList(props) {
  const { pedido } = props;
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
          <button
            className="waves-effect waves-light btn green"
            style={{ borderRadius: '50px' }}
            type="button"
            disabled={props.pedido.status !== 4}
            onClick={() => props.onAvancar(props.pedido)}
          >
            Finalizar pedido
          </button>
        </div>
      </div>
    </>
  );
}
