const ProductDetails = ({ id, name, price, description, inStock, imageUrl }) => {
    
  return (
    <div id="product-details-div">
      <img id="product-details-img" src={imageUrl}></img>
      <div id="product-details-name-price">
        <h3 id="product-details-name">{name}</h3>
        {inStock ? (
          <p id="product-details-price">${price}</p>
        ) : (
          <p>Item is out of stock</p>
        )}
      <p id="product-details-description">{description}</p>
      
      </div>
    </div>
  );
};

export default ProductDetails;
