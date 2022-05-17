
import './App.css';
import { ReactDOM } from 'react';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/home/Home';
import Footer from './components/Footer';
import RegistroComercio from './components/comercial/RegistroComercio';
import RegistroTransporte from './components/transporte/RegistroTransporte';
import BuscarTransporte from './components/transporte/BuscarTransporte';
import SolicitudTransporte from './components/comercial/SolicitudTransporte';
import MiCuenta from './components/comercial/MiCuenta';
import MisPedidos from './components/comercial/MisPedidos';
import ConfirmarPedido from './components/comercial/ConfirmarPedido';

import Sidebar from './components/sidebar/Sidebar';
import { TiThMenu } from "react-icons/ti";
import { AiFillHome } from 'react-icons/ai';
function App() {
  var [show, setShow] = React.useState(false);

  //  crear funcion que cambie el estado de show
  const setMenu = (event) => {
    // console.log(event)
    event.preventDefault();
    var mostrar = !show;
    setShow(mostrar);
  }
  return (
    <div className="body">

      <BrowserRouter basename='/fletsy'>
        <div className='navbar'>

          <div className='home'>
            <Link to="/"><AiFillHome /></Link>
          </div>

          <div className="menu" onClick={setMenu} >
            <TiThMenu />
          </div>
        </div>
        {show && <Sidebar onClick={setMenu} />}
        <Routes>


          <Route exact path="/" element={<Home />} />
          <Route path="/comercio/registrar" element={<RegistroComercio />} />
          <Route path="/transporte/registrar" element={<RegistroTransporte />} />
          <Route path="/transporte/oferta" element={<BuscarTransporte />} />
          <Route path="/comercio/pedidos" element={<SolicitudTransporte />} />
          <Route path="/comercio/micuenta" element={<MiCuenta />} />
          <Route path="/comercio/mispedidos" element={<MisPedidos />} />
          <Route path="/comercio/confirmar" element={<ConfirmarPedido/>} />
        </Routes>
      </BrowserRouter>
      <footer>
        {/* <Footer /> */}
      </footer>
    </div>
  );
}

export default App;
