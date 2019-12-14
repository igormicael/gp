import React from 'react';

export default function StatusPedido({ status }) {
  let color;

  switch (status) {
    case 2:
      color = 'yellow';
      break;
    case 3:
      color = 'green';
      break;
    case 4:
      color = 'blue';
      break;
    case 5:
      color = 'black';
      break;
    default:
      // 1
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
