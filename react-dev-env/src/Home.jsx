import "./App.css";
import { useState, useEffect } from "react";
import ImageCard from "./ImageCard";

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
      {/* <h1>Byte Categories</h1>; */}
      <section id="categories-list">
        {type.map((product, index) => (
          <ImageCard key={index} imageUrl={product.imageUrl} name={product.typeName}></ImageCard>
        ))}
      </section>
    </div>
  );
};

export default Home;
