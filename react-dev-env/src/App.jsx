import "./App.css";
import { Route, Routes } from "react-router-dom";
import NavigationBar from "./NavigationBar";
import Products from "./Products";
import Home from "./Home";
import Footer from "./Footer";
import ProductPage from "./ProductPage";

function App() {
  return (
    <div className="App">
      <h1 id="site-title">Just One Byte</h1>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<h1>Cart</h1>} />
        <Route path="/products/:id" element={<ProductPage></ProductPage>} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
