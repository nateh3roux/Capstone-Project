import { useNavigate } from "react-router-dom";

const ImageCard = ({ imageUrl, name, id }) => {
  const navigate = useNavigate();

  return (
    <div
      id="image-card-div"
      onClick={() => {
        navigate(`/type/${id}/products`);
      }}
    >
      <img id="image-card-img" src={imageUrl}></img>
      <div className="overlay">
        <h3 id="image-card-text">{name}</h3>
      </div>
    </div>
  );
};

export default ImageCard;
