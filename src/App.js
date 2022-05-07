
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/home/Home';
import Footer from './components/Footer';
import RegistroComercio from './components/comercial/RegistroComercio';
import RegistroTransporte from './components/transporte/RegistroTransporte';
import OfertaTransporte from './components/transporte/OfertaTransporte';
import SolicitudTransporte from './components/comercial/SolicitudTransporte';
function App() {
  return (
    <div className="body">
      <header >
        {/* <NavBar /> */}
      </header>
      <OfertaTransporte />
      {/* <SolicitudTransporte /> */}
      <Home />
      {/* <RegistroComercio/> */}
      {/* <RegistroTransporte/> */}
      <footer>
        {/* <Footer /> */}
      </footer>
    </div>
  );
}

export default App;
