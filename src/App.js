import React from 'react';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Routes from './Routes';

function App() {
  return (
    <div>
      <Header />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
