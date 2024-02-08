const ImageCard = ({ imageUrl, name }) => {
  return (
    <div id="image-card-div">
      <img id="image-card-img" src={imageUrl}></img>
      <h3>{name}</h3>
    </div>
  );
};

export default ImageCard;
