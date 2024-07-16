import "./App.css";
import Cart from "./customer/components/Cart/Cart";
import Checkout from "./customer/components/Checkout/Checkout";
import Footer from "./customer/components/Footer/Footer";
import Navigation from "./customer/components/Navigation/Navigation";
import Order from "./customer/components/Order/Order";
import Product from "./customer/components/Product/Product";
import ProductDetails from "./customer/components/ProductDetails/ProductDetails";
import Homepage from "./customer/pages/Homepage/Homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navigation />
                <Homepage />
                <Footer />
              </>
            }
          />
          <Route
            path="/products"
            element={
              <>
                <Navigation />
                <Product />
                <Footer />
              </>
            }
          />
          <Route
            path="/productDetails"
            element={
              <>
                <Navigation />
                <ProductDetails />
                <Footer />
              </>
            }
          />
          <Route
            path="/cart"
            element={
              <>
                <Navigation />
                <Cart/>
                <Footer />
              </>
            }
          />
          <Route
            path="/checkout"
            element={
              <>
                <Navigation />
                <Checkout/>
                <Footer />
              </>
            }
          />
          <Route
            path="/order"
            element={
              <>
                <Navigation />
                <Order/>
                <Footer />
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
