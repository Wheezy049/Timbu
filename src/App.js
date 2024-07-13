import "./App.css";
import Footer from "./component/Footer";
import NavBar from "./component/NavBar";
import Shop from "./pages/Shop";
import ProductDisplay from "./pages/ProductDisplay";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ShopContextProvider from "./context/shopContext";
import CartItem from "./component/CartItem";
import Checkout from "./component/Checkout";

function App() {
  return (
    <ShopContextProvider>
      <Router>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/product/:id" element={<ProductDisplay />} />
            <Route path="/cart" element={<CartItem />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ShopContextProvider>
  );
}

export default App;
