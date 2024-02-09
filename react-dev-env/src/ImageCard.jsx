const ImageCard = ({ imageUrl, name }) => {
  return (
    <div id="image-card-div">
      <img id="image-card-img" src={imageUrl}></img>
      <div className="overlay">
        <h3 id="image-card-text">{name}</h3>
      </div>
    </div>
  );
};

export default ImageCard;
