import { useState } from "react";
import "./App.css";
// import T from './AllCharacters';
import { Route, Routes } from "react-router-dom";
import NavigationBar from "./NavigationBar";
import Products from "./Products";
import Home from './Home';

function App() {
  return (
    <div className="App">
      <h1 id='site-title'>Just One Byte</h1>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<h1>Cart</h1>} />
      </Routes>
    </div>
  );
}

export default App;
