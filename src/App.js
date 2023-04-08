import './App.css';
import 'leaflet/dist/leaflet.css';
import Header from './components/Header'
import PetFinder from './components/PetFinder'
import Footer from './components/Footer'
import About from './components/About';

function App() {
  return (
    <div className="app">
      <Header />
      <About />
      <PetFinder />
      <Footer />
    </div>
  );
}

export default App;
