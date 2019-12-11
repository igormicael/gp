import React from 'react';
import { parseISO, formatDistance } from 'date-fns';
import { pt } from 'date-fns/locale';
import StatusPedido from '../StatusPedido';

const TempoEspera = ({ cliente, data, status }) => {
  console.log(cliente);
  console.log(data);
  console.log(status);
  const dataAsString = parseISO(data);
  const i = formatDistance(dataAsString, new Date(), { locale: pt });

  const flex = {
    display: 'flex',
    alignItems: 'center',
  };

  return (
    <>
      <div style={flex} className="row">
        <div className="col s5 m5">
          <div className="card indigo darken-3">
            <div className="card-content white-text">
              <span className="card-title">{cliente}</span>
            </div>
          </div>
        </div>

        <div className="col s6 m6">
          <div className="card indigo darken-3">
            <div className="card-content white-text">
              <span className="card-title">{i}</span>
            </div>
          </div>
        </div>

        <div className="col s1 m1">
          <StatusPedido status={status} />
        </div>
      </div>
    </>
  );
};

export default TempoEspera;
