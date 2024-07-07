import './App.css';
import Footer from './component/Footer';
import NavBar from './component/NavBar';
import Shop from './pages/Shop';

function App() {
  return (
    <div className="App">
       <NavBar />
       <Shop />
       <Footer /> 
    </div>
  );
}

export default App;
