import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./Home";
import Cart from "./Cart";
import Shop from "./Shop";
import ProductDetails from "./ProductDetails";
import Login from "./Login";
import Register from "./Register";
import Checkout from "./Checkout";
import AboutUs from "./AboutUs";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="products" element={<Shop />} />
        <Route path="products/:id" element={<ProductDetails />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="cart" element={<Cart />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="aboutUs" element={<AboutUs />} />
      </Route>
    </Routes>
  );
}

export default App;