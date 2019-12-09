import React from 'react';
import { Status } from './styles';

export default function Legenda() {
  const flex = {
    display: 'flex',
    alignItems: 'center',
  };
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <span style={{ fontWeight: 'bold' }}>Legenda</span>
      <div style={flex}>
        <Status color="red" /> Pedido novo
      </div>
      <div style={flex}>
        <Status color="yellow" /> Pedido sendo preparado
      </div>
      <div style={flex}>
        <Status color="green" /> Pedido em conferência
      </div>
      <div style={flex}>
        <Status color="blue" /> Pronto para pagamento
      </div>
    </div>
  );
}
