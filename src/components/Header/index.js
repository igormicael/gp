import React from 'react';
import { Link } from 'react-router-dom';

function Topo() {
  return (
    <nav className="indigo darken-4" role="navigation">
      <div className="nav-wrapper container">
        <a id="logo-container" href className="brand-logo">
          React GP
        </a>
        <ul className="right">
          <li>
            <Link to="/">Acompanhar Pedidos</Link>
          </li>
          <li>
            <Link to="/cadastro">Cadastrar Pedidos</Link>
          </li>
          <li>
            <Link to="/caixa">Caixa</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Topo;
