import "./App.css";
import { Route, Routes } from "react-router-dom";
import NavigationBar from "./NavigationBar";
import Products from "./Products";
import Home from "./Home";
import Footer from "./Footer";
import ProductPage from "./ProductPage";
import CartPage from "./CartPage";
import Header from "./Header";

function App() {
  const headerProps = {
    siteTitle: "Just One Byte",
    logoUrl: "images/Just_One_Byte.png",
  };

  return (
    <div className="App">
      <Header
        title={headerProps.siteTitle}
        logoUrl={headerProps.logoUrl}
      ></Header>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/products/:id" element={<ProductPage></ProductPage>} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
