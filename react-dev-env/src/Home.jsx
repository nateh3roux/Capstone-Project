import "./App.css";
import { useState, useEffect } from "react";

const Home = () => {
  let [type, setType] = useState([]);
  async function fetchType() {
    let response = await fetch("http://localhost:3000/type");
    let data = await response.json();
    setType(data);
  }

  useEffect(() => {
    fetchType();
  }, []);
  console.log(type);
  return (
    <div>
      <h1>Byte Categories</h1>;
      <section id="type-list">
        {type.map((product, index) => (
          <li key={index}>{product.typeName}</li>
        ))}
      </section>
    </div>
  );
};

export default Home;
