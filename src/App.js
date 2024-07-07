import './App.css';
import Footer from './component/Footer';
import NavBar from './component/NavBar';
import Shop from './pages/Shop';
import ProductDisplay from './pages/ProductDisplay';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ShopContextProvider from './context/shopContext';

function App() {
  return (
    <div className="App">
       <NavBar />
       <ShopContextProvider>
       <Router>
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/product/:id" element={<ProductDisplay />} />
        </Routes>
       </Router>
       </ShopContextProvider>
       <Footer /> 
    </div>
  );
}

export default App;
