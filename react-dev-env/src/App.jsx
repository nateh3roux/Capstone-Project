<<<<<<< HEAD
import { useState } from 'react'
import './App.css'
import { Route, Routes } from "react-router-dom";
import NavigationBar from './NavigationBar';
import Products from './Products'
import Home from './Home'

function App() {
  return (
    <div className="App">
      <h1 id= 'site-title'>Just One Byte</h1>
=======
import "./App.css";
import { Route, Routes } from "react-router-dom";
import NavigationBar from "./NavigationBar";
import Products from "./Products";
import Home from "./Home";
import Footer from "./Footer";
import ProductPage from "./ProductPage";
import CartPage from "./CartPage";

function App() {

  return (
    <div className="App">
      <h1 id="site-title">Just One Byte</h1>
>>>>>>> a05c306055388bd60cacfd689d19ea30effe66eb
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
<<<<<<< HEAD
        <Route path="/cart" element={<h1>Cart</h1>} />
      </Routes>
=======
        <Route path="/cart" element={<CartPage/>} />
        <Route path="/products/:id" element={<ProductPage></ProductPage>} />
      </Routes>
      <Footer></Footer>
>>>>>>> a05c306055388bd60cacfd689d19ea30effe66eb
    </div>
  );
}

<<<<<<< HEAD

export default App
=======
export default App;
>>>>>>> a05c306055388bd60cacfd689d19ea30effe66eb
