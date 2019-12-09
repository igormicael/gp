import React from 'react';

export default function StatusPedido({ status }) {
  let color;

  switch (status) {
    case 'pagamento':
      color = 'blue';
      break;
    case 'sendo_preparado':
      color = 'yellow';
      break;
    case 'conferencia':
      color = 'green';
      break;
    default:
      color = 'red';
      break;
  }

  const css = {
    height: '25px',
    width: '25px',
    backgroundColor: color,
    borderRadius: '50%',
    display: 'inline-block',
  };

  return <span style={css} />;
}
