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
        {type.map((category, index) => (
          <ImageCard
            key={index}
            id={category.id}
            imageUrl={category.imageUrl}
            name={category.typeName}
          ></ImageCard>
        ))}
      </section>
    </div>
  );
};

export default Home;
