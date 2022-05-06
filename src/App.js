
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/home/Home';
import Footer from './components/Footer';
import RegistroComercio from './components/comercial/RegistroComercio';
import RegistroTransporte from './components/transporte/RegistroTransporte';

function App() {
  return (
    <div className="body">
      <header >
        {/* <NavBar /> */}
      </header>
        <Home />
        <RegistroComercio/>
        <RegistroTransporte/>
      <footer>
        {/* <Footer /> */}
      </footer>
    </div>
  );
}

export default App;
